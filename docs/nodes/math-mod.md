---
sidebar_position: 5
---

# Modulo Node

The Modulo node performs modulo operation (remainder after division) on two numbers.

![Modulo Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Modulo node calculates the remainder after dividing A by B (A mod B). It accepts any numeric input (integer or float) and returns the result as a number.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **A** (number): The dividend (number to be divided)
- **B** (number): The divisor (number to divide by)

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (number): The remainder after dividing A by B

## Special Notes

- If either input cannot be parsed as a number, the result defaults to "0.0"
- The node works with both integer and floating-point numbers
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Calculate remainders for tasks like checking if a number is even or odd, implementing circular counters, or determining position within cycles. Connect number outputs from Integer or Float nodes to the A and B inputs, then use the Result output in other calculations or comparisons.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

