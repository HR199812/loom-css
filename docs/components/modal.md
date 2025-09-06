# Modal Component

The Modal component provides a flexible dialog overlay for displaying content, forms, or confirmations.

## Basic Usage

```tsx
import { Modal } from '@loom/modal';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Content>
          <p>Modal content goes here</p>
        </Modal.Content>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button variant="primary" onClick={() => setIsOpen(false)}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
```

## Variants

The Modal component supports different visual variants:

- **default**: Standard modal with backdrop
- **centered**: Centered modal (default)
- **fullscreen**: Fullscreen modal
- **drawer**: Side drawer modal

## Sizes

- **sm**: Small modal (400px)
- **md**: Medium modal (600px, default)
- **lg**: Large modal (800px)
- **xl**: Extra large modal (1000px)

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Whether modal is open |
| `onClose` | `() => void` | - | Function called when modal should close |
| `variant` | `'default' \| 'centered' \| 'fullscreen' \| 'drawer'` | `'centered'` | Visual variant of the modal |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Size of the modal |
| `closeOnBackdropClick` | `boolean` | `true` | Whether clicking backdrop closes modal |
| `closeOnEscape` | `boolean` | `true` | Whether pressing Escape closes modal |
| `showCloseButton` | `boolean` | `true` | Whether to show close button |
| `className` | `string` | - | Additional CSS classes |
| `children` | `React.ReactNode` | - | Modal content |

## Modal Subcomponents

### Modal.Header
Container for the modal header content.

### Modal.Title
Styled title component for the modal header.

### Modal.Content
Main content area of the modal.

### Modal.Footer
Container for the modal footer content.

## Examples

### Basic Modal

```tsx
const [isOpen, setIsOpen] = useState(false);

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <Modal.Content>
    <p>This is a basic modal.</p>
  </Modal.Content>
</Modal>
```

### Modal with Header and Footer

```tsx
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <Modal.Header>
    <Modal.Title>Confirm Action</Modal.Title>
  </Modal.Header>
  <Modal.Content>
    <p>Are you sure you want to perform this action?</p>
  </Modal.Content>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
    <Button variant="primary" onClick={() => setIsOpen(false)}>Confirm</Button>
  </Modal.Footer>
</Modal>
```

### Different Sizes

```tsx
<div style={{ display: 'flex', gap: '1rem' }}>
  <Button onClick={() => setModalSize('sm')}>Small Modal</Button>
  <Button onClick={() => setModalSize('md')}>Medium Modal</Button>
  <Button onClick={() => setModalSize('lg')}>Large Modal</Button>
  <Button onClick={() => setModalSize('xl')}>Extra Large Modal</Button>
</div>

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size={modalSize}>
  <Modal.Content>
    <p>This is a {modalSize} modal.</p>
  </Modal.Content>
</Modal>
```

### Fullscreen Modal

```tsx
<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  variant="fullscreen"
>
  <Modal.Header>
    <Modal.Title>Fullscreen Modal</Modal.Title>
  </Modal.Header>
  <Modal.Content>
    <p>This modal takes up the full screen.</p>
  </Modal.Content>
</Modal>
```

### Drawer Modal

```tsx
<Modal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
  variant="drawer"
>
  <Modal.Header>
    <Modal.Title>Drawer</Modal.Title>
  </Modal.Header>
  <Modal.Content>
    <p>This is a side drawer modal.</p>
  </Modal.Content>
</Modal>
```

### Modal with Form

```tsx
<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <Modal.Header>
    <Modal.Title>Create New Item</Modal.Title>
  </Modal.Header>
  <Modal.Content>
    <form onSubmit={handleSubmit}>
      <Input label="Name" placeholder="Enter name" />
      <Input label="Email" type="email" placeholder="Enter email" />
      <Textarea label="Description" placeholder="Enter description" />
    </form>
  </Modal.Content>
  <Modal.Footer>
    <Button variant="secondary" onClick={() => setIsOpen(false)}>Cancel</Button>
    <Button variant="primary" type="submit">Create</Button>
  </Modal.Footer>
</Modal>
```

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/modal)

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/modal)

## Accessibility

The Modal component includes proper accessibility features:

- Focus management (traps focus within modal)
- Escape key handling
- Backdrop click handling
- Proper ARIA attributes
- Screen reader announcements
- Focus restoration when modal closes

## Styling

The Modal component uses CSS custom properties for theming:

```css
:root {
  --loom-modal-backdrop: rgba(0, 0, 0, 0.5);
  --loom-modal-background: #ffffff;
  --loom-modal-border-radius: 8px;
  --loom-modal-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --loom-modal-padding: 1.5rem;
  --loom-modal-z-index: 1000;
}
```
