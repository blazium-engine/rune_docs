---
sidebar_position: 11
---

# Increment Patch Node

The Increment Patch node increments the patch version number of a semantic version.

![Increment Patch Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Increment Patch node takes a semantic version string and increments the patch version number. Major, minor, prerelease, and build metadata are preserved.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Version** (string): The semantic version string to increment

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **NewVersion** (string): The version with incremented patch number

## Special Notes

- The Version input must be a valid semantic version string
- Patch version is incremented
- Major, minor, prerelease, and build metadata are preserved
- Example: "1.2.3-alpha.1+build.123" → "1.2.4-alpha.1+build.123"
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Increment patch version:
1. Set Version to "1.2.3"
2. Use NewVersion output to get "1.2.4"

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

