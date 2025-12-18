---
sidebar_position: 2
---

# Localization

RUNE Interface supports multiple languages through the use of `.po` (Portable Object) files. This guide explains how the localization system works and how you can contribute translations.

## Current Localization System

RUNE Interface uses a lightweight PO-based localization system that scans for language files in multiple locations:

### Language File Locations

The application searches for `.po` files in the following order (later locations override earlier ones):

1. **`<exeDir>/lang`** - User override folder next to the executable
2. **`<flowsDir>/lang`** - Override folder inside your flows directory

Where:
- `<exeDir>` is the directory containing the RUNE Interface executable
- `<flowsDir>` is your configured flows directory

### Base Language File

The application includes a base English language file (`en_US.po`) with 326 translation entries covering all UI strings, including MCP-related tools and tray/minimize settings. This file serves as the template for creating translations in other languages.

### Special Files

- **`default.po`** - If a file named `default.po` is found, it will be treated as the default language for the application, regardless of its language code.

### Exporting the Base Language File

You can export the base `en_US.po` file directly from the application:

1. Open **Application Settings** (from the menu bar or setup dialog)
2. Click the **"Export Base Language File"** button
3. Select a folder where you want to save the file
4. The file will be saved as `en_US.po` in the selected location

This exported file contains all translatable strings and can be used as a template for creating translations.

## PO File Format

PO (Portable Object) files use a simple text-based format. Here's the structure:

### Header Section

The file begins with a header that contains metadata:

```po
msgid ""
msgstr ""
"Project-Id-Version: RUNE\n"
"Language: en_US\n"
"Content-Type: text/plain; charset=UTF-8\n"
"PO-Revision-Date: 2025-11-29 01:12-0700\n"
"X-Native-Name: English\n"
"X-English-Name: English\n"
```

Key header fields:
- **`Language`** - The language code (e.g., `en_US`, `fr_FR`, `de_DE`)
- **`PO-Revision-Date`** - The date and time when the translation was last revised (optional, but recommended)
- **`X-Native-Name`** - The name of the language in its native script (shown in UI)
- **`X-English-Name`** - The name of the language in English

### Translation Entries

Each translatable string has two parts:

```po
msgid "Source Text"
msgstr "Translated Text"
```

- **`msgid`** - The original English text (source string)
- **`msgstr`** - The translated text in your target language

### Example Entry

```po
msgid "Welcome to RUNE Interface!"
msgstr "Welcome to RUNE Interface!"
```

For a French translation, this would become:

```po
msgid "Welcome to RUNE Interface!"
msgstr "Bienvenue dans RUNE Interface !"
```

### Special Characters

PO files support escape sequences:
- `\n` - Newline
- `\t` - Tab
- `\"` - Quote
- `\\` - Backslash

### Format Strings

Some strings contain format placeholders (like `%s`):

```po
msgid "Create %s"
msgstr "Create %s"
```

When translating, preserve the format placeholders exactly as they appear in the `msgid`.

## Contributing Translations

### Step 1: Export the Base Language File

1. Launch RUNE Interface
2. Open **Application Settings**
3. Click **"Export Base Language File"**
4. Choose a location to save `en_US.po`

### Step 2: Create Your Translation

1. Copy the exported `en_US.po` file
2. Rename it to match your language code (e.g., `fr_FR.po` for French, `de_DE.po` for German)
3. Edit the file header:
   - Change `Language:` to your language code
   - Update `PO-Revision-Date:` to the current date and time (optional, but recommended)
   - Update `X-Native-Name:` to the native name of your language
   - Update `X-English-Name:` to the English name of your language
4. Translate all `msgstr` entries to your target language
   - Keep all `msgid` entries unchanged (they are the source strings)
   - Only modify the `msgstr` values

### Step 3: Test Your Translation

To test your translation before submitting:

1. Create a `lang` folder in the directory containing the RUNE Interface executable
2. Place your `.po` file in this `lang` folder
   - You can use `default.po` as the filename to make it the default language
   - Or use a language code filename like `fr_FR.po` and select it in settings
3. Restart RUNE Interface
4. If you used `default.po`, it will automatically be used
5. If you used a language code filename, go to **Application Settings** and select your language from the dropdown

### Step 4: Verify Your Translation

- Check that all UI elements display in your language
- Verify that format strings (like `%s`) are preserved correctly
- Test various dialogs and menus to ensure completeness
- Look for any missing translations (they will display as the English text)

## Submitting Translations

Once you've completed and tested your translation, you can submit it to be included in future releases via a GitHub Pull Request.

### Step 1: Create or Find an Issue Ticket

**Important**: All localization PRs must have an associated Issue Ticket assigned before submission.

1. Visit the [rune_docs repository](https://github.com/blazium-engine/rune_docs) on GitHub
2. Check if there's already an issue requesting support for your language
3. If an issue exists, comment that you'd like to work on it and wait for it to be assigned to you
4. If no issue exists, create a new issue:
   - Use a clear title like: `Add [Language Name] ([Language Code]) Translation`
   - Describe that you'd like to contribute a translation for your language
   - Wait for the issue to be assigned to you before proceeding

### Step 2: Prepare Your Pull Request

1. **Fork the repository** if you haven't already
2. **Create a new branch** for your translation (e.g., `add-fr-fr-translation`)
3. **Place your `.po` file** in the root-level `languages/` directory:
   - The file must be in `languages/` (not `docs/languages/`)
   - Use the language code as the filename (e.g., `fr_FR.po`, `de_DE.po`)
   - This directory is where language files are compiled into the engine binary
4. **Ensure your file follows the format**:
   - Same structure as `languages/en_US.po`
   - Correct header with language code, native name, and English name
   - All `msgid` entries unchanged
   - All `msgstr` entries translated

### Step 3: Submit Your Pull Request

1. **Commit your changes**:
   ```bash
   git add languages/XX_XX.po
   git commit -m "Add [Language Name] translation"
   ```

2. **Push to your fork** and create a Pull Request on GitHub

3. **In your PR description**, include:
   - Reference to the Issue Ticket (e.g., "Fixes #123" or "Addresses #456")
   - Language code (e.g., `fr_FR`, `de_DE`)
   - Native name of the language
   - English name of the language
   - Translation completeness status (e.g., "All 326 strings translated")
   - Any notes about the translation (special considerations, testing done, etc.)

### Example PR Description

```
Translation: Français (fr_FR)

This PR adds French translation support for RUNE Interface.

Language Code: fr_FR
Native Name: Français
English Name: French

All 326 strings have been translated and tested locally. The translation
has been verified in the application UI.

Fixes #123
```

### Important Notes

- **Issue Ticket Required**: PRs without an associated Issue Ticket will not be accepted
- **File Location**: Language files must be in the root `languages/` directory, not `docs/languages/`
- **Testing**: Make sure you've tested your translation locally before submitting
- **Completeness**: While partial translations are welcome, please indicate the completion status in your PR

## Tips for Translators

- **Consistency**: Use consistent terminology throughout the translation
- **Context**: Some strings may appear in multiple contexts - ensure the translation works in all cases
- **Format Strings**: Never modify format placeholders like `%s`, `%d`, etc.
- **Length**: Some UI elements have limited space - keep translations concise when possible
- **Technical Terms**: Consider whether to translate technical terms or keep them in English
- **Testing**: Always test your translation in the actual application before submitting

## Current Status

The base language file (`en_US.po`) contains **326 translation entries** covering:
- Setup and welcome screens
- Menu items and dialogs
- Flow management
- Node information
- Execution history
- Error messages
- Settings and preferences

## Questions or Issues?

If you encounter any issues with translations or have questions about the localization system:

- **For contribution questions**: Open an issue on the [rune_docs repository](https://github.com/blazium-engine/rune_docs)
- **For general questions**: Post in the [itch.io discussion board](https://blaziumengine.itch.io/rune-interface)

