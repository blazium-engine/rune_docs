---
sidebar_position: 30
---

# Download File Node

The Download File node downloads a file from OpenAI's servers and saves it to a local file path.

![Download File Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Download File node downloads a file from OpenAI's servers using its FileId and saves it to a specified local file path. This is useful for retrieving uploaded files or downloading processed files.

## Execution Inputs

- **Execute** (execution): Triggers downloading the file

## Variable Inputs

- **FileId** (string): The unique identifier of the file to download
- **SavePath** (string): Local file path where the file should be saved

## Execution Outputs

- **Success** (execution): Execution continues here if the download succeeded
- **Failed** (execution): Execution continues here if the download failed

## Variable Outputs

- **Success** (boolean): "true" if file was successfully downloaded, "false" otherwise
- **SavedPath** (string): The full path where the file was saved
- **ErrorMessage** (string): Error message if download failed

## Special Notes

- Requires a valid API key configured via Set API Key node
- FileId must be a valid file identifier from your account
- The SavePath directory must exist or be creatable
- The file will be overwritten if it already exists
- File content is downloaded as-is from OpenAI's servers

## Example Usage

Download an uploaded file:
1. Set FileId to a file ID from List Files node or Upload File node
2. Set SavePath to "downloads/file.jsonl"
3. Connect Execute to download
4. Use SavedPath output to reference the downloaded file

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

