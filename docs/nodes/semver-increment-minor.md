---
sidebar_position: 10
---

# Increment Minor Node

The Increment Minor node increments the minor version number of a semantic version.

![Increment Minor Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Increment Minor node takes a semantic version string and increments the minor version number, resetting patch to 0. Major version, prerelease, and build metadata are preserved.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Version** (string): The semantic version string to increment

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **NewVersion** (string): The version with incremented minor number

## Special Notes

- The Version input must be a valid semantic version string
- Minor version is incremented, patch is reset to 0
- Major version, prerelease, and build metadata are preserved
- Example: "1.2.3-alpha.1+build.123" → "1.3.0-alpha.1+build.123"
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Increment minor version:
1. Set Version to "1.2.3"
2. Use NewVersion output to get "1.3.0"

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

