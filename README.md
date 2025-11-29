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

We also welcome contributions for new language localizations! See the [Contributing Localizations](#contributing-localizations) section below for details.

## Contributing Localizations

RUNE Interface supports multiple languages through `.po` (Portable Object) files. If you'd like to contribute a new language translation, here's how:

### Getting Started

1. **Use the template**: Start with the base language file `languages/en_US.po` as your template
2. **Read the guide**: See the detailed [Localization Guide](/docs/rune-interface/localization) for step-by-step instructions on creating translations
3. **Create your translation**: 
   - Copy `languages/en_US.po` and rename it to match your language code (e.g., `fr_FR.po` for French, `de_DE.po` for German)
   - Update the file header with your language code, native name, and English name
   - Translate all `msgstr` entries to your target language

### Submitting Your Translation

**Important**: All localization PRs must have an associated Issue Ticket assigned before submission.

1. **Create or find an Issue Ticket**: 
   - Check if there's already an issue for your language
   - If not, create a new issue requesting support for your language
   - Wait for the issue to be assigned to you

2. **Prepare your PR**:
   - Place your `.po` file in the root-level `languages/` directory (not `docs/languages/`)
   - Ensure your file follows the same format as `en_US.po`
   - Test your translation locally before submitting

3. **Submit your Pull Request**:
   - Reference the Issue Ticket number in your PR description (e.g., "Fixes #123" or "Addresses #456")
   - Include the following information in your PR:
     - Language code (e.g., `fr_FR`, `de_DE`)
     - Native name of the language
     - English name of the language
     - Translation completeness status (e.g., "All 326 strings translated")
     - Any notes about the translation

### Language File Location

Language files must be placed in the **root-level `languages/` directory** (not `docs/languages/`). These files are compiled into the engine binary during the build process, so they need to be in the correct location for the build system to find them.

### Example PR Description

```
Translation: Français (fr_FR)

Language Code: fr_FR
Native Name: Français
English Name: French

This PR adds French translation support for RUNE Interface.
All 326 strings have been translated and tested.

Fixes #123
```

## Resources

- **Download RUNE Interface**: [itch.io](https://blaziumengine.itch.io/rune-interface)
- **Project Repository**: [holistic](https://github.com/blazium-engine/holistic)
- **Built by**: Blazium Engine Contributors
