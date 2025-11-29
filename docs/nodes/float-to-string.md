---
sidebar_position: 4
---

# Float to String Node

The Float to String node converts a floating-point number to a string.

![Float to String Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Float to String node converts a floating-point number to its string representation.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Input** (number): The floating-point number to convert to a string

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Output** (string): The string representation of the input number

## Special Notes

- If the input cannot be parsed as a number, the result defaults to "0.0"
- The output format preserves decimal precision
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Convert floating-point values to strings for string operations, concatenation, or output formatting. Connect a number output to the Input, then use the Output in nodes that require string input, such as Text nodes, StringConcat nodes, or file operations.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

