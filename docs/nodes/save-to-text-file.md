---
sidebar_position: 20
---

# Save To Text File Node

The Save To Text File node writes content to a text file in the flow directory.

![Save To Text File Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Save To Text File node writes string content to a file in the flow directory. The file is created if it doesn't exist, or overwritten if it does. Parent directories are created automatically if needed.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Path** (string): Relative path to the file from the flow directory
- **Content** (string): The content to write to the file

## Execution Outputs

- **Out** (execution): Execution continues after the file is written

## Variable Outputs

None

## Special Notes

- Paths are relative to the flow directory
- Parent directories are created automatically
- Existing files are overwritten
- Absolute paths are rejected (unless sandboxing is disabled)
- Raises an error if the file cannot be written

## Example Usage

Save processed data, logs, or results to files. Useful for creating output files or saving intermediate processing results.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

