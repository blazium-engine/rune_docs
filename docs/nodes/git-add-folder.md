---
sidebar_position: 5
---

# Git Add Folder Node

The Git Add Folder node adds all files in a folder to the Git staging area.

![Git Add Folder Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Git Add Folder node stages all files in the specified folder (and subfolders) for commit. The folder path is relative to the repository root.

## Execution Inputs

- **In** (execution): Triggers adding the folder contents to staging

## Variable Inputs

- **RepositoryPath** (string): Path to the Git repository
- **FolderPath** (string): Path to the folder to add (relative to repository root)

## Execution Outputs

- **Out** (execution): Execution continues here after the folder is added

## Variable Outputs

- **Success** (boolean): "true" if the folder was successfully added, "false" otherwise
- **AddedCount** (integer): Number of files successfully added from the folder

## Special Notes

- The folder path is relative to the repository root
- All files in the folder and subfolders will be staged
- If the folder doesn't exist, the operation will fail
- AddedCount indicates how many files were added
- RepositoryPath must point to a valid Git repository

## Example Usage

Add a folder to staging:
1. Set RepositoryPath to the repository path
2. Set FolderPath to "src" (relative to repo root)
3. Connect In to add the folder
4. Check Success and AddedCount outputs

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

