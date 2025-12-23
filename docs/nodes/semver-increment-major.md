---
sidebar_position: 9
---

# Increment Major Node

The Increment Major node increments the major version number of a semantic version.

![Increment Major Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Increment Major node takes a semantic version string and increments the major version number, resetting minor and patch to 0. Prerelease and build metadata are preserved if present.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Version** (string): The semantic version string to increment

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **NewVersion** (string): The version with incremented major number

## Special Notes

- The Version input must be a valid semantic version string
- Major version is incremented, minor and patch are reset to 0
- Prerelease and build metadata are preserved if they exist
- Example: "1.2.3-alpha.1+build.123" → "2.0.0-alpha.1+build.123"
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Increment major version:
1. Set Version to "1.2.3"
2. Use NewVersion output to get "2.0.0"

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

