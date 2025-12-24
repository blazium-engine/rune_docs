---
sidebar_position: 1
---

# Math Functions

The Math category provides mathematical operations that mirror the functionality of Math nodes.

## Available Functions

### Basic Operations

- **`Math.add(a, b)`** - Adds two numbers
- **`Math.sub(a, b)`** - Subtracts b from a
- **`Math.mul(a, b)`** - Multiplies two numbers
- **`Math.div(a, b)`** - Divides a by b
- **`Math.mod(a, b)`** - Returns the remainder of a divided by b

### Advanced Operations

- **`Math.abs(value)`** - Returns the absolute value
- **`Math.sqrt(value)`** - Returns the square root
- **`Math.pow(base, exponent)`** - Returns base raised to the power of exponent
- **`Math.ceil(value)`** - Rounds up to the nearest integer
- **`Math.floor(value)`** - Rounds down to the nearest integer
- **`Math.round(value)`** - Rounds to the nearest integer
- **`Math.log(value)`** - Returns the natural logarithm
- **`Math.log10(value)`** - Returns the base-10 logarithm
- **`Math.exp(value)`** - Returns e raised to the power of value
- **`Math.fmod(a, b)`** - Returns the floating-point remainder
- **`Math.hypot(a, b)`** - Returns the hypotenuse of a right triangle

### Min/Max Operations

- **`Math.max(...)`** - Returns the maximum value from the arguments
- **`Math.min(...)`** - Returns the minimum value from the arguments

## Examples

### Basic Arithmetic

```lua
local sum = Math.add(10, 20)        -- Returns 30
local difference = Math.sub(50, 20) -- Returns 30
local product = Math.mul(5, 6)      -- Returns 30
local quotient = Math.div(100, 5)   -- Returns 20
local remainder = Math.mod(17, 5)   -- Returns 2
```

### Advanced Math

```lua
local absValue = Math.abs(-42)           -- Returns 42
local squareRoot = Math.sqrt(16)        -- Returns 4
local power = Math.pow(2, 8)            -- Returns 256
local ceiling = Math.ceil(4.3)          -- Returns 5
local floor = Math.floor(4.7)            -- Returns 4
local rounded = Math.round(4.5)         -- Returns 5
```

### Logarithms and Exponentials

```lua
local ln = Math.log(2.71828)     -- Returns approximately 1
local log10 = Math.log10(100)    -- Returns 2
local exp = Math.exp(1)          -- Returns approximately 2.71828
```

### Min/Max

```lua
local maximum = Math.max(10, 20, 5, 30)  -- Returns 30
local minimum = Math.min(10, 20, 5, 30)  -- Returns 5
```

## Return Values

All functions return a number (integer or float depending on the operation).

## Related Nodes

- [MathAdd Node](/docs/nodes/math-add)
- [MathSub Node](/docs/nodes/math-sub)
- [MathMul Node](/docs/nodes/math-mul)
- [MathDiv Node](/docs/nodes/math-div)
- [MathMod Node](/docs/nodes/math-mod)
- [MathAbsInteger Node](/docs/nodes/math-abs-integer)
- [MathAbsFloat Node](/docs/nodes/math-abs-float)
- [MathSqrt Node](/docs/nodes/math-sqrt)
- [MathPow Node](/docs/nodes/math-pow)
- And other Math nodes...

