---
sidebar_position: 11
---

# OpenAI Functions

The OpenAI category provides OpenAI API integration that mirrors the functionality of OpenAI nodes.

## Available Functions

### Authentication

- **`OpenAI.Auth.setApiKey(key)`** - Sets the OpenAI API key
- **`OpenAI.Auth.setOrganization(org)`** - Sets the organization ID
- **`OpenAI.Auth.setProxy(proxy)`** - Sets the proxy URL
- **`OpenAI.Auth.setTimeout(seconds)`** - Sets the request timeout
- **`OpenAI.Auth.setAzureApiKey(key)`** - Sets the Azure API key

### Chat Completions

- **`OpenAI.Chat.completion(messages, options)`** - Creates a chat completion
- **`OpenAI.Chat.completionAsync(messages, options)`** - Creates an async chat completion
- **`OpenAI.Chat.createConversation()`** - Creates a new conversation
- **`OpenAI.Chat.addUserMessage(conversationId, message)`** - Adds a user message
- **`OpenAI.Chat.setSystemMessage(conversationId, message)`** - Sets the system message
- **`OpenAI.Chat.updateConversation(conversationId, options)`** - Updates conversation settings
- **`OpenAI.Chat.getLastResponse(conversationId)`** - Gets the last response
- **`OpenAI.Chat.exportConversation(conversationId)`** - Exports conversation data
- **`OpenAI.Chat.importConversation(data)`** - Imports conversation data

### Completions

- **`OpenAI.Completion.prompt(prompt, options)`** - Creates a completion
- **`OpenAI.Completion.promptAsync(prompt, options)`** - Creates an async completion

### Images

- **`OpenAI.Image.generate(prompt, options)`** - Generates an image
- **`OpenAI.Image.generateAsync(prompt, options)`** - Generates an image asynchronously
- **`OpenAI.Image.edit(image, mask, prompt, options)`** - Edits an image
- **`OpenAI.Image.variation(image, options)`** - Creates image variations
- **`OpenAI.Image.download(fileId, path)`** - Downloads an image

### Audio

- **`OpenAI.Audio.transcribe(audioPath, options)`** - Transcribes audio
- **`OpenAI.Audio.translate(audioPath, options)`** - Translates audio
- **`OpenAI.Audio.speech(text, options)`** - Generates speech
- **`OpenAI.Audio.saveSpeech(text, path, options)`** - Generates and saves speech

### Files

- **`OpenAI.Files.upload(filePath, purpose)`** - Uploads a file
- **`OpenAI.Files.list()`** - Lists uploaded files
- **`OpenAI.Files.retrieve(fileId)`** - Retrieves file information
- **`OpenAI.Files.delete(fileId)`** - Deletes a file
- **`OpenAI.Files.download(fileId, path)`** - Downloads a file

## Examples

### Authentication Setup

```lua
OpenAI.Auth.setApiKey("sk-...")
OpenAI.Auth.setOrganization("org-...")
OpenAI.Auth.setTimeout(30)
```

### Chat Completions

```lua
-- Simple completion
local messages = {
    {role = "user", content = "Hello!"}
}
local response = OpenAI.Chat.completion(messages, {
    model = "gpt-3.5-turbo",
    temperature = 0.7
})
Logger.info("Response: " .. response.content)

-- Conversation management
local convId = OpenAI.Chat.createConversation()
OpenAI.Chat.addUserMessage(convId, "What is AI?")
local response = OpenAI.Chat.getLastResponse(convId)
```

### Image Generation

```lua
local result = OpenAI.Image.generate("A beautiful sunset", {
    size = "1024x1024",
    n = 1
})
Logger.info("Image URL: " .. result.url)
```

### Audio Transcription

```lua
local result = OpenAI.Audio.transcribe("audio.mp3", {
    language = "en"
})
Logger.info("Transcription: " .. result.text)
```

## Parameters

- **`key`** - API key string
- **`org`** - Organization ID
- **`proxy`** - Proxy URL
- **`seconds`** - Timeout in seconds
- **`messages`** - Array of message objects with `role` and `content`
- **`options`** - Table with API options (model, temperature, etc.)
- **`conversationId`** - Conversation identifier
- **`message`** - Message content
- **`prompt`** - Text prompt
- **`image`** - Image file path
- **`mask`** - Mask image path
- **`audioPath`** - Path to audio file
- **`text`** - Text to convert to speech
- **`filePath`** - Path to file
- **`purpose`** - File purpose (e.g., "fine-tune")
- **`fileId`** - File identifier
- **`path`** - Destination path

## Return Values

Functions return tables with response data. Structure varies by function type:
- Chat completions return message objects
- Image generation returns image URLs
- Audio functions return transcription/translation text
- File operations return file metadata

## Related Nodes

- [OpenAISetApiKey Node](/docs/nodes/openai-set-api-key)
- [OpenAIChatCompletion Node](/docs/nodes/openai-chat-completion)
- [OpenAICompletion Node](/docs/nodes/openai-completion)
- [OpenAIGenerateImage Node](/docs/nodes/openai-generate-image)
- [OpenAICreateTranscription Node](/docs/nodes/openai-create-transcription)
- [OpenAICreateSpeech Node](/docs/nodes/openai-create-speech)
- [OpenAIUploadFile Node](/docs/nodes/openai-upload-file)
- And other OpenAI nodes...

