---
sidebar_position: 8
---

# Create Conversation Node

The Create Conversation node creates a new conversation context for chat completions. This conversation maintains message history and context.

![Create Conversation Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Create Conversation node initializes a new conversation context that can be used with chat completion nodes. The conversation maintains a history of messages and can include an optional system message.

The conversation ID returned by this node is used in all subsequent chat-related nodes to maintain context.

## Execution Inputs

- **Execute** (execution): Triggers conversation creation

## Variable Inputs

- **SystemData** (string, optional): Optional system message to set for the conversation

## Execution Outputs

- **Success** (execution): Execution continues here if conversation was successfully created

## Variable Outputs

- **ConversationId** (string): Unique identifier for the created conversation

## Special Notes

- Each conversation maintains its own message history
- System messages can be set during creation or later using Set System Message node
- Conversation IDs are unique and persistent
- Maximum system message size is 1MB
- Conversations are stored in session state

## Example Usage

Create a conversation with a system message:
1. Set SystemData to "You are a helpful assistant."
2. Connect Execute to start
3. Use ConversationId output in subsequent chat nodes

Create a conversation without a system message:
1. Leave SystemData empty
2. Connect Execute to start
3. Use ConversationId output in subsequent chat nodes

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

