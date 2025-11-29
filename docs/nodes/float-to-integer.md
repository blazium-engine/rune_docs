---
sidebar_position: 8
---

# Float to Integer Node

The Float to Integer node converts a floating-point number to an integer by truncating the decimal portion.

![Float to Integer Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Float to Integer node converts a floating-point number to an integer by truncating (removing) the decimal portion (e.g., 3.7 becomes 3, 3.9 also becomes 3).

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Input** (number): The floating-point number to convert to an integer

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Output** (integer): The integer representation of the input number (decimal portion truncated)

## Special Notes

- If the input cannot be parsed as a number, the result defaults to "0"
- The conversion truncates (not rounds) the decimal portion (e.g., 3.9 becomes 3, -3.9 becomes -3)
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Convert floating-point values to integers for operations requiring whole numbers or when decimal precision is not needed. Connect a number output to the Input, then use the Output in nodes that require integer input, such as Math nodes that work with integers or loop counters.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

