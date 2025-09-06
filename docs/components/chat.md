# Chat Component

A component for displaying chat messages and conversations.

## Basic Usage

```tsx
import { Chat } from '@loom/chat';

function MyComponent() {
  return (
    <Chat>
  <Chat.Message sender="user">Hello!</Chat.Message>
  <Chat.Message sender="bot">Hi there!</Chat.Message>
</Chat>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | - | Additional CSS classes |
| `children` | `React.ReactNode` | - | Component content |

## Examples

### Basic Usage

```tsx
<Chat>
  <Chat.Message sender="user">Hello!</Chat.Message>
  <Chat.Message sender="bot">Hi there!</Chat.Message>
</Chat>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/chat)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/chat)

## Accessibility

The Chat component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The Chat component uses CSS custom properties for theming:

```css
:root {
  --loom-chat-background: #ffffff;
  --loom-chat-border-color: #e5e7eb;
  --loom-chat-border-radius: 6px;
  --loom-chat-padding: 0.5rem;
}
```
