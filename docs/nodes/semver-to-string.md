---
sidebar_position: 18
---

# To String Node

The To String node constructs a semantic version string from individual components.

![To String Node](https://placehold.co/600x400/EEE/31343C)

## Description

The To String node takes major, minor, patch, prerelease, and build components and constructs a valid semantic version string.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Major** (integer): The major version number
- **Minor** (integer): The minor version number
- **Patch** (integer): The patch version number
- **Prerelease** (string, optional): The prerelease identifier
- **Build** (string, optional): The build metadata

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Version** (string): The constructed semantic version string

## Special Notes

- Major, Minor, and Patch are required
- Prerelease and Build are optional (empty strings are ignored)
- All components are validated to ensure a valid semantic version
- Example: Major=1, Minor=2, Patch=3, Prerelease="alpha.1", Build="build.123" → "1.2.3-alpha.1+build.123"
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Construct a version string:
1. Set Major to 1
2. Set Minor to 2
3. Set Patch to 3
4. Optionally set Prerelease to "beta.1"
5. Optionally set Build to "build.456"
6. Use Version output to get "1.2.3-beta.1+build.456"

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

