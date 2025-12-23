---
sidebar_position: 20
---

# Create Image Variation Node

The Create Image Variation node generates variations of an existing image using DALL-E.

![Create Image Variation Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Create Image Variation node creates variations of an input image. The variations maintain the style and content of the original image while introducing variations.

## Execution Inputs

- **Execute** (execution): Triggers the image variation request

## Variable Inputs

- **ImagePath** (string): Path to the image file to create variations of (must be a valid PNG file)
- **N** (integer, optional): Number of variations to generate (1-10, default: 1)
- **Size** (string, optional): Image size. Must be one of: "256x256", "512x512", "1024x1024" (default: same as input image)
- **ResponseFormat** (string, optional): Format of the response. Must be "url" or "b64_json" (default: "url")
- **User** (string, optional): User identifier for tracking

## Execution Outputs

- **Success** (execution): Execution continues here if the request succeeded
- **Failed** (execution): Execution continues here if the request failed

## Variable Outputs

- **Response** (string): Full JSON response from the API
- **ImageUrl** (string): URL of the variation image (if ResponseFormat is "url")
- **ImageB64** (string): Base64-encoded image data (if ResponseFormat is "b64_json")
- **ErrorMessage** (string): Error message if request failed

## Special Notes

- Requires a valid API key configured via Set API Key node
- Input image must be a PNG file
- Variations maintain the style and general content of the original
- Maximum N is 10 variations per request
- Image file must be accessible from the system

## Example Usage

Create variations of an image:
1. Set ImagePath to "path/to/image.png"
2. Set N to 3 (to generate 3 variations)
3. Set Size to "1024x1024"
4. Connect Execute to generate variations
5. Use ImageUrl output to get the variation images

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

