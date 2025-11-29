---
sidebar_position: 2
---

# Subtract Node

The Subtract node performs subtraction of two numbers.

![Subtract Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Subtract node calculates the difference between two numeric values (A - B). It accepts any numeric input (integer or float) and returns the result as a number.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **A** (number): The number to subtract from (minuend)
- **B** (number): The number to subtract (subtrahend)

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (number): The difference of A minus B

## Special Notes

- If either input cannot be parsed as a number, the result defaults to "0.0"
- The node works with both integer and floating-point numbers
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Calculate differences between values, such as price reductions or remaining quantities. Connect number outputs from Integer or Float nodes to the A and B inputs, then use the Result output in other calculations or comparisons.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

