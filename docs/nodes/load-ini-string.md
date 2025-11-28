---
sidebar_position: 42
---

# Load Ini String Node

The Load Ini String node parses an INI string into structured data.

![Load Ini String Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Load Ini String node takes an INI-formatted string and parses it into structured data with sections and key-value pairs.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **INI** (string): The INI string to parse

## Execution Outputs

- **Out** (execution): Execution continues after parsing

## Variable Outputs

- **Data** (any): The parsed INI data (sections as top-level keys, key-value pairs as nested tables)

## Special Notes

- Input must be valid INI format
- Raises an error if INI is invalid
- Sections become top-level table keys
- Key-value pairs within sections become nested tables

## Example Usage

Parse INI configuration strings, convert INI to other formats, or process INI data from external sources.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

