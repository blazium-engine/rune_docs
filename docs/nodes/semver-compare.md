---
sidebar_position: 3
---

# Compare Semver Node

The Compare Semver node compares two semantic versions.

![Compare Semver Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Compare Semver node compares two semantic version strings and determines their relationship. It provides boolean outputs indicating if they are equal, if the first is greater, or if the first is less than the second.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Version1** (string): The first version to compare
- **Version2** (string): The second version to compare

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **IsEqual** (boolean): "true" if Version1 equals Version2
- **IsGreater** (boolean): "true" if Version1 is greater than Version2
- **IsLess** (boolean): "true" if Version1 is less than Version2
- **Comparison** (string): Textual comparison result: "equal", "greater", or "less"

## Special Notes

- Both versions must be valid semantic version strings
- If either version is invalid, all outputs will be "false" and Comparison will be "invalid"
- Comparison follows semantic versioning rules (major > minor > patch)
- Prerelease versions are considered less than release versions
- This node doesn't have execution pins - it's a pure data node

## Example Usage

Compare two versions:
1. Set Version1 to "1.2.3"
2. Set Version2 to "1.2.4"
3. Check IsLess output (will be "true")
4. Use Comparison output for textual result

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

