---
sidebar_position: 6
---

# SessionStateGet Node

The SessionStateGet node retrieves a value from session state.

![SessionStateGet Node](https://placehold.co/600x400/EEE/31343C)

## Description

The SessionStateGet node retrieves a value that was previously stored in session state. If the key doesn't exist, it returns an empty string.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Key** (string): The key name to retrieve

## Execution Outputs

- **Out** (execution): Execution continues after the value is retrieved

## Variable Outputs

- **Value** (string): The retrieved value, or empty string if the key doesn't exist

## Special Notes

- Returns an empty string if the key doesn't exist
- Values are always returned as strings, regardless of their stored type
- Keys are case-sensitive
- Use SessionStateHas node or check for empty string to verify a key exists before using the value

## Example Usage

Retrieve stored data for processing. For example, get a username stored earlier and use it in a log message or API call.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

