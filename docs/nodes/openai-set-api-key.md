---
sidebar_position: 1
---

# Set OpenAI API Key Node

The Set OpenAI API Key node configures the OpenAI API key for authentication. The API key can be provided directly, from an environment variable, or from a file.

![Set OpenAI API Key Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Set OpenAI API Key node is used to configure authentication for OpenAI API calls. It supports three methods of providing the API key:
- **Direct**: Provide the API key directly as input
- **Environment Variable**: Read the API key from an environment variable
- **File**: Read the API key from a file on disk

The configured API key is stored in session state and used by all subsequent OpenAI API calls in the flow.

## Execution Inputs

- **Execute** (execution): Triggers the API key configuration

## Variable Inputs

- **ApiKey** (string, optional): The API key value (required if Source is "direct")
- **Source** (string): The source of the API key. Must be one of: "direct", "env", or "file" (default: "direct")
- **EnvVarName** (string, optional): The name of the environment variable containing the API key (required if Source is "env")
- **FilePath** (string, optional): The path to the file containing the API key (required if Source is "file")

## Execution Outputs

- **Success** (execution): Execution continues here if the API key was successfully configured
- **Failed** (execution): Execution continues here if configuration failed

## Variable Outputs

- **Success** (boolean): "true" if the API key was successfully configured, "false" otherwise
- **ErrorMessage** (string): Error message if configuration failed, empty string otherwise

## Special Notes

- The API key is stored in session state with the key "openai_api_key"
- For security, prefer using environment variables or files rather than direct input
- The Source field is case-sensitive and must be exactly "direct", "env", or "file"
- API key validation ensures the key is not empty and meets length requirements
- Maximum API key length is 512 characters
- File paths must be valid and the file must be readable
- Environment variable names are validated for proper format

## Example Usage

Configure the API key from an environment variable:
1. Set Source to "env"
2. Set EnvVarName to "OPENAI_API_KEY"
3. Connect Execute to start the flow
4. Connect Success output to your OpenAI API nodes

Configure the API key directly (less secure):
1. Set Source to "direct"
2. Set ApiKey to your API key string
3. Connect Execute to start the flow

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

