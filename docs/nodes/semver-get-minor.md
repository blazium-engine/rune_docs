---
sidebar_position: 5
---

# Get Minor Node

The Get Minor node extracts the minor version number from a semantic version string.

![Get Minor Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Get Minor node parses a semantic version string and returns the minor version number (the second number in the version).

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Version** (string): The semantic version string

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Value** (integer): The minor version number

## Special Notes

- The Version input must be a valid semantic version string
- If the version is invalid, Value will be 0
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Get minor version:
1. Set Version to "2.1.0"
2. Use Value output to get 1

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

