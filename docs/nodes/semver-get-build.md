---
sidebar_position: 8
---

# Get Build Node

The Get Build node extracts the build metadata from a semantic version string.

![Get Build Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Get Build node parses a semantic version string and returns the build metadata (the part after the plus sign).

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Version** (string): The semantic version string

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Value** (string): The build metadata, or empty string if not present

## Special Notes

- The Version input must be a valid semantic version string
- If the version has no build metadata, Value will be an empty string
- Examples: "1.2.3+build.123" → "build.123", "1.2.3" → ""
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Get build metadata:
1. Set Version to "2.1.0+build.456"
2. Use Value output to get "build.456"

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

