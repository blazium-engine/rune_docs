---
sidebar_position: 8
---

# Semver Functions

The Semver category provides semantic versioning operations that mirror the functionality of Semver nodes.

## Available Functions

### Parsing and Validation

- **`Semver.parse(version)`** - Parses a version string
- **`Semver.validate(version)`** - Validates a version string

### Comparison

- **`Semver.compare(a, b, operator)`** - Compares two versions
- **`Semver.checkRange(version, range)`** - Checks if version matches a range

### Getting Components

- **`Semver.getMajor(version)`** - Gets the major version number
- **`Semver.getMinor(version)`** - Gets the minor version number
- **`Semver.getPatch(version)`** - Gets the patch version number
- **`Semver.getPrerelease(version)`** - Gets the prerelease identifier
- **`Semver.getBuild(version)`** - Gets the build identifier

### Incrementing Versions

- **`Semver.incrementMajor(version)`** - Increments the major version
- **`Semver.incrementMinor(version)`** - Increments the minor version
- **`Semver.incrementPatch(version)`** - Increments the patch version

### Setting Components

- **`Semver.setMajor(version, value)`** - Sets the major version
- **`Semver.setMinor(version, value)`** - Sets the minor version
- **`Semver.setPatch(version, value)`** - Sets the patch version
- **`Semver.setPrerelease(version, value)`** - Sets the prerelease identifier
- **`Semver.setBuild(version, value)`** - Sets the build identifier

### Conversion

- **`Semver.toString(version)`** - Converts version to string

## Examples

### Parsing and Validation

```lua
local version = Semver.parse("1.2.3")
local isValid = Semver.validate("1.2.3")  -- Returns true
```

### Comparison

```lua
local isNewer = Semver.compare("1.2.3", "1.2.2", ">")  -- Returns true
local matches = Semver.checkRange("1.2.3", "^1.0.0")   -- Returns true
```

### Getting Components

```lua
local major = Semver.getMajor("1.2.3")        -- Returns 1
local minor = Semver.getMinor("1.2.3")        -- Returns 2
local patch = Semver.getPatch("1.2.3")        -- Returns 3
local prerelease = Semver.getPrerelease("1.2.3-alpha")  -- Returns "alpha"
local build = Semver.getBuild("1.2.3+build.1")  -- Returns "build.1"
```

### Incrementing

```lua
local nextMajor = Semver.incrementMajor("1.2.3")  -- Returns "2.0.0"
local nextMinor = Semver.incrementMinor("1.2.3")  -- Returns "1.3.0"
local nextPatch = Semver.incrementPatch("1.2.3")  -- Returns "1.2.4"
```

### Setting Components

```lua
local version = Semver.setMajor("1.2.3", 2)   -- Returns "2.2.3"
local version = Semver.setMinor("1.2.3", 3)   -- Returns "1.3.3"
local version = Semver.setPatch("1.2.3", 4)   -- Returns "1.2.4"
```

## Parameters

- **`version`** - Version string (e.g., "1.2.3", "1.2.3-alpha", "1.2.3+build.1")
- **`range`** - Version range (e.g., "^1.0.0", "~1.2.0")
- **`operator`** - Comparison operator: `"=="`, `"!="`, `"<"`, `">"`, `"<="`, `">="`
- **`value`** - New value for the component

## Return Values

- Parsing functions return version objects or strings
- Validation returns boolean
- Comparison returns boolean
- Get functions return numbers or strings
- Increment/Set functions return version strings

## Related Nodes

- [SemverParse Node](/docs/nodes/semver-parse)
- [SemverValidate Node](/docs/nodes/semver-validate)
- [SemverCompare Node](/docs/nodes/semver-compare)
- [SemverGetMajor Node](/docs/nodes/semver-get-major)
- And other Semver nodes...

