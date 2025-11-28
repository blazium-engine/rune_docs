---
sidebar_position: 33
---

# Crypto Generate Random Node

The Crypto Generate Random node generates cryptographically secure random values.

![Crypto Generate Random Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Crypto Generate Random node generates random bytes, strings, or numbers using cryptographically secure random number generation. Useful for generating IDs, tokens, or random data.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Length** (integer, optional): The length of the random value to generate

## Execution Outputs

- **Out** (execution): Execution continues after the random value is generated

## Variable Outputs

- **Random** (string): The generated random value (as hex string or base64 depending on mode)

## Special Notes

- Uses cryptographically secure random number generation
- Output format depends on the node configuration (hex, base64, etc.)
- Length input determines the size of the generated value
- Suitable for security-sensitive applications

## Example Usage

Generate secure tokens, random IDs, or encryption keys. For example, generate a 32-byte random token for session management.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

