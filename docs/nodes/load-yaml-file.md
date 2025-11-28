---
sidebar_position: 38
---

# Load Yaml File Node

The Load Yaml File node reads and parses a YAML file from the flow directory.

![Load Yaml File Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Load Yaml File node reads a YAML file from the flow directory, parses it, and makes the data available as structured output.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Path** (string): Relative path to the YAML file from the flow directory

## Execution Outputs

- **Out** (execution): Execution continues after the file is loaded and parsed

## Variable Outputs

- **Data** (any): The parsed YAML data

## Special Notes

- Paths are relative to the flow directory
- File must be valid YAML format
- Raises an error if the file doesn't exist, cannot be read, or contains invalid YAML
- Use for loading configuration files or data files in YAML format

## Example Usage

Load YAML configuration files, data files, or settings. Connect the Data output to other nodes that process structured data.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

