---
sidebar_position: 21
---

# Load Json File Node

The Load Json File node reads and parses a JSON file from the flow directory.

![Load Json File Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Load Json File node reads a JSON file from the flow directory, parses it, and makes the data available as a structured output. The parsed JSON can be used with other nodes that work with JSON data.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Path** (string): Relative path to the JSON file from the flow directory

## Execution Outputs

- **Out** (execution): Execution continues after the file is loaded and parsed

## Variable Outputs

- **Data** (any): The parsed JSON data (as a JSON string representation)

## Special Notes

- Paths are relative to the flow directory
- File must be valid JSON format
- Raises an error if the file doesn't exist, cannot be read, or contains invalid JSON
- The Data output is a JSON string that can be used with other JSON nodes

## Example Usage

Load configuration files, API response data, or structured data files. Connect the Data output to nodes that process JSON, such as LoopJsonArray or JsonToString nodes.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

