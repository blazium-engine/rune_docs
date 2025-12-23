---
sidebar_position: 16
---

# Set Build Node

The Set Build node sets the build metadata of a semantic version.

![Set Build Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Set Build node takes a semantic version string and new build metadata, and creates a new version with the specified build metadata. Major, minor, patch, and prerelease are preserved.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Version** (string): The semantic version string
- **Value** (string): The new build metadata to set (empty string to remove)

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **NewVersion** (string): The version with the new build metadata

## Special Notes

- The Version input must be a valid semantic version string
- Value must be valid build metadata or empty string
- Major, minor, patch, and prerelease are preserved
- Setting Value to empty string removes the build metadata
- Example: Version="1.2.3", Value="build.123" → "1.2.3+build.123"
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Set build metadata:
1. Set Version to "1.2.3"
2. Set Value to "build.123"
3. Use NewVersion output to get "1.2.3+build.123"

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

