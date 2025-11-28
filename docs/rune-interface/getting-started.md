---
sidebar_position: 1
---

# RUNE Interface - Getting Started

RUNE Interface is the graphical application for creating and editing RUNE flows. This guide will help you get started.

## Installation

1. Download RUNE Interface from [itch.io](https://blaziumengine.itch.io/rune-interface)
2. Extract the archive to your desired location
3. Run the executable

## First Launch

When you first launch RUNE Interface, you'll be prompted to configure:

- **Cache Directory**: Where RUNE stores temporary files and execution records
- **Flows Directory**: Where your flow files are stored

These directories can be changed later in the settings.

## Creating Your First Flow

1. Click **"Create Flow"** on the startup screen
2. Enter a name for your flow
3. The editor will open with an empty canvas

## The Interface

### Node Menu (Left Side)

The left panel shows:
- **Nodes Tab**: Browse and search available nodes
- **History Tab**: View execution history and logs

### Canvas (Right Side)

The main canvas is where you:
- Place nodes by dragging from the node menu
- Connect nodes with wires
- Configure node properties

### Menu Bar (Top)

The menu bar provides:
- File operations (New, Open, Save, Export)
- Flow execution controls
- Settings and preferences

## Basic Workflow

1. **Add a Start Node**: Drag a `ButtonEvent` node onto the canvas - this will be your entry point
2. **Add Processing Nodes**: Add nodes like `Text`, `SessionStateSet`, or `Console` to process data
3. **Connect Nodes**: Click and drag from execution pins to connect the flow
4. **Configure Inputs**: Click on nodes to set input values
5. **Run the Flow**: Click the "Run" button or press the trigger button

## Next Steps

- Learn about [available nodes](/docs/nodes/branch)
- Explore the [Luau API](/docs/luau/session-state) for scripting
- Check out [flow examples](#) (coming soon)

