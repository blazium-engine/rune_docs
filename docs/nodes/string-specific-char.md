---
sidebar_position: 5
---

# Specific Char Node

The Specific Char node extracts a single character from a string at a specified index position.

![Specific Char Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Specific Char node returns the character at a specific index position in a string as a single-character string.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Input** (string): The string to extract a character from
- **Index** (integer): The zero-based index position of the character to extract

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (string): The character at the specified index (as a single-character string)

## Special Notes

- Index is 0-based (first character is at index 0)
- If Index is negative or greater than or equal to the string length, returns an empty string
- Returns a single-character string, not a character type
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Extract individual characters from strings, such as getting specific positions in fixed-format data, checking first/last characters, or parsing character-by-character. Connect a string output to Input and an integer to Index, then use the Result output in other nodes.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

