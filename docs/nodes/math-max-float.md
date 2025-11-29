---
sidebar_position: 22
---

# Max (Float) Node

The Max (Float) node returns the maximum of two floating-point values.

![Max (Float) Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Max (Float) node compares two floating-point values and returns the larger one.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **A** (number): The first number to compare
- **B** (number): The second number to compare

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (number): The larger of A and B

## Special Notes

- If either input cannot be parsed as a number, the result defaults to "0.0"
- If A and B are equal, returns that value
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Find the maximum value between two numbers, such as comparing prices, finding upper bounds, or selecting the higher value. Connect number outputs to the A and B inputs, then use the Result output in other calculations or comparisons.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

