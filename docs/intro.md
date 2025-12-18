---
sidebar_position: 1
---

# Introduction to RUNE

Welcome to the RUNE Interface documentation! R.U.N.E. – Routing & Utility Node Editor is a visual workflow editor that lets you build automation flows, data processing pipelines, and complex logic without writing traditional code.

## What is RUNE?

R.U.N.E. – Routing & Utility Node Editor is a node-based visual programming system. Instead of writing code line by line, you:

1. **Drag nodes** onto a canvas
2. **Connect them together** with wires
3. **Configure inputs** and outputs
4. **Run your flow** immediately

Think of it like building with LEGO blocks - each node does a specific job, and you connect them to create complex workflows.

## RUNE Interface vs RUNE CLI

RUNE comes in two forms:

- **RUNE Interface**: A graphical application with a visual editor. Perfect for designing flows, debugging, and interactive development.
- **RUNE CLI**: A command-line tool for executing flows. Perfect for automation, scripts, and CI/CD pipelines.

Both tools use the same flow format, so you can design in the Interface and execute with the CLI.

## Key Concepts

### Flows

A **flow** is a collection of connected nodes that work together to accomplish a task. Each flow is saved as a JSON file and can be shared, versioned, and executed.

### Nodes

**Nodes** are the building blocks of flows. Each node:
- Has **inputs** (data and execution pins)
- Performs a specific operation
- Produces **outputs** (data and execution pins)

### Execution Flow

Nodes are connected with **execution pins** that control the order of operations. When a node finishes, it triggers the next connected node.

### Data Flow

Nodes pass data between each other using **data pins**. Values flow from output pins to input pins.

### Session State

**Session State** is a storage system that persists data throughout a flow execution. You can set, get, and delete values that other nodes can access.

## Getting Started

Ready to start building? Choose your path:

- **[RUNE Interface Getting Started](/docs/rune-interface/getting-started)** - Learn to use the visual editor
- **[RUNE CLI Getting Started](/docs/rune-cli/getting-started)** - Learn to use the command-line tool
- **[Luau API Reference](/docs/luau/session-state)** - Explore the scripting API
- **[Node Reference](/docs/nodes/branch)** - Browse available nodes

## Extending RUNE

RUNE can be extended in multiple ways, depending on how deep you need to integrate:

- **[Custom Nodes](/docs/rune-interface/custom-nodes)** - Define new nodes with YAML + Luau scripts.
- **[MCP Server Integration](/docs/rune-interface/mcp-server)** - Expose external tools and services over the MCP protocol.
- **[Native Plugins with the RUNE Plugin SDK](/docs/rune-interface/plugins)** - Build compiled C/C++ plugins using the public SDK.

## Download

Get RUNE Interface and RUNE CLI from [itch.io](https://blaziumengine.itch.io/rune-interface).

---

**Built by Blazium Engine Contributors**
