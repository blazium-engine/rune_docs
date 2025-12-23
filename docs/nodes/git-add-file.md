---
sidebar_position: 3
---

# Git Add File Node

The Git Add File node adds a single file to the Git staging area.

![Git Add File Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Git Add File node stages a single file for commit. The file path is relative to the repository root.

## Execution Inputs

- **In** (execution): Triggers adding the file to staging

## Variable Inputs

- **RepositoryPath** (string): Path to the Git repository
- **FilePath** (string): Path to the file to add (relative to repository root)

## Execution Outputs

- **Out** (execution): Execution continues here after the file is added

## Variable Outputs

- **Success** (boolean): "true" if the file was successfully added, "false" otherwise

## Special Notes

- The file must exist in the repository
- FilePath is relative to the repository root
- The file will be staged for the next commit
- If the file doesn't exist, the operation will fail
- RepositoryPath must point to a valid Git repository

## Example Usage

Add a file to staging:
1. Set RepositoryPath to the repository path
2. Set FilePath to "src/main.cpp" (relative to repo root)
3. Connect In to add the file
4. Check Success output to verify

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

