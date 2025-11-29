---
sidebar_position: 1
---

# String to Integer Node

The String to Integer node converts a string value to an integer.

![String to Integer Node](https://placehold.co/600x400/EEE/31343C)

## Description

The String to Integer node parses a string and converts it to an integer value. If the string cannot be parsed as an integer, it defaults to 0.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Input** (string): The string to convert to an integer

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Output** (integer): The integer representation of the input string

## Special Notes

- If the input string cannot be parsed as an integer, the result defaults to 0
- Decimal numbers will be truncated (e.g., "3.7" becomes 3)
- Leading and trailing whitespace may affect parsing
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Convert string values containing numbers to integers for mathematical operations or comparisons. Connect a string output to the Input, then use the Output in nodes that require integer input, such as Math nodes or IntegerCompare nodes.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

