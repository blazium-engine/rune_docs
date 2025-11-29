---
sidebar_position: 3
---

# Right Node

The Right node extracts a specified number of characters from the right (end) of a string.

![Right Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Right node returns the rightmost N characters from a string, where N is specified by the Count input.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Input** (string): The string to extract characters from
- **Count** (integer): The number of characters to extract from the right

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (string): The rightmost Count characters of the input string

## Special Notes

- If Count is negative, it is treated as 0
- If Count is greater than or equal to the string length, returns the entire string
- If Count is 0, returns an empty string
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Extract suffixes from strings, such as getting file extensions, extracting last digits of account numbers, or taking the last few characters. Connect a string output to the Input and an integer to Count, then use the Result output in other nodes.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

