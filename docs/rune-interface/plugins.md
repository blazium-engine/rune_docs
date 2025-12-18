---
sidebar_position: 5
---

# Creating Native Plugins with the RUNE Plugin SDK

RUNE supports **native plugins** written in C or C++. These plugins are compiled as shared libraries (`.dll`, `.so`, `.dylib`) and can:

- Add new nodes to the node palette
- Integrate with Luau
- Access host services such as logging, timers, JSON/CSV/INI utilities, and environment/settings APIs

This guide explains how to build native plugins using the **RUNE Plugin SDK**.

> For the full SDK source and up-to-date examples, see the
> [`rune_plugin_sdk` repository](https://github.com/blazium-engine/rune_plugin_sdk).

## Native Plugins vs Custom Nodes

RUNE has two primary ways to extend functionality:

- **Custom Nodes**: Defined with YAML + Luau scripts and loaded from your flows directory. See [Custom Nodes](/docs/rune-interface/custom-nodes).
- **Native Plugins**: Compiled shared libraries that use the C API from the `rune_plugin_sdk` to add nodes, menus, and more.

Use **Custom Nodes** when you want quick iteration in Luau. Use **Native Plugins** when you need:

- Heavy computation
- Integration with other C/C++ libraries
- Custom UI or async/event-driven behavior

## Getting the SDK

The RUNE Plugin SDK is a small C library that ships as headers and a CMake interface target.

Repository: [`rune_plugin_sdk` on GitHub](https://github.com/blazium-engine/rune_plugin_sdk)

The SDK headers live in:

- `include/plugin_api.h` – low-level C ABI and core types
- `include/rune_plugin.h` – convenience macros and helpers for plugin authors

You can consume the SDK in two primary ways (mirroring the instructions in the SDK’s `CMakeLists.txt`):

### Option 1: Add as a Subdirectory

Check out the SDK into your plugin project and add it as a subdirectory:

```cmake
add_subdirectory(rune_plugin_sdk)

add_library(my_plugin SHARED
    src/my_plugin.cpp
)

target_link_libraries(my_plugin PRIVATE rune_plugin_sdk)
```

This uses the `rune_plugin_sdk` **INTERFACE** target to add the correct include paths.

### Option 2: Install & `find_package`

You can also install the SDK and consume it via CMake’s `find_package`:

```cmake
find_package(RunePluginSDK CONFIG REQUIRED)

add_library(my_plugin SHARED
    src/my_plugin.cpp
)

target_link_libraries(my_plugin PRIVATE Rune::rune_plugin_sdk)
```

This is useful if you want to reuse the SDK across multiple plugin projects.

## Recommended Plugin Project Layout

A minimal plugin project typically looks like this:

```text
my_plugin/
  CMakeLists.txt
  plugin.json
  src/
    my_plugin.cpp
  dist/
    # build output goes here (.dll/.so/.dylib + plugin.json)
```

The `rune_plugin_sdk/examples` directory contains reference projects that follow this pattern, such as:

- `math_plugin` – pure data math nodes
- `env_plugin` – environment variable access
- `config_plugin` – configuration-related functionality
- `timer_plugin` – timer-based event nodes

## CMake Configuration Example

Here is a small `CMakeLists.txt` example for a plugin project using the SDK as a subdirectory:

```cmake
cmake_minimum_required(VERSION 3.15)
project(my_plugin LANGUAGES C CXX)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

# Add the SDK (path relative to this CMakeLists.txt)
add_subdirectory(rune_plugin_sdk)

add_library(my_plugin SHARED
    src/my_plugin.cpp
)

target_link_libraries(my_plugin PRIVATE rune_plugin_sdk)

# On Windows, build bare `my_plugin.dll` (no `lib` prefix)
if (WIN32)
    set_target_properties(my_plugin PROPERTIES
        PREFIX ""
        OUTPUT_NAME "my_plugin"
    )
elseif(APPLE)
    set_target_properties(my_plugin PROPERTIES
        PREFIX "lib"
        SUFFIX ".dylib"
    )
else()
    set_target_properties(my_plugin PROPERTIES
        PREFIX "lib"
        SUFFIX ".so"
    )
endif()

# Put binaries in `dist/`
set_target_properties(my_plugin PROPERTIES
    RUNTIME_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/dist
    LIBRARY_OUTPUT_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/dist
)

# Copy plugin.json next to the built library
if (EXISTS ${CMAKE_CURRENT_SOURCE_DIR}/plugin.json)
    add_custom_command(TARGET my_plugin POST_BUILD
        COMMAND ${CMAKE_COMMAND} -E copy
            ${CMAKE_CURRENT_SOURCE_DIR}/plugin.json
            ${CMAKE_CURRENT_SOURCE_DIR}/dist/plugin.json
        COMMENT "Copying plugin.json to dist"
    )
endif()
```

> This mirrors the behavior of the optional template described in the SDK’s
> `CMakeLists.txt` while using the modern `rune_plugin_sdk` interface target.

## `plugin.json` Metadata

Each plugin has a `plugin.json` file that describes how RUNE should load it. A simplified example from the `math_plugin` looks like:

```json
{
  "id": "com.rune.example.math",
  "name": "Math Plugin",
  "version": "1.0.0",
  "api_version": 1,
  "entry_symbol": "NodePlugin_GetAPI",
  "dependencies": [],
  "capabilities": [],
  "min_host_version": "1.0.0"
}
```

Key fields:

- **`id`**: Unique plugin identifier (e.g., `"com.yourcompany.myplugin"`). This should also match the `PluginInfo.id` in your C code.
- **`name`**: Human-friendly display name.
- **`version`**: Semantic version string (e.g., `"1.0.0"`).
- **`api_version`**: Must match the SDK’s `RUNE_PLUGIN_API_VERSION` (currently `1`).
- **`entry_symbol`**: Name of the exported entry function. By default this is `"NodePlugin_GetAPI"`.
- **`min_host_version`**: Minimum compatible RUNE host version.

RUNE scans the plugins directory for folders containing a shared library and a matching `plugin.json`. As long as your plugin directory follows this pattern, RUNE can discover and load it.

## Implementing a Simple Plugin

The easiest way to start is to include `rune_plugin.h` and use the SDK’s helper macros.

At a minimum, you need to:

1. Define your plugin’s metadata and lifecycle callbacks.
2. Register one or more nodes in `on_register`.
3. Implement `NodePlugin_GetAPI` (or use the helper macro that does it for you).

A simplified version of the `math_plugin` entry point looks like this:

```c
#define NODEPLUG_BUILDING
#include "rune_plugin.h"

static HostServices* g_host = NULL;

static bool on_load(HostServices* host) {
    g_host = host;
    host->log(LOG_LEVEL_INFO, "Math plugin loaded");
    return true;
}

static void on_register(PluginNodeRegistry* reg, LuauRegistry* luau) {
    (void)luau;
    /* Register nodes here using reg->register_node(...) */
}

static void on_unload(void) {
    if (g_host) {
        g_host->log(LOG_LEVEL_INFO, "Math plugin unloaded");
    }
    g_host = NULL;
}

static PluginAPI g_api = {
    {
        "com.rune.example.math",
        "Math Plugin",
        "1.0.0",
        "RUNE Team",
        "Example plugin demonstrating pure data nodes",
        RUNE_PLUGIN_API_VERSION
    },
    on_load,
    on_register,
    on_unload,
    NULL, NULL, NULL, NULL, NULL
};

NODEPLUG_EXPORT const PluginAPI* NodePlugin_GetAPI(void) {
    return &g_api;
}
```

For the full version, see `examples/math_plugin/src/math_plugin.cpp` in the
[`rune_plugin_sdk` repository](https://github.com/blazium-engine/rune_plugin_sdk).

### Defining Nodes

Nodes are described with a `NodeDesc` (name, category, pins) and a `NodeVTable` (callbacks for create/destroy/execute).

From the `math_plugin` example:

```c
static bool add_execute(void* inst, ExecContext* ctx) {
    (void)inst;
    double a = ctx->get_input_float(ctx, "A");
    double b = ctx->get_input_float(ctx, "B");
    double result = a + b;
    ctx->set_output_float(ctx, "Result", result);
    return true;
}

static NodeVTable add_vtable = {
    add_create,
    add_destroy,
    NULL, NULL,
    NULL, NULL,
    add_execute,
    NULL, NULL,
    NULL, NULL,
    NULL
};

static PinDesc add_pins[] = {
    {"A", "float", PIN_IN,  PIN_KIND_DATA, 0},
    {"B", "float", PIN_IN,  PIN_KIND_DATA, 0},
    {"Result", "float", PIN_OUT, PIN_KIND_DATA, 0},
};

static int add_color[] = {100, 200, 100};

static NodeDesc add_desc = {
    "Add",
    "Math",
    "com.rune.example.math.add",
    add_pins,
    3,
    NODE_FLAG_PURE_DATA,
    add_color,
    NULL,
    "Add two numbers together"
};
```

During `on_register`, the plugin registers this node:

```c
reg->register_node(&add_desc, &add_vtable);
```

After the plugin is loaded, an **Add** node appears in the **Math** category inside RUNE Interface.

## Building and Loading the Plugin

### Building with CMake (Windows example)

1. Create a build directory inside your plugin project (e.g., `build/`).
2. Configure CMake and generate a Visual Studio (or Ninja) project.
3. Build the `my_plugin` target.

Example commands (PowerShell from the plugin directory):

```powershell
cmake -S . -B build -G "Visual Studio 17 2022" -A x64
cmake --build build --config Debug
```

After a successful build, you should have:

- `dist/my_plugin.dll` (or platform equivalent)
- `dist/plugin.json`

### Installing into RUNE

RUNE expects plugins in a dedicated plugins directory. A typical layout is:

```text
RUNE/
  plugins/
    com.yourcompany.myplugin/
      plugin.json
      my_plugin.dll   # or libmy_plugin.so / libmy_plugin.dylib
```

A simple workflow is:

1. Create a folder named after your plugin ID (e.g., `com.yourcompany.myplugin`) inside the RUNE `plugins` directory.
2. Copy the contents of your plugin’s `dist/` folder into that directory.
3. Restart RUNE Interface.

If everything is configured correctly, your plugin’s nodes will appear in the node palette under the categories defined in your `NodeDesc` structures.

## Debugging & Best Practices

- **Logging**: Use `host->log(LOG_LEVEL_INFO, "message")` during `on_load`, `on_register`, and from node execution to trace plugin behavior.
- **Error Handling**: Use `ctx->set_error(ctx, "message")` inside `execute` to provide clear error messages in the UI.
- **Avoid Crashes**: Never throw exceptions across the DLL boundary; catch errors inside your plugin and report via logs or node errors.
- **Async/Events**: For long-running work, consider `NODE_FLAG_ASYNC` nodes and the job system helpers in `HostServices` instead of blocking the main thread.
- **Stay in Sync with the SDK**: Track changes in the [`rune_plugin_sdk` repository](https://github.com/blazium-engine/rune_plugin_sdk) when updating RUNE or the SDK.

## Further Reading

- [`rune_plugin_sdk` on GitHub](https://github.com/blazium-engine/rune_plugin_sdk)
- [Custom Nodes](/docs/rune-interface/custom-nodes)
- [MCP Server Integration](/docs/rune-interface/mcp-server)
- [Luau API Reference](/docs/luau/session-state)


