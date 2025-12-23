---
sidebar_position: 15
---

# Set Prerelease Node

The Set Prerelease node sets the prerelease identifier of a semantic version.

![Set Prerelease Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Set Prerelease node takes a semantic version string and a new prerelease identifier, and creates a new version with the specified prerelease. Major, minor, patch, and build metadata are preserved.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Version** (string): The semantic version string
- **Value** (string): The new prerelease identifier to set (empty string to remove)

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **NewVersion** (string): The version with the new prerelease identifier

## Special Notes

- The Version input must be a valid semantic version string
- Value must be a valid prerelease identifier or empty string
- Major, minor, patch, and build metadata are preserved
- Setting Value to empty string removes the prerelease
- Example: Version="1.2.3", Value="beta.1" → "1.2.3-beta.1"
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Set prerelease:
1. Set Version to "1.2.3"
2. Set Value to "beta.1"
3. Use NewVersion output to get "1.2.3-beta.1"

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

