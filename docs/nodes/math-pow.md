---
sidebar_position: 9
---

# Pow Node

The Pow node raises a base number to the power of an exponent.

![Pow Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Pow node calculates base raised to the power of exponent (base^exponent). It accepts any numeric input (integer or float) for both values.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Base** (number): The base number
- **Exponent** (number): The exponent to raise the base to

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (number): The result of base raised to the power of exponent

## Special Notes

- If either input cannot be parsed as a number, the result defaults to "0.0"
- The node works with both integer and floating-point numbers
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Calculate powers and exponentials, such as calculating areas (length^2), volumes (length^3), or compound interest. Connect number outputs from Integer or Float nodes to the Base and Exponent inputs, then use the Result output in other calculations or comparisons.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

