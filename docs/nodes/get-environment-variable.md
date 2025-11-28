---
sidebar_position: 32
---

# Get Environment Variable Node

The Get Environment Variable node retrieves an environment variable value.

![Get Environment Variable Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Get Environment Variable node retrieves an environment variable value from the system or in-memory environment. It first checks in-memory environment variables, then system environment variables.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **VariableName** (string): The name of the environment variable to retrieve

## Execution Outputs

- **Out** (execution): Execution continues after the variable is retrieved

## Variable Outputs

- **Value** (string): The environment variable value, or empty if not found or env_access is disabled

## Special Notes

- Returns empty string if environment variable access is disabled in configuration
- Checks in-memory environment variables first, then system environment
- Variable names are case-sensitive on most systems
- Use this for configuration values, API keys, or platform-specific settings

## Example Usage

Retrieve configuration values like API keys, file paths, or platform information. For example, get "HOME" directory path or "API_KEY" for authentication.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

