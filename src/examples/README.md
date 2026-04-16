# Component Usage Examples

Each file in this folder demonstrates how to use a specific component from the `vatsdebugzone-wd-react-sb` library in a real project.

## Quick Start

```bash
npm install vatsdebugzone-wd-react-sb @phosphor-icons/react
```

## Files

| File | Component | Key Features Shown |
|------|-----------|-------------------|
| `ButtonExample.tsx` | `Button` | Variants, sizes, icons, dropdown menu, loading state |
| `TextboxExample.tsx` | `Textbox` | Floating label, icons, validation (phone/card), password toggle, textarea |
| `DropdownExample.tsx` | `Dropdown` | Single/multi select, search, images, error/disabled states |
| `CardExample.tsx` | `Card` | Variants (default/bordered/elevated/glass), images, actions, badges |
| `ChipsExample.tsx` | `Chip` | Colors, variants, icons, closable, selectable toggle |
| `CheckboxExample.tsx` | `Checkbox` / `CheckboxGroup` | Colors, sizes, indeterminate, grouped layout |
| `RadioExample.tsx` | `RadioGroup` | Horizontal/vertical layout, colors, disabled options |
| `AccordionExample.tsx` | `Accordion` | Variants, icons, subtitles, multiple-open, nested |
| `TableExample.tsx` | `Table` | Sorting, smart pagination, search, selection, status chips, row actions |
| `StatCardExample.tsx` | `StatCard` | Metrics, icons, trend indicators, color themes |
| `OTPInputExample.tsx` | `OTPInput` | 4/6-digit, auto-submit, error handling |
| `ParagraphExample.tsx` | `Paragraph` | Sizes, weight, color, alignment, truncation |

## Usage in Your App

```tsx
import { ButtonExample } from './examples';

function App() {
  return <ButtonExample />;
}
```

Or copy just the JSX you need from any example file into your own component.
