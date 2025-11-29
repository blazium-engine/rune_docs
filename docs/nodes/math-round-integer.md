---
sidebar_position: 14
---

# Round (Integer) Node

The Round (Integer) node rounds an integer to the nearest multiple of a specified value.

![Round (Integer) Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Round (Integer) node rounds an integer value to the nearest multiple of a specified "RoundTo" value (default is 10). Useful for rounding to tens, hundreds, etc.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Value** (integer): The integer value to round

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (integer): The input value rounded to the nearest multiple of RoundTo

## Special Notes

- If the input cannot be parsed as an integer, the result defaults to "0"
- The "RoundTo" property must be set to one of: 5, 10, 100, or 1000 (defaults to 10 if invalid)
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Round integers to convenient multiples, such as rounding prices to nearest 5 or 10, or quantities to nearest 100. Set the RoundTo property and connect an integer output to the Value input, then use the Result output in other calculations or comparisons.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

