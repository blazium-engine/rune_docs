---
sidebar_position: 16
---

# Log10 Node

The Log10 node calculates the base-10 logarithm of a number.

![Log10 Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Log10 node calculates the logarithm with base 10 of a numeric value. For non-positive inputs, the result will be NaN (not a number).

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Value** (number): The number to calculate the base-10 logarithm of

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (number): The base-10 logarithm of the input value

## Special Notes

- If the input cannot be parsed as a number, the result defaults to "0.0"
- Non-positive inputs (zero or negative) will produce NaN (not a number)
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Calculate base-10 logarithms for mathematical operations, scientific computations, or order-of-magnitude calculations. Connect a number output to the Value input, then use the Result output in other calculations or comparisons.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

