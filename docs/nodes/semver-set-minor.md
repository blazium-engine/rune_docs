---
sidebar_position: 13
---

# Set Minor Node

The Set Minor node sets the minor version number of a semantic version to a specific value.

![Set Minor Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Set Minor node takes a semantic version string and a new minor version value, and creates a new version with the specified minor number. Major, patch, prerelease, and build metadata are preserved.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Version** (string): The semantic version string
- **Value** (integer): The new minor version number to set

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **NewVersion** (string): The version with the new minor number

## Special Notes

- The Version input must be a valid semantic version string
- Value must be a non-negative integer
- Major, patch, prerelease, and build metadata are preserved
- Example: Version="1.2.3-alpha.1", Value=5 → "1.5.3-alpha.1"
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Set minor version:
1. Set Version to "1.2.3"
2. Set Value to 5
3. Use NewVersion output to get "1.5.3"

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

