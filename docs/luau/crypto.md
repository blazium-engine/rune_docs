---
sidebar_position: 4
---

# Cryptography Functions

The Crypto category provides cryptographic operations that mirror the functionality of Crypto nodes.

## Available Functions

- **`Crypto.generateRandom(length, algorithm)`** - Generates random bytes
- **`Crypto.hash(value, algorithm, binaryPropertyName)`** - Computes a hash of the input value
- **`Crypto.hmac(value, key, algorithm, binaryPropertyName)`** - Computes HMAC (Hash-based Message Authentication Code)
- **`Crypto.sign(value, privateKey, algorithm, binaryPropertyName)`** - Signs data with a private key

## Examples

### Generating Random Data

```lua
local random = Crypto.generateRandom(32, "SHA256")
```

### Hashing

```lua
local hash = Crypto.hash("Hello World", "SHA256")
-- Returns hexadecimal hash string
```

### HMAC

```lua
local hmac = Crypto.hmac("message", "secret-key", "SHA256")
-- Returns HMAC value
```

### Signing

```lua
local signature = Crypto.sign("data", "private-key", "SHA256")
-- Returns signature
```

## Parameters

- **`value`** - The input value to hash/sign
- **`key`** - The secret key for HMAC
- **`privateKey`** - The private key for signing
- **`algorithm`** - Hash algorithm (e.g., "SHA256", "SHA512", "MD5")
- **`binaryPropertyName`** - Optional property name for binary data
- **`length`** - Length of random data to generate

## Return Values

All functions return string values (hexadecimal representation for hashes and signatures).

## Related Nodes

- [CryptoGenerateRandom Node](/docs/nodes/crypto-generate-random)
- [CryptoHash Node](/docs/nodes/crypto-hash)
- [CryptoHmac Node](/docs/nodes/crypto-hmac)
- [CryptoSign Node](/docs/nodes/crypto-sign)

