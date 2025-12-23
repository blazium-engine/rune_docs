---
sidebar_position: 12
---

# Set Major Node

The Set Major node sets the major version number of a semantic version to a specific value.

![Set Major Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Set Major node takes a semantic version string and a new major version value, and creates a new version with the specified major number. Minor, patch, prerelease, and build metadata are preserved.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Version** (string): The semantic version string
- **Value** (integer): The new major version number to set

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **NewVersion** (string): The version with the new major number

## Special Notes

- The Version input must be a valid semantic version string
- Value must be a non-negative integer
- Minor, patch, prerelease, and build metadata are preserved
- Example: Version="1.2.3-alpha.1", Value=3 → "3.2.3-alpha.1"
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Set major version:
1. Set Version to "1.2.3"
2. Set Value to 2
3. Use NewVersion output to get "2.2.3"

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

