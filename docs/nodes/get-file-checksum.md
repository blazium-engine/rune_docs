---
sidebar_position: 3
---

# Get File Checksum Node

The Get File Checksum node calculates a checksum (hash) for a file.

![Get File Checksum Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Get File Checksum node calculates a cryptographic hash (checksum) for a file. This is useful for verifying file integrity, detecting changes, or generating unique identifiers for files.

## Execution Inputs

- **In** (execution): Triggers calculating the checksum

## Variable Inputs

- **Filename** (string): The path to the file for which to calculate the checksum

## Execution Outputs

- **Out** (execution): Execution continues here after calculation completes

## Variable Outputs

- **Checksum** (string): The calculated checksum (hash) of the file
- **Success** (boolean): "true" if the checksum was successfully calculated, "false" otherwise

## Special Notes

- The Filename path must point to an existing file
- Paths are relative to the flow's working directory if not absolute
- The checksum algorithm used depends on the implementation (typically SHA-256 or MD5)
- The node validates paths to prevent directory traversal attacks
- If the file doesn't exist or isn't accessible, Success will be "false"
- Checksums are returned as hexadecimal strings

## Example Usage

Calculate file checksum:
1. Set Filename to "data.txt" or an absolute path
2. Connect In to calculate the checksum
3. Check Success output to verify
4. Use Checksum output to get the file's hash value
5. Use the checksum for file verification or comparison

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

