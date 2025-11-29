---
sidebar_position: 3
---

# String to Float Node

The String to Float node converts a string value to a floating-point number.

![String to Float Node](https://placehold.co/600x400/EEE/31343C)

## Description

The String to Float node parses a string and converts it to a floating-point number. If the string cannot be parsed as a number, it defaults to 0.0.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Input** (string): The string to convert to a floating-point number

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Output** (number): The floating-point representation of the input string

## Special Notes

- If the input string cannot be parsed as a number, the result defaults to "0.0"
- Supports both integer and decimal formats (e.g., "42" or "3.14")
- Leading and trailing whitespace may affect parsing
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Convert string values containing numbers to floating-point numbers for mathematical operations or comparisons. Connect a string output to the Input, then use the Output in nodes that require number input, such as Math nodes or NumberCompare nodes.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

