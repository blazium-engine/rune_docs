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

The application includes a base English language file (`en_US.po`) with 306 translation entries covering all UI strings. This file serves as the template for creating translations in other languages.

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
"X-Native-Name: English\n"
"X-English-Name: English\n"
```

Key header fields:
- **`Language`** - The language code (e.g., `en_US`, `fr_FR`, `de_DE`)
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

Once you've completed and tested your translation, you can submit it to be included in future releases:

1. Visit the [RUNE Interface itch.io page](https://blaziumengine.itch.io/rune-interface)
2. Navigate to the **Community** or **Discussion** section
3. Create a new post with the following information:
   - **Title**: `Translation: [Language Name] ([Language Code])`
   - **Content**: Include:
     - Language code (e.g., `fr_FR`, `de_DE`)
     - Native name of the language
     - English name of the language
     - Attach your `.po` file
     - Any notes about the translation (completeness, special considerations, etc.)

### Example Submission

```
Title: Translation: Français (fr_FR)

Language Code: fr_FR
Native Name: Français
English Name: French

I've completed a French translation of RUNE Interface. All 306 strings have been translated.

[Attach fr_FR.po file]
```

## Tips for Translators

- **Consistency**: Use consistent terminology throughout the translation
- **Context**: Some strings may appear in multiple contexts - ensure the translation works in all cases
- **Format Strings**: Never modify format placeholders like `%s`, `%d`, etc.
- **Length**: Some UI elements have limited space - keep translations concise when possible
- **Technical Terms**: Consider whether to translate technical terms or keep them in English
- **Testing**: Always test your translation in the actual application before submitting

## Current Status

The base language file (`en_US.po`) contains **306 translation entries** covering:
- Setup and welcome screens
- Menu items and dialogs
- Flow management
- Node information
- Execution history
- Error messages
- Settings and preferences

## Questions or Issues?

If you encounter any issues with translations or have questions about the localization system, please post in the [itch.io discussion board](https://blaziumengine.itch.io/rune-interface).

