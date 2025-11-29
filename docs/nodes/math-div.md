---
sidebar_position: 4
---

# Divide Node

The Divide node performs division of two numbers.

![Divide Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Divide node calculates the quotient of two numeric values (A / B). It accepts any numeric input (integer or float) and returns the result as a number.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **A** (number): The dividend (number to be divided)
- **B** (number): The divisor (number to divide by)

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (number): The quotient of A divided by B

## Special Notes

- If either input cannot be parsed as a number, the result defaults to "0.0"
- Division by zero returns "0.0" instead of causing an error
- The node works with both integer and floating-point numbers
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Divide values to calculate rates, averages, or proportions. Connect number outputs from Integer or Float nodes to the A and B inputs, then use the Result output in other calculations or comparisons.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

