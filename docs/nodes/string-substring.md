---
sidebar_position: 4
---

# Substring Node

The Substring node extracts a portion of a string starting at a specified position with a specified length.

![Substring Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Substring node extracts a substring from a string starting at the Start position and continuing for Length characters.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Input** (string): The string to extract a substring from
- **Start** (integer): The starting position (0-based index) in the string
- **Length** (integer): The number of characters to extract

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (string): The extracted substring

## Special Notes

- Start position is 0-based (first character is at position 0)
- If Start is negative, it is treated as 0
- If Length is negative, it is treated as 0
- If Start is beyond the string length, returns an empty string
- If Start + Length exceeds the string length, returns characters from Start to the end of the string
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Extract portions of strings from specific positions, such as parsing structured data, extracting middle sections of strings, or splitting text at known positions. Connect a string output to Input, and integers to Start and Length, then use the Result output in other nodes.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

