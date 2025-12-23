---
sidebar_position: 7
---

# Get Prerelease Node

The Get Prerelease node extracts the prerelease identifier from a semantic version string.

![Get Prerelease Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Get Prerelease node parses a semantic version string and returns the prerelease identifier (the part after the hyphen, before the plus sign).

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Version** (string): The semantic version string

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Value** (string): The prerelease identifier, or empty string if not present

## Special Notes

- The Version input must be a valid semantic version string
- If the version has no prerelease, Value will be an empty string
- Examples: "1.2.3-alpha.1" → "alpha.1", "1.2.3" → ""
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Get prerelease:
1. Set Version to "2.1.0-beta.1"
2. Use Value output to get "beta.1"

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

