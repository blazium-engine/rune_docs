# RUNE Interface Documentation

This repository contains the documentation website for [RUNE Interface](https://blaziumengine.itch.io/rune-interface), a visual workflow editor for building flows with Luau.

The documentation is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## What is RUNE Interface?

RUNE (Rapid Unified Node Editor) is a visual workflow editor that lets you build automation flows, data processing pipelines, and complex logic without writing traditional code. Instead of writing code line by line, you drag nodes onto a canvas, connect them together, and run your flow immediately.

## Documentation Structure

- **Introduction**: Overview of RUNE and key concepts
- **RUNE Interface**: Getting started guide for the graphical application
- **RUNE CLI**: Getting started guide for the command-line tool
- **Luau API**: Complete reference for the Luau scripting API
  - Core Systems: SessionState, FlowFile, Logger, and more
  - Functions: Individual function documentation with examples
- **Nodes**: Complete reference for all available nodes
  - Flow Control, Events, Session State, Data Types, Comparisons
  - File Operations, JSON/YAML/INI/CSV Operations, Crypto, and Utilities

## Installation

```bash
yarn
```

## Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

The documentation will be available at `http://localhost:3000`

## Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

The documentation is deployed to GitHub Pages at `https://blazium-engine.github.io/rune_docs/`

## Contributing

Documentation improvements and corrections are welcome! Please ensure that:

- Documentation is clear and concise, suitable for junior engineers
- Code examples are accurate and tested
- Node documentation includes all inputs, outputs, and special notes
- Links to related documentation are included where appropriate

## Resources

- **Download RUNE Interface**: [itch.io](https://blaziumengine.itch.io/rune-interface)
- **Project Repository**: [holistic](https://github.com/blazium-engine/holistic)
- **Built by**: Blazium Engine Contributors
