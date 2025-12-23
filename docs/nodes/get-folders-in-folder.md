---
sidebar_position: 1
---

# Get Folders In Folder Node

The Get Folders In Folder node retrieves a list of all subdirectories (folders) in a specified directory.

![Get Folders In Folder Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Get Folders In Folder node scans a directory and returns a list of all subdirectories found within it. The folder paths are returned as a newline-separated string or can be processed individually.

## Execution Inputs

- **In** (execution): Triggers scanning the folder

## Variable Inputs

- **Folder** (string): The path to the folder to scan

## Execution Outputs

- **Out** (execution): Execution continues here after scanning completes

## Variable Outputs

- **Folders** (string): Newline-separated list of folder paths found in the directory
- **Success** (boolean): "true" if the operation succeeded, "false" otherwise

## Special Notes

- The Folder path must exist and be a valid directory
- Paths are relative to the flow's working directory if not absolute
- Only direct subdirectories are returned (not nested subdirectories)
- Folder paths are returned as newline-separated strings
- The node validates paths to prevent directory traversal attacks
- If the folder doesn't exist or isn't accessible, Success will be "false"

## Example Usage

Get all folders in a directory:
1. Set Folder to "src" or an absolute path
2. Connect In to scan the folder
3. Check Success output to verify
4. Use Folders output to get the list of subdirectories
5. Split by newline to process individual folder paths

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

