---
sidebar_position: 43
---

# Load Ini File Node

The Load Ini File node reads and parses an INI file from the flow directory.

![Load Ini File Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Load Ini File node reads an INI file from the flow directory, parses it, and makes the data available as structured output with sections and key-value pairs.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Path** (string): Relative path to the INI file from the flow directory

## Execution Outputs

- **Out** (execution): Execution continues after the file is loaded and parsed

## Variable Outputs

- **Data** (any): The parsed INI data

## Special Notes

- Paths are relative to the flow directory
- File must be valid INI format
- Raises an error if the file doesn't exist, cannot be read, or contains invalid INI
- Use for loading INI configuration files

## Example Usage

Load INI configuration files or settings files. Connect the Data output to nodes that process structured data.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

