---
sidebar_position: 34
---

# Crypto Hash Node

The Crypto Hash node computes a cryptographic hash of input data.

![Crypto Hash Node](https://placehold.co/600x400/EEE/31343C)

## Description

The Crypto Hash node computes a cryptographic hash (e.g., SHA-256, MD5) of input data. Hashes are one-way functions that produce a fixed-size output from variable-size input.

## Execution Inputs

- **In** (execution): The execution flow enters through this pin

## Variable Inputs

- **Data** (string): The data to hash
- **Algorithm** (string, property): The hash algorithm to use (e.g., "SHA256", "MD5", "SHA1")

## Execution Outputs

- **Out** (execution): Execution continues after the hash is computed

## Variable Outputs

- **Hash** (string): The computed hash value (typically as hex string)

## Special Notes

- Hash algorithm is set in node properties
- Common algorithms: SHA-256, SHA-1, MD5
- Hash output is typically a hex string
- Same input always produces the same hash
- Use for data integrity verification or password hashing

## Example Usage

Hash passwords, verify file integrity, or create content-based identifiers. For example, hash a user's password before storing it.

## Flow Download Example

*Placeholder for flow download example*

## Additional Pictures

*Placeholder for additional node images and examples*

