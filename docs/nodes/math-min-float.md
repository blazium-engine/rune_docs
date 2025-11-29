---
sidebar_position: 23
---

# Min (Float) Node

The Min (Float) node returns the minimum of two floating-point values.

![Min (Float) Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Min (Float) node compares two floating-point values and returns the smaller one.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **A** (number): The first number to compare
- **B** (number): The second number to compare

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (number): The smaller of A and B

## Special Notes

- If either input cannot be parsed as a number, the result defaults to "0.0"
- If A and B are equal, returns that value
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Find the minimum value between two numbers, such as comparing prices, finding lower bounds, or selecting the lower value. Connect number outputs to the A and B inputs, then use the Result output in other calculations or comparisons.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

