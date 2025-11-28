---
sidebar_position: 35
---

# Crypto HMAC Node

The Crypto HMAC node computes an HMAC (Hash-based Message Authentication Code).

![Crypto HMAC Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Crypto HMAC node computes an HMAC using a secret key and input data. HMAC provides both authentication and integrity verification.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Data** (string): The data to authenticate
- **Key** (string): The secret key for HMAC computation
- **Algorithm** (string, property): The hash algorithm to use (e.g., "SHA256", "SHA1")

## Execution Outputs

- **Out** (execution): Execution continues after the HMAC is computed

## Variable Outputs

- **HMAC** (string): The computed HMAC value (typically as hex string)

## Special Notes

- HMAC algorithm is set in node properties
- Requires both data and a secret key
- HMAC output is typically a hex string
- Use for API authentication, message signing, or data integrity with authentication

## Example Usage

Sign API requests, authenticate messages, or verify data integrity with authentication. For example, compute HMAC for API request signing.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

