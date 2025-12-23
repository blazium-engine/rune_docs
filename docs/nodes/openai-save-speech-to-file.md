---
sidebar_position: 25
---

# Save Speech to File Node

The Save Speech to File node saves base64-encoded audio data (from Create Speech node) to a local file.

![Save Speech to File Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Save Speech to File node decodes base64-encoded audio data and saves it to a file on disk. This is typically used after Create Speech node to save the generated audio.

## Execution Inputs

- **Execute** (execution): Triggers saving the audio file

## Variable Inputs

- **AudioData** (string): Base64-encoded audio data (from Create Speech node's AudioData output)
- **FilePath** (string): Local file path where the audio should be saved

## Execution Outputs

- **Success** (execution): Execution continues here if the save succeeded
- **Failed** (execution): Execution continues here if the save failed

## Variable Outputs

- **Success** (boolean): "true" if audio was successfully saved, "false" otherwise
- **SavedPath** (string): The full path where the audio was saved
- **ErrorMessage** (string): Error message if save failed

## Special Notes

- AudioData must be valid base64-encoded audio data
- The FilePath directory must exist or be creatable
- The file will be overwritten if it already exists
- File extension should match the audio format (e.g., .mp3, .opus)
- The node automatically decodes the base64 data before saving

## Example Usage

Save generated speech to file:
1. Connect AudioData from Create Speech node's AudioData output
2. Set FilePath to "audio/output.mp3"
3. Connect Execute to save
4. Use SavedPath output to reference the saved file

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

