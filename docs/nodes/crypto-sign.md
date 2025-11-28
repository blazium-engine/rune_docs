---
sidebar_position: 36
---

# Crypto Sign Node

The Crypto Sign node signs data using a private key.

![Crypto Sign Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Crypto Sign node creates a digital signature for data using a private key. Digital signatures provide authentication and non-repudiation.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Data** (string): The data to sign
- **PrivateKey** (string): The private key for signing
- **Algorithm** (string, property): The signing algorithm to use

## Execution Outputs

- **Out** (execution): Execution continues after the signature is created

## Variable Outputs

- **Signature** (string): The computed digital signature (typically as base64 or hex string)

## Special Notes

- Signing algorithm is set in node properties
- Requires a private key
- Signature output format depends on algorithm
- Use for digital signatures, document signing, or cryptographic authentication

## Example Usage

Sign documents, authenticate transactions, or create verifiable data. For example, sign a contract or important document.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

