---
sidebar_position: 17
---

# DateTime Compare Unix Node

The DateTime Compare Unix node compares Unix timestamp values.

![DateTime Compare Unix Node](https://placehold.co/600x400/EEE/31343C)

## Description

The DateTime Compare Unix node compares Unix timestamps (seconds since January 1, 1970) using various comparison operators.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Value** (number): The first Unix timestamp to compare
- **CompareTo** (number): The second Unix timestamp to compare against
- **ComparisonMode** (string, property): The comparison operator (same as Number Compare)

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (boolean): `true` if the comparison succeeds, `false` otherwise

## Special Notes

- Inputs must be valid Unix timestamps (seconds since epoch)
- Comparison modes are set in the node properties
- Useful for date-based conditional logic

## Example Usage

Check if a timestamp is after a certain date, or compare two timestamps to see which is newer. Connect the Result to a Branch node for conditional execution.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

