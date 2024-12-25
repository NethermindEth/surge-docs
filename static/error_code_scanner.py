#!/usr/bin/env python3

import os
import re
import argparse
from eth_utils import keccak, to_hex

def generate_error_code(error_name, params=""):
    """Generate 4-byte error code from error name and parameters."""
    # Calculate keccak hash of the error signature
    error_signature = f"{error_name}({params})"
    error_hash = keccak(text=error_signature)
    # Take first 4 bytes and convert to hex
    return to_hex(error_hash)[:10]  # includes '0x' prefix

def scan_file(file_path):
    """Scan a single .sol file for error declarations."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # Updated pattern to match error declarations with optional parameters
        pattern = r'error\s+([A-Z_][A-Z0-9_]*)\s*\(([\w\s,]*)\)\s*;'

        matches = re.finditer(pattern, content)
        results = []

        for match in matches:
            error_name = match.group(1)
            params = match.group(2).strip()
            error_code = generate_error_code(error_name, params)
            results.append((error_name, error_code, params))

        return results
    except Exception as e:
        print(f"Error processing file {file_path}: {str(e)}")
        return []

def scan_directory(directory):
    """Recursively scan directory for .sol files and find error declarations."""
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.sol'):
                file_path = os.path.join(root, file)
                results = scan_file(file_path)

                if results:
                    print(f"\nIn file: {file_path}")
                    for error_name, error_code, params in results:
                        print(f"Error: {error_name}({params})")
                        print(f"Code: {error_code}")

def main():
    parser = argparse.ArgumentParser(description='Scan Solidity files for error declarations and generate error codes.')
    parser.add_argument('directory', help='Directory to scan for .sol files')
    args = parser.parse_args()

    if not os.path.isdir(args.directory):
        print(f"Error: {args.directory} is not a valid directory")
        return

    scan_directory(args.directory)

if __name__ == '__main__':
    main()