---
sidebar_position: 18
---

# DateTime Compare ISO Node

The DateTime Compare ISO node compares ISO 8601 date-time strings.

![DateTime Compare ISO Node](https://placehold.co/600x400/EEE/31343C)

## Description

The DateTime Compare ISO node compares ISO 8601 formatted date-time strings (e.g., "2024-01-15T10:30:00Z") using various comparison operators.

## Execution Inputs

None (data node, no execution flow)

## Variable Inputs

- **Value** (string): The first ISO date-time string to compare
- **CompareTo** (string): The second ISO date-time string to compare against
- **ComparisonMode** (string, property): The comparison operator

## Execution Outputs

None (data node, no execution flow)

## Variable Outputs

- **Result** (boolean): `true` if the comparison succeeds, `false` otherwise

## Special Notes

- Inputs must be valid ISO 8601 date-time strings
- Comparison modes are set in the node properties
- Dates are parsed and compared chronologically

## Example Usage

Check if a date is before or after a deadline, or compare two ISO dates. Connect the Result to a Branch node for conditional execution.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

