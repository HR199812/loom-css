const fs = require('fs');
const path = require('path');

const components = [
  'accordion', 'alert', 'avatar', 'badge', 'breadcrumb', 'calendar', 'carousel',
  'chat', 'checkbox', 'commandpalette', 'dateinput', 'dropdown', 'grid', 'lists',
  'otpinput', 'pagination', 'paymentplan', 'progressbar', 'radio', 'range',
  'searchinput', 'separator', 'sidebar', 'switch', 'table', 'tabs', 'text',
  'textarea', 'themeswitch', 'title', 'toast', 'togglegroup', 'tooltip',
  'barchart', 'linechart'
];

const componentTemplates = {
  'accordion': {
    title: 'Accordion Component',
    description: 'A collapsible content component for organizing information in expandable sections.',
    basicUsage: `<Accordion>
  <Accordion.Item>
    <Accordion.Trigger>Section 1</Accordion.Trigger>
    <Accordion.Content>Content for section 1</Accordion.Content>
  </Accordion.Item>
  <Accordion.Item>
    <Accordion.Trigger>Section 2</Accordion.Trigger>
    <Accordion.Content>Content for section 2</Accordion.Content>
  </Accordion.Item>
</Accordion>`
  },
  'alert': {
    title: 'Alert Component',
    description: 'A component for displaying important messages and notifications.',
    basicUsage: `<Alert variant="info">
  <Alert.Title>Information</Alert.Title>
  <Alert.Description>This is an informational alert.</Alert.Description>
</Alert>`
  },
  'avatar': {
    title: 'Avatar Component',
    description: 'A component for displaying user profile pictures or initials.',
    basicUsage: `<Avatar src="/user.jpg" alt="User" size="md" />`
  },
  'badge': {
    title: 'Badge Component',
    description: 'A small component for displaying status, counts, or labels.',
    basicUsage: `<Badge variant="primary">New</Badge>`
  },
  'breadcrumb': {
    title: 'Breadcrumb Component',
    description: 'A navigation component showing the current page location.',
    basicUsage: `<Breadcrumb>
  <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/products">Products</Breadcrumb.Item>
  <Breadcrumb.Item>Current Page</Breadcrumb.Item>
</Breadcrumb>`
  },
  'calendar': {
    title: 'Calendar Component',
    description: 'A date picker component for selecting dates.',
    basicUsage: `<Calendar 
  selected={selectedDate}
  onSelect={setSelectedDate}
  mode="single"
/>`
  },
  'carousel': {
    title: 'Carousel Component',
    description: 'A component for displaying content in a sliding carousel.',
    basicUsage: `<Carousel>
  <Carousel.Item>Slide 1</Carousel.Item>
  <Carousel.Item>Slide 2</Carousel.Item>
  <Carousel.Item>Slide 3</Carousel.Item>
</Carousel>`
  },
  'chat': {
    title: 'Chat Component',
    description: 'A component for displaying chat messages and conversations.',
    basicUsage: `<Chat>
  <Chat.Message sender="user">Hello!</Chat.Message>
  <Chat.Message sender="bot">Hi there!</Chat.Message>
</Chat>`
  },
  'checkbox': {
    title: 'Checkbox Component',
    description: 'A checkbox input component for selecting multiple options.',
    basicUsage: `<Checkbox 
  checked={isChecked}
  onCheckedChange={setIsChecked}
  label="Accept terms and conditions"
/>`
  },
  'commandpalette': {
    title: 'Command Palette Component',
    description: 'A searchable command palette for quick actions.',
    basicUsage: `<CommandPalette 
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  commands={commands}
/>`
  },
  'dateinput': {
    title: 'Date Input Component',
    description: 'A specialized input component for date selection.',
    basicUsage: `<DateInput 
  value={date}
  onChange={setDate}
  placeholder="Select date"
/>`
  },
  'dropdown': {
    title: 'Dropdown Component',
    description: 'A dropdown menu component for displaying options.',
    basicUsage: `<Dropdown>
  <Dropdown.Trigger>Open Menu</Dropdown.Trigger>
  <Dropdown.Content>
    <Dropdown.Item>Option 1</Dropdown.Item>
    <Dropdown.Item>Option 2</Dropdown.Item>
  </Dropdown.Content>
</Dropdown>`
  },
  'grid': {
    title: 'Grid Component',
    description: 'A flexible grid layout component.',
    basicUsage: `<Grid columns={3} gap="1rem">
  <Grid.Item>Item 1</Grid.Item>
  <Grid.Item>Item 2</Grid.Item>
  <Grid.Item>Item 3</Grid.Item>
</Grid>`
  },
  'lists': {
    title: 'Lists Component',
    description: 'A component for displaying ordered and unordered lists.',
    basicUsage: `<List>
  <List.Item>First item</List.Item>
  <List.Item>Second item</List.Item>
  <List.Item>Third item</List.Item>
</List>`
  },
  'otpinput': {
    title: 'OTP Input Component',
    description: 'A component for entering one-time passwords or verification codes.',
    basicUsage: `<OTPInput 
  length={6}
  value={otp}
  onChange={setOtp}
/>`
  },
  'pagination': {
    title: 'Pagination Component',
    description: 'A component for navigating through paginated content.',
    basicUsage: `<Pagination 
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
/>`
  },
  'paymentplan': {
    title: 'Payment Plan Component',
    description: 'A component for displaying pricing and payment plans.',
    basicUsage: `<PaymentPlan 
  title="Basic Plan"
  price="$9.99"
  features={['Feature 1', 'Feature 2']}
  onSelect={() => {}}
/>`
  },
  'progressbar': {
    title: 'Progress Bar Component',
    description: 'A component for displaying progress or loading states.',
    basicUsage: `<ProgressBar 
  value={progress}
  max={100}
  label="Loading..."
/>`
  },
  'radio': {
    title: 'Radio Component',
    description: 'A radio button component for single selection.',
    basicUsage: `<Radio 
  value="option1"
  checked={selectedOption === 'option1'}
  onChange={() => setSelectedOption('option1')}
  label="Option 1"
/>`
  },
  'range': {
    title: 'Range Component',
    description: 'A slider component for selecting values within a range.',
    basicUsage: `<Range 
  min={0}
  max={100}
  value={value}
  onChange={setValue}
/>`
  },
  'searchinput': {
    title: 'Search Input Component',
    description: 'A specialized input component with search functionality.',
    basicUsage: `<SearchInput 
  placeholder="Search..."
  value={searchTerm}
  onChange={setSearchTerm}
  onSearch={handleSearch}
/>`
  },
  'separator': {
    title: 'Separator Component',
    description: 'A visual separator component for dividing content.',
    basicUsage: `<Separator orientation="horizontal" />`
  },
  'sidebar': {
    title: 'Sidebar Component',
    description: 'A collapsible sidebar navigation component.',
    basicUsage: `<Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <Sidebar.Content>Sidebar content</Sidebar.Content>
</Sidebar>`
  },
  'switch': {
    title: 'Switch Component',
    description: 'A toggle switch component for boolean values.',
    basicUsage: `<Switch 
  checked={isEnabled}
  onCheckedChange={setIsEnabled}
  label="Enable notifications"
/>`
  },
  'table': {
    title: 'Table Component',
    description: 'A data table component for displaying structured data.',
    basicUsage: `<Table>
  <Table.Header>
    <Table.Row>
      <Table.Head>Name</Table.Head>
      <Table.Head>Email</Table.Head>
    </Table.Row>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Cell>John Doe</Table.Cell>
      <Table.Cell>john@example.com</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>`
  },
  'tabs': {
    title: 'Tabs Component',
    description: 'A tabbed interface component for organizing content.',
    basicUsage: `<Tabs defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">Content 1</Tabs.Content>
  <Tabs.Content value="tab2">Content 2</Tabs.Content>
</Tabs>`
  },
  'text': {
    title: 'Text Component',
    description: 'A styled text component with various typography options.',
    basicUsage: `<Text variant="body" size="md">This is some text content.</Text>`
  },
  'textarea': {
    title: 'Textarea Component',
    description: 'A multi-line text input component.',
    basicUsage: `<Textarea 
  placeholder="Enter your message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  rows={4}
/>`
  },
  'themeswitch': {
    title: 'Theme Switch Component',
    description: 'A component for switching between light and dark themes.',
    basicUsage: `<ThemeSwitch 
  theme={theme}
  onThemeChange={setTheme}
/>`
  },
  'title': {
    title: 'Title Component',
    description: 'A styled heading component with semantic HTML.',
    basicUsage: `<Title level={1}>Main Title</Title>`
  },
  'toast': {
    title: 'Toast Component',
    description: 'A notification component for displaying temporary messages.',
    basicUsage: `<Toast 
  title="Success"
  description="Operation completed successfully"
  variant="success"
/>`
  },
  'togglegroup': {
    title: 'Toggle Group Component',
    description: 'A group of toggle buttons for multiple selection.',
    basicUsage: `<ToggleGroup 
  type="multiple"
  value={selectedItems}
  onValueChange={setSelectedItems}
>
  <ToggleGroup.Item value="item1">Item 1</ToggleGroup.Item>
  <ToggleGroup.Item value="item2">Item 2</ToggleGroup.Item>
</ToggleGroup>`
  },
  'tooltip': {
    title: 'Tooltip Component',
    description: 'A component for displaying contextual information on hover.',
    basicUsage: `<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>`
  },
  'barchart': {
    title: 'Bar Chart Component',
    description: 'A component for displaying data in bar chart format.',
    basicUsage: `<BarChart 
  data={chartData}
  width={400}
  height={300}
/>`
  },
  'linechart': {
    title: 'Line Chart Component',
    description: 'A component for displaying data in line chart format.',
    basicUsage: `<LineChart 
  data={chartData}
  width={400}
  height={300}
/>`
  }
};

function generateComponentDoc(componentName) {
  const template = componentTemplates[componentName];
  if (!template) {
    console.log(`No template found for ${componentName}`);
    return;
  }

  const docContent = `# ${template.title}

${template.description}

## Basic Usage

\`\`\`tsx
import { ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} } from '@loom/${componentName}';

function MyComponent() {
  return (
    ${template.basicUsage}
  );
}
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`className\` | \`string\` | - | Additional CSS classes |
| \`children\` | \`React.ReactNode\` | - | Component content |

## Examples

### Basic Usage

\`\`\`tsx
${template.basicUsage}
\`\`\`

## Live Examples

### React Example
[View Live React Example](https://loom-css-react.vercel.app/components/${componentName})

### Vue Example
[View Live Vue Example](https://loom-css-vue.netlify.app/components/${componentName})

## Accessibility

The ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} component includes proper accessibility features:

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- Focus management

## Styling

The ${componentName.charAt(0).toUpperCase() + componentName.slice(1)} component uses CSS custom properties for theming:

\`\`\`css
:root {
  --loom-${componentName}-background: #ffffff;
  --loom-${componentName}-border-color: #e5e7eb;
  --loom-${componentName}-border-radius: 6px;
  --loom-${componentName}-padding: 0.5rem;
}
\`\`\`
`;

  const docsDir = path.join(__dirname, '..', 'docs', 'components');
  const filePath = path.join(docsDir, `${componentName}.md`);

  fs.writeFileSync(filePath, docContent);
  console.log(`Generated documentation for ${componentName}`);
}

// Generate docs for all components
components.forEach(component => {
  generateComponentDoc(component);
});

console.log('All component documentation generated!');
