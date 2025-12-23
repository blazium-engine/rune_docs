---
sidebar_position: 4
---

# Git Add Files Node

The Git Add Files node adds multiple files to the Git staging area.

![Git Add Files Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Git Add Files node stages multiple files for commit. The FilePaths input accepts a JSON array of file paths or a newline-separated string.

## Execution Inputs

- **In** (execution): Triggers adding the files to staging

## Variable Inputs

- **RepositoryPath** (string): Path to the Git repository
- **FilePaths** (string): JSON array of file paths or newline-separated paths (relative to repository root)

## Execution Outputs

- **Out** (execution): Execution continues here after the files are added

## Variable Outputs

- **Success** (boolean): "true" if all files were successfully added, "false" otherwise
- **AddedCount** (integer): Number of files successfully added

## Special Notes

- FilePaths can be a JSON array like `["file1.txt", "file2.txt"]` or newline-separated
- File paths are relative to the repository root
- Files that don't exist will be skipped (but operation may still succeed)
- AddedCount indicates how many files were actually added
- RepositoryPath must point to a valid Git repository

## Example Usage

Add multiple files to staging:
1. Set RepositoryPath to the repository path
2. Set FilePaths to `["src/main.cpp", "src/utils.cpp", "README.md"]` or newline-separated paths
3. Connect In to add the files
4. Check Success and AddedCount outputs

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

