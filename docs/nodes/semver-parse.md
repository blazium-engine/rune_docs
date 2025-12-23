---
sidebar_position: 1
---

# Parse Semver Node

The Parse Semver node parses a semantic version string and extracts its components.

![Parse Semver Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Parse Semver node takes a semantic version string (e.g., "1.2.3-alpha.1+build.123") and extracts the major, minor, patch, prerelease, and build components.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Version** (string): The semantic version string to parse

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Major** (integer): The major version number
- **Minor** (integer): The minor version number
- **Patch** (integer): The patch version number
- **Prerelease** (string): The prerelease identifier (e.g., "alpha.1")
- **Build** (string): The build metadata (e.g., "build.123")
- **VersionString** (string): The normalized version string

## Special Notes

- The Version input must be a valid semantic version string
- If the version string is invalid, outputs will be empty or default values
- Prerelease and Build are empty strings if not present in the version
- VersionString is the normalized representation of the parsed version
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Parse a version string:
1. Set Version to "2.1.0-beta.1+build.456"
2. Use Major, Minor, Patch outputs to get version components
3. Use Prerelease and Build outputs for additional metadata
4. Use VersionString output for the normalized version

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

