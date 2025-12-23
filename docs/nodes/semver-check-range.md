---
sidebar_position: 17
---

# Check Range Node

The Check Range node checks if a semantic version matches a version range.

![Check Range Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Check Range node validates whether a semantic version string satisfies a version range specification. This is useful for checking if a version meets dependency requirements.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Version** (string): The semantic version string to check
- **Range** (string): The version range specification (e.g., ">=1.2.3 <2.0.0")

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Matches** (boolean): "true" if the version matches the range, "false" otherwise

## Special Notes

- Both Version and Range must be valid
- Range supports standard semver range syntax (>=, <=, >, <, ~, ^, etc.)
- If either input is invalid, Matches will be "false"
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Check if version matches range:
1. Set Version to "1.5.0"
2. Set Range to ">=1.2.3 <2.0.0"
3. Check Matches output (will be "true")

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

