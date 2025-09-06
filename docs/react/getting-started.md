# React Getting Started

Get up and running with loom-css in your React application. This guide will walk you through the basics of using loom-css components in React.

## Installation

First, install the React package:

```bash
npm install @loom-css/react
```

## Basic Usage

### Import Components

```tsx
import { Button, Card, Input } from '@loom-css/react';

function App() {
  return (
    <div>
      <Button variant="primary">Hello World</Button>
      <Card>
        <Input placeholder="Enter your name" />
      </Card>
    </div>
  );
}
```

### Component Props

All loom-css React components are fully typed and support TypeScript:

```tsx
import { Button, ButtonProps } from '@loom-css/react';

interface MyButtonProps extends ButtonProps {
  customProp?: string;
}

const MyButton: React.FC<MyButtonProps> = ({ customProp, ...props }) => {
  return <Button {...props}>{customProp}</Button>;
};
```

## Live Examples

### Button Component

```tsx live
import { Button } from '@loom-css/react';

function ButtonExample() {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}
```

### Card Component

```tsx live
import { Card, CardHeader, CardContent, CardFooter } from '@loom-css/react';

function CardExample() {
  return (
    <Card style={{ maxWidth: '400px' }}>
      <CardHeader>
        <h3>Card Title</h3>
        <p>Card description goes here</p>
      </CardHeader>
      <CardContent>
        <p>This is the main content of the card. It can contain any React elements.</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary">Action</Button>
        <Button variant="outline">Cancel</Button>
      </CardFooter>
    </Card>
  );
}
```

### Input Component

```tsx live
import { Input, Label } from '@loom-css/react';
import { useState } from 'react';

function InputExample() {
  const [value, setValue] = useState('');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
    </div>
  );
}
```

## Styling

### CSS Classes

You can still use CSS classes for custom styling:

```tsx
import { Button } from '@loom-css/react';
import './custom-styles.css';

function CustomButton() {
  return (
    <Button 
      variant="primary" 
      className="custom-button"
    >
      Custom Styled Button
    </Button>
  );
}
```

### Inline Styles

```tsx
import { Card } from '@loom-css/react';

function StyledCard() {
  return (
    <Card 
      style={{ 
        backgroundColor: '#f0f0f0',
        borderRadius: '12px',
        padding: '2rem'
      }}
    >
      Custom styled card content
    </Card>
  );
}
```

### CSS-in-JS

```tsx
import { Button } from '@loom-css/react';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  border: none;
  color: white;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

function GradientButton() {
  return <StyledButton>Gradient Button</StyledButton>;
}
```

## Theming

### Theme Provider

```tsx
import { ThemeProvider } from '@loom-css/react';

function App() {
  return (
    <ThemeProvider theme="dark">
      <YourApp />
    </ThemeProvider>
  );
}
```

### Custom Theme

```tsx
import { ThemeProvider } from '@loom-css/react';

const customTheme = {
  colors: {
    primary: '#your-primary-color',
    secondary: '#your-secondary-color',
  },
  fonts: {
    primary: 'Your Font, sans-serif',
  },
};

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <YourApp />
    </ThemeProvider>
  );
}
```

## Advanced Usage

### Custom Components

You can create custom components that extend loom-css components:

```tsx
import { Button, ButtonProps } from '@loom-css/react';
import { forwardRef } from 'react';

interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, iconPosition = 'left', children, ...props }, ref) => {
    return (
      <Button ref={ref} {...props}>
        {iconPosition === 'left' && icon}
        {children}
        {iconPosition === 'right' && icon}
      </Button>
    );
  }
);
```

### Form Integration

```tsx
import { Input, Button, Card, CardContent } from '@loom-css/react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
}

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Card>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              {...register('name', { required: 'Name is required' })}
              placeholder="Your name"
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          
          <div>
            <Input
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address'
                }
              })}
              type="email"
              placeholder="Your email"
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          
          <Button type="submit" variant="primary">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
```

## Best Practices

### 1. Component Composition

```tsx
// Good: Compose components
function UserCard({ user }) {
  return (
    <Card>
      <CardHeader>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </CardHeader>
      <CardContent>
        <p>{user.bio}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Edit</Button>
        <Button variant="primary">View Profile</Button>
      </CardFooter>
    </Card>
  );
}
```

### 2. Consistent Spacing

```tsx
// Use consistent spacing utilities
function Layout() {
  return (
    <div className="loom-space-y-4">
      <Card>Content 1</Card>
      <Card>Content 2</Card>
      <Card>Content 3</Card>
    </div>
  );
}
```

### 3. Accessibility

```tsx
// Always provide proper labels and ARIA attributes
function AccessibleForm() {
  return (
    <form>
      <Label htmlFor="username">Username</Label>
      <Input
        id="username"
        aria-describedby="username-help"
        required
      />
      <p id="username-help">Choose a unique username</p>
      
      <Button type="submit" aria-label="Submit form">
        Submit
      </Button>
    </form>
  );
}
```

## Next Steps

- 🧩 [Components Documentation](../components/button.md) - Explore all available components
- 🎨 [Styling Guide](./styling.md) - Learn advanced styling techniques
- 🌙 [Theming Guide](./theming.md) - Customize themes and design tokens
- 📱 [Examples](./examples.md) - See real-world usage examples
