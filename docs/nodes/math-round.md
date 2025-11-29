---
sidebar_position: 12
---

# Round Node

The Round node rounds a number to the nearest integer.

![Round Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Round node rounds a numeric value to the nearest integer using standard rounding rules (0.5 rounds up).

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Value** (number): The number to round

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (integer): The nearest integer to the input value

## Special Notes

- If the input cannot be parsed as a number, the result defaults to "0"
- Uses standard rounding (0.5 rounds up, e.g., 3.5 becomes 4, 3.4 becomes 3)
- Returns an integer value
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Round numbers to the nearest integer for calculations like calculating approximate quantities or displaying simplified values. Connect a number output to the Value input, then use the Result output in other calculations or comparisons.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

