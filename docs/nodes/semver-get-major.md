---
sidebar_position: 4
---

# Get Major Node

The Get Major node extracts the major version number from a semantic version string.

![Get Major Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Get Major node parses a semantic version string and returns the major version number (the first number in the version).

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Version** (string): The semantic version string

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Value** (integer): The major version number

## Special Notes

- The Version input must be a valid semantic version string
- If the version is invalid, Value will be 0
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Get major version:
1. Set Version to "2.1.0"
2. Use Value output to get 2

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

