---
sidebar_position: 27
---

# List Files Node

The List Files node retrieves a list of all files uploaded to your OpenAI account.

![List Files Node](https://placehold.co/600x400/EEE/31343C)

## Description

The List Files node retrieves information about all files you have uploaded to OpenAI. This includes file IDs, names, sizes, purposes, and creation dates.

## Execution Inputs

- **Execute** (execution): Triggers listing files

## Variable Inputs

None

## Execution Outputs

- **Success** (execution): Execution continues here if the request succeeded
- **Failed** (execution): Execution continues here if the request failed

## Variable Outputs

- **Response** (string): Full JSON response from the API
- **Files** (string): JSON array of file information
- **ErrorMessage** (string): Error message if request failed

## Special Notes

- Requires a valid API key configured via Set API Key node
- Files output is a JSON array that can be parsed
- Each file object contains: id, object, bytes, created_at, filename, purpose
- Use this to find FileIds for other operations
- Only files you have uploaded are listed

## Example Usage

List all uploaded files:
1. Connect Execute to list files
2. Use Files output to get the list
3. Parse the JSON array to access individual file information
4. Use file IDs with other file operations

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

