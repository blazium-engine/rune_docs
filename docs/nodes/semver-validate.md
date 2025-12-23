---
sidebar_position: 2
---

# Validate Semver Node

The Validate Semver node checks if a string is a valid semantic version.

![Validate Semver Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Validate Semver node validates whether a string conforms to the semantic versioning specification. It returns true if the version is valid, false otherwise.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Version** (string): The version string to validate

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **IsValid** (boolean): "true" if the version is valid, "false" otherwise

## Special Notes

- Validates against the Semantic Versioning 2.0.0 specification
- Returns "false" for invalid version strings
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Validate a version string:
1. Set Version to "1.2.3" or "2.0.0-alpha.1"
2. Check IsValid output to see if the version is valid
3. Use with conditional logic to handle valid/invalid versions

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

