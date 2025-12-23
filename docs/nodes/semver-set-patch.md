---
sidebar_position: 14
---

# Set Patch Node

The Set Patch node sets the patch version number of a semantic version to a specific value.

![Set Patch Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Set Patch node takes a semantic version string and a new patch version value, and creates a new version with the specified patch number. Major, minor, prerelease, and build metadata are preserved.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Version** (string): The semantic version string
- **Value** (integer): The new patch version number to set

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **NewVersion** (string): The version with the new patch number

## Special Notes

- The Version input must be a valid semantic version string
- Value must be a non-negative integer
- Major, minor, prerelease, and build metadata are preserved
- Example: Version="1.2.3-alpha.1", Value=7 → "1.2.7-alpha.1"
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Set patch version:
1. Set Version to "1.2.3"
2. Set Value to 7
3. Use NewVersion output to get "1.2.7"

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

