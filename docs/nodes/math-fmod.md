---
sidebar_position: 18
---

# Fmod Node

The Fmod node performs floating-point modulo operation (remainder after division).

![Fmod Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Fmod node calculates the floating-point remainder after dividing the numerator by the denominator. Unlike integer modulo, this preserves the decimal portion.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Numerator** (number): The dividend (number to be divided)
- **Denominator** (number): The divisor (number to divide by)

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (number): The floating-point remainder after dividing numerator by denominator

## Special Notes

- If either input cannot be parsed as a number, the result defaults to "0.0"
- Returns a floating-point result, preserving decimal precision
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Calculate floating-point remainders for tasks requiring decimal precision, such as calculating time intervals, fractional cycles, or precise position calculations. Connect number outputs to the Numerator and Denominator inputs, then use the Result output in other calculations or comparisons.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

