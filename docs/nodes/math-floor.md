---
sidebar_position: 11
---

# Floor Node

The Floor node rounds a number down to the nearest integer.

![Floor Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Floor node calculates the floor (largest integer less than or equal to) of a numeric value. Always rounds down.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Value** (number): The number to round down

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (integer): The largest integer less than or equal to the input

## Special Notes

- If the input cannot be parsed as a number, the result defaults to "0"
- Always rounds down (e.g., 3.9 becomes 3, -3.9 becomes -4)
- Returns an integer value
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Round numbers down for calculations like calculating available quantities, completed units, or lower bounds. Connect a number output to the Value input, then use the Result output in other calculations or comparisons.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

