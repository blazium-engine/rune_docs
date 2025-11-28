---
sidebar_position: 7
---

# SessionStateDel Node

The SessionStateDel node deletes a value from session state.

![SessionStateDel Node](https://placehold.co/600x400/EEE/31343C)

## Description

The SessionStateDel node removes a key-value pair from session state. This is useful for cleaning up temporary data or resetting state.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Key** (string): The key name to delete

## Execution Outputs

- **Out** (execution): Execution continues after the value is deleted

## Variable Outputs

None

## Special Notes

- Deleting a non-existent key is safe and does not cause an error
- Keys are case-sensitive
- Use this node to clean up temporary data when it's no longer needed
- Once deleted, the key cannot be retrieved until it's set again

## Example Usage

Clean up temporary data after processing. For example, delete a temporary "processing" flag after a task completes, or remove sensitive data after it's been used.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

