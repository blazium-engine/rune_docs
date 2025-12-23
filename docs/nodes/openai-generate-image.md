---
sidebar_position: 17
---

# Generate Image Node

The Generate Image node creates an image using OpenAI's DALL-E image generation models based on a text prompt.

![Generate Image Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Generate Image node generates an image from a text description using OpenAI's DALL-E models. The generated image can be returned as a URL or base64-encoded data.

## Execution Inputs

- **Execute** (execution): Triggers the image generation request

## Variable Inputs

- **Prompt** (string): Text description of the image to generate
- **N** (integer, optional): Number of images to generate (1-10, default: 1)
- **Size** (string, optional): Image size. Must be one of: "256x256", "512x512", "1024x1024" (default: "1024x1024")
- **ResponseFormat** (string, optional): Format of the response. Must be "url" or "b64_json" (default: "url")
- **User** (string, optional): User identifier for tracking

## Execution Outputs

- **Success** (execution): Execution continues here if the request succeeded
- **Failed** (execution): Execution continues here if the request failed

## Variable Outputs

- **Response** (string): Full JSON response from the API
- **ImageUrl** (string): URL of the generated image (if ResponseFormat is "url")
- **ImageB64** (string): Base64-encoded image data (if ResponseFormat is "b64_json")
- **RevisedPrompt** (string): The prompt as revised by DALL-E (may differ from input)
- **ErrorMessage** (string): Error message if request failed

## Special Notes

- Requires a valid API key configured via Set API Key node
- The Prompt should be a detailed description of the desired image
- DALL-E may revise your prompt for better results
- Image URLs are temporary and may expire
- Base64 images are large and should be handled carefully
- Maximum N is 10 images per request

## Example Usage

Generate a single image:
1. Set Prompt to "A futuristic cityscape at sunset with flying cars"
2. Set Size to "1024x1024"
3. Set ResponseFormat to "url"
4. Connect Execute to generate
5. Use ImageUrl output to display or download the image

Generate multiple images:
1. Set Prompt to your image description
2. Set N to 3 (to generate 3 variations)
3. Connect Execute to generate
4. The Response output contains all generated images

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

