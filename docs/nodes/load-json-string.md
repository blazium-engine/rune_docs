---
sidebar_position: 53
---

# Load Json String Node

The Load Json String node parses a JSON string into structured data.

![Load Json String Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Load Json String node takes a JSON-formatted string and parses it into structured data that can be used by other nodes.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **JSON** (string): The JSON string to parse

## Execution Outputs

- **Out** (execution): Execution continues after parsing

## Variable Outputs

- **Data** (any): The parsed JSON data (as a structured representation)

## Special Notes

- Input must be valid JSON format
- Raises an error if JSON is invalid
- Parsed data can be used with other JSON nodes
- JSON objects become tables, arrays become arrays, values become appropriate types

## Example Usage

Parse JSON strings from APIs, user input, or external sources. Connect the Data output to LoopJsonArray or LoopJsonObject to process the data.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

