---
sidebar_position: 4
---

# Set OpenAI Timeout Node

The Set OpenAI Timeout node configures the timeout duration for OpenAI API requests in milliseconds.

![Set OpenAI Timeout Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Set OpenAI Timeout node sets the maximum time to wait for OpenAI API responses. This helps prevent flows from hanging indefinitely if the API is slow or unresponsive.

The timeout value is stored in session state and used by all subsequent OpenAI API calls in the flow.

## Execution Inputs

- **Execute** (execution): Triggers the timeout configuration

## Variable Inputs

- **TimeoutMs** (integer): The timeout duration in milliseconds. Must be between 0 and 300000 (5 minutes). Default: 0 (no timeout)

## Execution Outputs

- **Success** (execution): Execution continues here after timeout is configured

## Variable Outputs

- **TimeoutMs** (integer): The configured timeout value in milliseconds

## Special Notes

- Timeout value must be between 0 and 300000 milliseconds (5 minutes)
- A value of 0 means no timeout (wait indefinitely)
- The timeout is stored in session state with the key "openai_timeout_ms"
- Timeout applies to all OpenAI API calls after this node executes
- If an API call exceeds the timeout, it will fail with a timeout error

## Example Usage

Set a 30-second timeout:
1. Set TimeoutMs to 30000
2. Connect Execute to start the flow
3. All subsequent OpenAI API calls will timeout after 30 seconds

Set no timeout (wait indefinitely):
1. Set TimeoutMs to 0
2. Connect Execute to start the flow

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

