---
sidebar_position: 10
---

# Ceil Node

The Ceil node rounds a number up to the nearest integer.

![Ceil Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Ceil node calculates the ceiling (smallest integer greater than or equal to) of a numeric value. Always rounds up, even for negative numbers.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Value** (number): The number to round up

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (integer): The smallest integer greater than or equal to the input

## Special Notes

- If the input cannot be parsed as a number, the result defaults to "0"
- Always rounds up (e.g., 3.1 becomes 4, -3.1 becomes -3)
- Returns an integer value
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Round numbers up for calculations like calculating required quantities, billing periods, or upper bounds. Connect a number output to the Value input, then use the Result output in other calculations or comparisons.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

