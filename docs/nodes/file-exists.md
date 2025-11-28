---
sidebar_position: 23
---

# File Exists Node

The File Exists node checks if a file or directory exists in the flow directory.

![File Exists Node](https://placehold.co/600x400/EEE/31343C)

## Description

The File Exists node checks whether a file or directory exists at the specified path in the flow directory. The result is a boolean that can be used for conditional logic.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Path** (string): Relative path to check from the flow directory

## Execution Outputs

- **Out** (execution): Execution continues after the check is performed

## Variable Outputs

- **Exists** (boolean): `true` if the file/directory exists, `false` otherwise

## Special Notes

- Paths are relative to the flow directory
- Returns `false` for invalid paths (outside flow directory)
- Works for both files and directories
- Use this before attempting to read files to avoid errors

## Example Usage

Check if a configuration file exists before loading it, or verify that required data files are present. Connect the Exists output to a Branch node's Condition input for conditional execution.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

