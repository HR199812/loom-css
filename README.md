# Loom Design System

A modern, open-source design system inspired by Tailwind CSS and shadcn/ui. Loom provides design tokens, React components, and utilities for building beautiful, consistent UIs across your projects.

---

## Features
- **Design Tokens:** Centralized color, spacing, and typography tokens.
- **React Components:** 25+ accessible, customizable UI components including Button, Input, Alert, Calendar, Card, Modal, PaymentPlan, Chat, BarChart, and more.
- **Utility Primitives:** (Planned) Utility CSS classes for rapid prototyping.
- **TypeScript Support:** Fully typed for safety and autocompletion.
- **Monorepo:** All packages managed together for easy contribution and updates.
- **Font Integration:** Seamless font family integration with your app.
- **Responsive Design:** All components work perfectly on mobile, tablet, and desktop.
- **Accessibility:** Built with ARIA support and keyboard navigation.
- **Payment Integration:** Built-in payment plan components with card processing.
- **Data Visualization:** Chart components for analytics and reporting.
- **Real-time Communication:** Chat components for messaging and support.

---

## Packages
- [`@loom/core`](./packages/core): Design tokens (colors, spacing, typography) and utilities.
- [`@loom/react`](./packages/react): Headless and styled React UI components.
- [`@loom/ui`](./packages/ui): (Planned) Utility CSS classes and primitives.

---

## Installation

### 1. Install Dependencies
```sh
npm install @loom/react @loom/core
```

### 2. Setup Font Integration (Optional)
Add to your app's `globals.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');

:root {
  --loom-font-family: 'Rubik', Inter, Segoe UI, Arial, sans-serif;
}

html, body {
  font-family: var(--loom-font-family);
}
```

### 3. Create Loom Config (Optional)
Create `loom.config.js` in your project root:
```js
module.exports = {
  fontFamily: 'Rubik, Inter, Segoe UI, Arial, sans-serif',
  // Add more config options here
};
```

---

## Usage

### Basic Setup
```tsx
import { 
  Button, Input, Alert, Calendar, Card, Modal, 
  Grid, Text, Title, Range, Table, Pagination,
  PaymentPlan, Chat, BarChart
} from '@loom/react';

function App() {
  return (
    <div>
      <Title level="h1">Welcome to Loom</Title>
      <Text variant="lead">Build beautiful UIs with our design system</Text>
      
      <Grid columns={3} gap="md">
        <Card title="Feature 1" variant="elevated">
          <Text>Amazing component library</Text>
        </Card>
        <Card title="Feature 2" variant="elevated">
          <Text>TypeScript support</Text>
        </Card>
        <Card title="Feature 3" variant="elevated">
          <Text>Responsive design</Text>
        </Card>
      </Grid>
      
      <Button variant="primary" size="lg">Get Started</Button>
    </div>
  );
}
```

### Advanced Usage with Props
```tsx
import { 
  Input, Alert, Calendar, Modal, Card, Grid, 
  Range, Table, Pagination, SearchInput, Dropdown,
  PaymentPlan, Chat, BarChart
} from '@loom/react';

function AdvancedExample() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const tableData = [
    { name: 'John Doe', age: 25, email: 'john@example.com' },
    { name: 'Jane Smith', age: 30, email: 'jane@example.com' }
  ];

  const tableColumns = [
    { key: 'name', title: 'Name', sortable: true },
    { key: 'age', title: 'Age', align: 'center' },
    { key: 'email', title: 'Email' }
  ];

  return (
    <div>
      <Grid columns={2} gap="lg">
        {/* Input with validation */}
        <Card title="Form Input" variant="outlined">
          <Input
            title="Email Address"
            placeholder="Enter your email"
            regex={/^[^@\s]+@[^@\s]+\.[^@\s]+$/}
            type="danger"
            errorText="Please enter a valid email."
            onChange={(val, isValid) => console.log(val, isValid)}
          />
        </Card>

        {/* Range Slider */}
        <Card title="Volume Control" variant="outlined">
          <Range
            title="Volume"
            description="Adjust the volume level"
            min={0}
            max={100}
            onChange={(val) => console.log(val)}
          />
        </Card>
      </Grid>

      {/* Alert with custom styling */}
      <Alert
        title="Success!"
        message="Your changes have been saved successfully."
        type="success"
        closable
        onClose={() => console.log('Alert closed')}
      />

      {/* Table with Pagination */}
      <Card title="User Data" variant="elevated">
        <Table
          columns={tableColumns}
          data={tableData}
          striped
          hoverable
        />
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={setCurrentPage}
          size="md"
        />
      </Card>

      {/* Payment Plans */}
      <Grid columns={3} gap="lg">
        <PaymentPlan
          title="Basic Plan"
          description="Perfect for getting started"
          price={9.99}
          features={["Up to 5 projects", "Basic support", "1GB storage"]}
          onUpgrade={() => console.log("Upgraded to Basic")}
        />
        <PaymentPlan
          title="Pro Plan"
          description="Most popular choice"
          price={19.99}
          features={["Unlimited projects", "Priority support", "10GB storage"]}
          popular
          onUpgrade={() => console.log("Upgraded to Pro")}
        />
        <PaymentPlan
          title="Enterprise"
          description="For large teams"
          price={49.99}
          features={["Everything in Pro", "Team collaboration", "100GB storage"]}
          onUpgrade={() => console.log("Upgraded to Enterprise")}
        />
      </Grid>

      {/* Chat Component */}
      <Chat
        messages={[
          { id: "1", text: "Hello! How can I help?", sender: "bot", timestamp: new Date() },
          { id: "2", text: "I need support", sender: "user", timestamp: new Date() }
        ]}
        onSendMessage={(msg) => console.log("Sent:", msg)}
        placeholder="Type your message..."
      />

      {/* Bar Chart */}
      <BarChart
        title="Quarterly Performance"
        data={[
          { label: "Q1", value: 85, description: "Strong start" },
          { label: "Q2", value: 92, description: "Great growth" },
          { label: "Q3", value: 78, description: "Steady progress" },
          { label: "Q4", value: 95, description: "Year-end success" }
        ]}
        showValues={true}
        showDescriptions={true}
        orientation="vertical"
      />

      {/* Modal */}
      <Button onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Settings"
        size="md"
        backdropBlur
      >
        <p>Modal content goes here...</p>
      </Modal>

      {/* Payment Plans */}
      <Grid columns={3} gap="lg">
        {paymentPlans.map((plan, index) => (
          <PaymentPlan
            key={index}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            popular={plan.popular}
            onUpgrade={() => console.log(`Upgrading to ${plan.title}`)}
          />
        ))}
      </Grid>

      {/* Chat Interface */}
      <Chat
        messages={chatMessages}
        onSendMessage={handleSendMessage}
        showAvatars={true}
        showTimestamps={true}
      />

      {/* Bar Chart */}
      <BarChart
        title="Performance Metrics"
        data={chartData}
        showValues={true}
        showDescriptions={true}
        orientation="vertical"
      />
    </div>
  );
}
```

---

## Components

### Core Components

#### Button
Enhanced button with variants, sizes, loading states, and icons.
```tsx
<Button variant="primary" size="lg" loading icon="🚀">
  Click me
</Button>
<Button variant="outline" size="sm">Secondary</Button>
<Button variant="danger" fullWidth>Delete</Button>
```

#### Input
Advanced input with validation, styling, and error handling.
```tsx
<Input
  title="Email"
  placeholder="Enter your email"
  regex={/^[^@\s]+@[^@\s]+\.[^@\s]+$/}
  type="info"
  errorText="Invalid email"
  width="300px"
  onChange={(val, isValid) => console.log(val, isValid)}
/>
```

#### Text & Title
Typography components for consistent text styling.
```tsx
<Title level="h1" align="center">Main Heading</Title>
<Text variant="lead" weight="medium">Lead paragraph text</Text>
<Text variant="caption" color="#666">Caption text</Text>
```

### Layout Components

#### Grid
Responsive grid system for layouts.
```tsx
<Grid columns={3} gap="lg" responsive>
  <Card>Item 1</Card>
  <Card>Item 2</Card>
  <Card>Item 3</Card>
</Grid>
```

#### Card
Flexible card component with header, content, and footer.
```tsx
<Card title="Card Title" variant="elevated" hoverable>
  <Text>Card content goes here</Text>
</Card>
```

### Data Display

#### Table
Feature-rich table with sorting, pagination, and responsive design.
```tsx
<Table
  columns={[
    { key: 'name', title: 'Name', sortable: true },
    { key: 'age', title: 'Age', align: 'center' }
  ]}
  data={userData}
  striped
  hoverable
/>
```

#### Calendar
Interactive calendar with date selection and current date highlighting.
```tsx
<Calendar
  selectedDate={new Date()}
  onDateSelect={(date) => console.log('Selected:', date)}
  titleSize={20}
  titleWeight={700}
/>
```

### Form Components

#### Range/Slider
Customizable range slider with labels and value display.
```tsx
<Range
  title="Volume"
  description="Adjust the volume level"
  min={0}
  max={100}
  onChange={(val) => console.log(val)}
/>
```

#### DateInput
Date and datetime input with validation.
```tsx
<DateInput
  title="Select Date"
  includeTime={true}
  onChange={(date) => console.log(date)}
/>
```

#### Radio
Radio button groups with multiple layout options.
```tsx
<Radio
  name="choice"
  options={[
    { value: 'a', label: 'Option A' },
    { value: 'b', label: 'Option B' }
  ]}
  direction="horizontal"
  variant="card"
/>
```

#### Dropdown
Select dropdown with search and keyboard navigation.
```tsx
<Dropdown
  options={options}
  onChange={(value, option) => console.log(value, option)}
  variant="filled"
/>
```

#### SearchInput
Search input with dropdown suggestions.
```tsx
<SearchInput
  options={searchOptions}
  onSelect={(option) => console.log(option)}
  loading={isSearching}
/>
```

### Feedback Components

#### Alert
Notification component with different types and close functionality.
```tsx
<Alert
  title="Success!"
  message="Operation completed successfully."
  type="success"
  closable
  onClose={() => console.log('Closed')}
/>
```

#### Modal
Modal dialog with backdrop blur and multiple sizes.
```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Settings"
  size="md"
  backdropBlur
>
  <p>Modal content</p>
</Modal>
```

### Navigation Components

#### Pagination
Complete pagination with customizable display options.
```tsx
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  showFirstLast
  maxVisiblePages={5}
/>
```

#### Accordion
Collapsible content sections with keyboard navigation.
```tsx
<Accordion
  items={[
    { id: '1', title: 'Section 1', content: <p>Content 1</p> },
    { id: '2', title: 'Section 2', content: <p>Content 2</p> }
  ]}
  allowMultiple
  variant="bordered"
/>
```

### Utility Components

#### Lists
Styled lists with customizable spacing and styles.
```tsx
<Lists type="ul" style="disc" spacing="normal">
  <ListItem>Item 1</ListItem>
  <ListItem>Item 2</ListItem>
</Lists>
```

### Business Components

#### PaymentPlan
Professional payment plan cards with features, pricing, and upgrade functionality.
```tsx
<PaymentPlan
  title="Pro Plan"
  price={29}
  period="/month"
  description="Most popular choice"
  features={[
    { name: "Unlimited projects", included: true },
    { name: "Priority support", included: true },
    { name: "Advanced analytics", included: true }
  ]}
  popular={true}
  onUpgrade={() => console.log("Upgrading...")}
  variant="elevated"
/>
```

#### Chat
Real-time chat interface with message history, avatars, and timestamps.
```tsx
<Chat
  messages={chatMessages}
  onSendMessage={handleSendMessage}
  placeholder="Type your message..."
  showAvatars={true}
  showTimestamps={true}
  botName="Support Bot"
  userName="You"
/>
```

#### BarChart
Data visualization component with customizable bars, labels, and descriptions.
```tsx
<BarChart
  title="Quarterly Performance"
  data={[
    { label: "Q1", value: 85, description: "Strong start", color: "#3b82f6" },
    { label: "Q2", value: 92, description: "Continued growth", color: "#10b981" }
  ]}
  showValues={true}
  showDescriptions={true}
  orientation="vertical"
  variant="default"
/>
```


---

## Development

### Running the Project
```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build all packages
npm run build

# Run linting
npm run lint
```

### Project Structure
```
packages/
├── core/           # Design tokens and utilities
├── react/          # React components
└── ui/             # (Planned) CSS utilities

apps/
├── web/            # Next.js demo app
└── docs/           # Documentation site
```

---

## Contributing
We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

- Fork the repo and create your branch from `main`.
- Add/Update tests for new features or bug fixes.
- Ensure code passes lint and type checks.
- Follow the existing code style and patterns.

---

## License
[MIT](./LICENSE) © Loom Contributors

---

## Links
- [GitHub Repository](https://github.com/HR199812/loom-css)
- [NPM Package](https://www.npmjs.com/package/@loom/react)
