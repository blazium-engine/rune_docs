---
sidebar_position: 6
---

# Boolean to String Node

The Boolean to String node converts a boolean value to a string.

![Boolean to String Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Boolean to String node converts a boolean value to its string representation ("true" or "false").

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Input** (boolean): The boolean to convert to a string

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Output** (string): The string representation of the input boolean ("true" or "false")

## Special Notes

- Accepts boolean values including "true", "false", "1", "0", "True", "False" (case-insensitive)
- The output is always normalized to "true" or "false" strings
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Convert boolean values to strings for string operations, concatenation, or output formatting. Connect a boolean output to the Input, then use the Output in nodes that require string input, such as Text nodes, StringConcat nodes, or file operations.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

