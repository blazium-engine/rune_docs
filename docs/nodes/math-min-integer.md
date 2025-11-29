---
sidebar_position: 21
---

# Min (Integer) Node

The Min (Integer) node returns the minimum of two integer values.

![Min (Integer) Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Min (Integer) node compares two integer values and returns the smaller one.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **A** (integer): The first integer to compare
- **B** (integer): The second integer to compare

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (integer): The smaller of A and B

## Special Notes

- If either input cannot be parsed as an integer, the result defaults to "0"
- If A and B are equal, returns that value
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Find the minimum value between two integers, such as comparing counts, finding lower bounds, or selecting the lower value. Connect integer outputs to the A and B inputs, then use the Result output in other calculations or comparisons.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

