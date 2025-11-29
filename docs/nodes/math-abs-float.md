---
sidebar_position: 7
---

# Abs (Float) Node

The Abs (Float) node returns the absolute value of a floating-point number.

![Abs (Float) Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Abs (Float) node calculates the absolute value (magnitude without sign) of a floating-point value. Negative numbers become positive, while positive numbers remain unchanged.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Value** (number): The floating-point number to get the absolute value of

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (number): The absolute value of the input

## Special Notes

- If the input cannot be parsed as a number, the result defaults to "0.0"
- Negative numbers become positive (e.g., -5.5 becomes 5.5)
- Positive numbers remain unchanged
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Convert negative values to positive, such as calculating distances or differences that should always be positive. Connect a number output to the Value input, then use the Result output in other calculations or comparisons.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

