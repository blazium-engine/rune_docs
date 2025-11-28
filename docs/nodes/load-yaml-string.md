---
sidebar_position: 37
---

# Load Yaml String Node

The Load Yaml String node parses a YAML string into structured data.

![Load Yaml String Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Load Yaml String node takes a YAML-formatted string and parses it into structured data that can be used by other nodes. YAML is a human-readable data serialization format.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **YAML** (string): The YAML string to parse

## Execution Outputs

- **Out** (execution): Execution continues after parsing

## Variable Outputs

- **Data** (any): The parsed YAML data (as a structured representation)

## Special Notes

- Input must be valid YAML format
- Raises an error if YAML is invalid
- Parsed data can be used with other YAML nodes or converted to JSON
- YAML objects become tables, arrays become arrays, scalars become appropriate types

## Example Usage

Parse YAML configuration strings, convert YAML to other formats, or process YAML data from external sources.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

