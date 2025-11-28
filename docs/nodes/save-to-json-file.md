---
sidebar_position: 22
---

# Save To Json File Node

The Save To Json File node writes JSON data to a file in the flow directory.

![Save To Json File Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Save To Json File node takes JSON data and writes it to a file in the flow directory. The file is created if it doesn't exist, or overwritten if it does.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Path** (string): Relative path to the JSON file from the flow directory
- **Data** (any): The JSON data to write (must be a valid JSON string)

## Execution Outputs

- **Out** (execution): Execution continues after the file is written

## Variable Outputs

None

## Special Notes

- Paths are relative to the flow directory
- Parent directories are created automatically
- Existing files are overwritten
- Data must be a valid JSON string
- Raises an error if the data is invalid JSON or the file cannot be written

## Example Usage

Save processed data structures, API responses, or configuration data to JSON files. Useful for creating data exports or saving state.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

