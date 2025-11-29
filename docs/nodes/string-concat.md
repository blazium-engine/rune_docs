---
sidebar_position: 1
---

# Concat Node

The Concat node concatenates (joins) two strings together.

![Concat Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Concat node combines two string values into a single string by joining them end-to-end.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **A** (string): The first string to concatenate
- **B** (string): The second string to concatenate

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (string): The concatenated string (A + B)

## Special Notes

- Empty strings are treated as empty strings (not null)
- The strings are joined in order: A followed by B
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Combine strings together, such as building file paths, constructing messages, or joining name parts. Connect string outputs from Text nodes or other string sources to the A and B inputs, then use the Result output in other nodes that require string input.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

