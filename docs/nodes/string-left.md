---
sidebar_position: 2
---

# Left Node

The Left node extracts a specified number of characters from the left (beginning) of a string.

![Left Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Left node returns the leftmost N characters from a string, where N is specified by the Count input.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Input** (string): The string to extract characters from
- **Count** (integer): The number of characters to extract from the left

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (string): The leftmost Count characters of the input string

## Special Notes

- If Count is negative, it is treated as 0
- If Count is greater than the string length, returns the entire string
- If Count is 0, returns an empty string
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Extract prefixes from strings, such as getting the first few characters of an ID, extracting area codes, or taking initials. Connect a string output to the Input and an integer to Count, then use the Result output in other nodes.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

