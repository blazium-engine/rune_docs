---
sidebar_position: 19
---

# Load Text File Node

The Load Text File node reads the contents of a text file from the flow directory.

![Load Text File Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Load Text File node reads a text file from the flow directory and outputs its contents as a string. The file path is relative to the flow directory and is sandboxed for security.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Path** (string): Relative path to the file from the flow directory

## Execution Outputs

- **Out** (execution): Execution continues after the file is read

## Variable Outputs

- **Content** (string): The file contents

## Special Notes

- Paths are relative to the flow directory
- Absolute paths are rejected (unless sandboxing is disabled)
- Parent directory traversal (`../`) is prevented
- Raises an error if the file doesn't exist or cannot be read
- Use FileExists node to check before reading

## Example Usage

Load configuration files, data files, or templates. Connect the Content output to other nodes that need the file contents.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

