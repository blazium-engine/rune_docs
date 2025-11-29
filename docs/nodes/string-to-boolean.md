---
sidebar_position: 5
---

# String to Boolean Node

The String to Boolean node converts a string value to a boolean.

![String to Boolean Node](https://placehold.co/600x400/EEE/31343C)

## Description

The String to Boolean node parses a string and converts it to a boolean value. Values like "true", "1", or "yes" (case-insensitive) are converted to true, all other values become false.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Input** (string): The string to convert to a boolean

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Output** (boolean): The boolean representation of the input string, normalized to "true" or "false"

## Special Notes

- Values "true", "1", "True", "yes" (case-insensitive) are converted to "true"
- All other values, including empty strings, are converted to "false"
- The output is always normalized to "true" or "false" strings
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Convert string values to booleans for conditional logic or boolean operations. Connect a string output to the Input, then use the Output in nodes that require boolean input, such as Branch nodes or BooleanCompare nodes.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

