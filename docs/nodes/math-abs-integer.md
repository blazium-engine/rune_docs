---
sidebar_position: 6
---

# Abs (Integer) Node

The Abs (Integer) node returns the absolute value of an integer.

![Abs (Integer) Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Abs (Integer) node calculates the absolute value (magnitude without sign) of an integer value. Negative numbers become positive, while positive numbers remain unchanged.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Value** (integer): The integer value to get the absolute value of

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (integer): The absolute value of the input

## Special Notes

- If the input cannot be parsed as an integer, the result defaults to "0"
- Negative numbers become positive (e.g., -5 becomes 5)
- Positive numbers remain unchanged
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Convert negative values to positive, such as calculating distances or differences that should always be positive. Connect an integer output to the Value input, then use the Result output in other calculations or comparisons.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

