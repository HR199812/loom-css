"use client";
import {
  Alert,
  Button,
  Calendar,
  Input,
  Title,
  Range,
  Lists,
  ListItem,
  Table,
  Accordion,
  Dropdown,
  Modal,
  Pagination,
  Radio,
  SearchInput,
  Card,
  Grid,
  Text,
  DateInput,
  PaymentPlan,
  Chat,
  BarChart,
  LineChart,
  Avatar,
  Badge,
  Carousel,
  Breadcrumb,
  Checkbox,
  CommandPalette,
  Tooltip,
  OTPInput,
  ProgressBar,
  Separator,
  ToggleGroup,
  TextArea,
  Sidebar,
  Switch,
  ThemeSwitch,
} from "@loom/react";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedRadio, setSelectedRadio] = useState("a");
  const [selectedDropdown, setSelectedDropdown] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState({
    basic: false,
    withDescription: false,
    indeterminate: false,
  });
  const [otpValue, setOtpValue] = useState("");
  const [toggleGroupValue, setToggleGroupValue] = useState<string[]>(["bold"]);
  const [textAreaValue, setTextAreaValue] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [switchStates, setSwitchStates] = useState({
    notifications: true,
    darkMode: false,
    autoSave: true,
    publicProfile: false,
  });
  const [theme, setTheme] = useState<"light" | "dark" | "system">("light");
  const [chatMessages, setChatMessages] = useState([
    {
      id: "1",
      text: "Hello! How can I help you today?",
      sender: "bot" as const,
      timestamp: new Date(),
    },
    {
      id: "2",
      text: "I need help with the payment plan upgrade",
      sender: "user" as const,
      timestamp: new Date(),
    },
  ]);

  const totalPages = 20;

  // Sample data for components
  const tableData = [
    { name: "John Doe", age: 25, email: "john@example.com" },
    { name: "Jane Smith", age: 30, email: "jane@example.com" },
    { name: "Bob Johnson", age: 35, email: "bob@example.com" },
  ];

  const tableColumns = [
    { key: "name", title: "Name", sortable: true },
    { key: "age", title: "Age", align: "center" as const },
    { key: "email", title: "Email" },
  ];

  const dropdownOptions = [
    { value: "option1", label: "Option 1", icon: "🚀" },
    { value: "option2", label: "Option 2", icon: "⭐" },
    { value: "option3", label: "Option 3", icon: "🎯" },
  ];

  const searchOptions = [
    { value: "search1", label: "Search Result 1" },
    { value: "search2", label: "Search Result 2" },
    { value: "search3", label: "Search Result 3" },
  ];

  const radioOptions = [
    { value: "a", label: "Option A" },
    { value: "b", label: "Option B" },
    { value: "c", label: "Option C" },
  ];

  const accordionItems = [
    {
      id: "1",
      title: "Getting Started",
      content: (
        <div>
          <Text variant="body">
            Learn how to get started with Loom Design System.
          </Text>
          <Button variant="primary" size="sm" style={{ marginTop: "8px" }}>
            Read More
          </Button>
        </div>
      ),
    },
    {
      id: "2",
      title: "Components",
      content: (
        <div>
          <Text variant="body">
            Explore our comprehensive component library.
          </Text>
          <Lists type="ul" style="disc" spacing="normal">
            <ListItem>Buttons</ListItem>
            <ListItem>Inputs</ListItem>
            <ListItem>Cards</ListItem>
            <ListItem>Modals</ListItem>
          </Lists>
        </div>
      ),
    },
    {
      id: "3",
      title: "Customization",
      content: (
        <div>
          <Text variant="body">Customize components to match your brand.</Text>
          <Range
            title="Opacity"
            min={0}
            max={100}
            onChange={(val) => console.log("Opacity:", val)}
          />
        </div>
      ),
    },
  ];

  // Sample data for new components
  const paymentPlans = [
    {
      title: "Basic Plan",
      price: 9,
      period: "/month",
      description: "Perfect for getting started",
      features: [
        { name: "Up to 5 projects", included: true },
        { name: "Basic support", included: true },
        { name: "Standard templates", included: true },
        { name: "Advanced analytics", included: false },
        { name: "Priority support", included: false },
      ],
      popular: false,
    },
    {
      title: "Pro Plan",
      price: 29,
      period: "/month",
      description: "Most popular choice",
      features: [
        { name: "Unlimited projects", included: true },
        { name: "Priority support", included: true },
        { name: "Premium templates", included: true },
        { name: "Advanced analytics", included: true },
        { name: "Custom integrations", included: true },
      ],
      popular: true,
    },
    {
      title: "Enterprise",
      price: 99,
      period: "/month",
      description: "For large teams",
      features: [
        { name: "Everything in Pro", included: true },
        { name: "Dedicated support", included: true },
        { name: "Custom branding", included: true },
        { name: "API access", included: true },
        { name: "SLA guarantee", included: true },
      ],
      popular: false,
    },
  ];

  const chartData = [
    {
      label: "Q1 2024",
      value: 85,
      description: "Strong start to the year",
      color: "#3b82f6",
    },
    {
      label: "Q2 2024",
      value: 92,
      description: "Continued growth",
      color: "#10b981",
    },
    {
      label: "Q3 2024",
      value: 78,
      description: "Seasonal adjustment",
      color: "#f59e0b",
    },
    {
      label: "Q4 2024",
      value: 95,
      description: "Year-end surge",
      color: "#ef4444",
    },
  ];

  const lineChartData = [
    {
      label: "Jan",
      value: 65,
      description: "January performance",
      color: "#3b82f6",
    },
    {
      label: "Feb",
      value: 72,
      description: "February growth",
      color: "#3b82f6",
    },
    {
      label: "Mar",
      value: 68,
      description: "March adjustment",
      color: "#3b82f6",
    },
    {
      label: "Apr",
      value: 85,
      description: "April surge",
      color: "#3b82f6",
    },
    {
      label: "May",
      value: 92,
      description: "May peak",
      color: "#3b82f6",
    },
    {
      label: "Jun",
      value: 88,
      description: "June stability",
      color: "#3b82f6",
    },
  ];

  // Sample data for new components
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "UI Elements", href: "/components/ui" },
    { label: "Current Page" },
  ];

  const carouselItems = [
    {
      id: "1",
      content: (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <Title level="h3">Welcome to Loom Design System</Title>
          <Text variant="body">
            A comprehensive component library for modern React applications.
          </Text>
        </div>
      ),
      title: "Welcome",
      description: "Get started with our design system",
    },
    {
      id: "2",
      content: (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <Title level="h3">Beautiful Components</Title>
          <Text variant="body">
            Pre-built, accessible, and customizable components.
          </Text>
        </div>
      ),
      title: "Components",
      description: "Explore our component library",
    },
    {
      id: "3",
      content: (
        <div style={{ padding: "20px", textAlign: "center" }}>
          <Title level="h3">Easy Integration</Title>
          <Text variant="body">
            Simple to integrate into your existing projects.
          </Text>
        </div>
      ),
      title: "Integration",
      description: "Start building today",
    },
  ];

  const commandItems = [
    {
      id: "1",
      title: "Create New Project",
      description: "Start a new project with Loom Design System",
      icon: "🚀",
      action: () => console.log("Creating new project"),
      group: "Actions",
    },
    {
      id: "2",
      title: "Open Settings",
      description: "Configure your preferences",
      icon: "⚙️",
      action: () => console.log("Opening settings"),
      group: "Actions",
    },
    {
      id: "3",
      title: "View Documentation",
      description: "Browse component documentation",
      icon: "📚",
      action: () => console.log("Opening docs"),
      group: "Help",
    },
    {
      id: "4",
      title: "Contact Support",
      description: "Get help from our support team",
      icon: "💬",
      action: () => console.log("Contacting support"),
      group: "Help",
    },
  ];

  // Sample data for new components
  const toggleGroupItems = [
    { value: "bold", label: "Bold", icon: "B" },
    { value: "italic", label: "Italic", icon: "I" },
    { value: "underline", label: "Underline", icon: "U" },
  ];

  const sidebarItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "🏠",
      href: "/dashboard",
    },
    {
      id: "components",
      label: "Components",
      icon: "🧩",
      children: [
        {
          id: "buttons",
          label: "Buttons",
          icon: "🔘",
          href: "/components/buttons",
        },
        { id: "forms", label: "Forms", icon: "📝", href: "/components/forms" },
        {
          id: "navigation",
          label: "Navigation",
          icon: "🧭",
          href: "/components/navigation",
        },
      ],
    },
    {
      id: "pages",
      label: "Pages",
      icon: "📄",
      children: [
        { id: "home", label: "Home", icon: "🏡", href: "/pages/home" },
        { id: "about", label: "About", icon: "ℹ️", href: "/pages/about" },
        { id: "contact", label: "Contact", icon: "📞", href: "/pages/contact" },
      ],
    },
    {
      id: "settings",
      label: "Settings",
      icon: "⚙️",
      href: "/settings",
      badge: "3",
    },
    {
      id: "help",
      label: "Help & Support",
      icon: "❓",
      href: "/help",
    },
  ];

  const handleSendMessage = (message: string) => {
    const newMessage = {
      id: Date.now().toString(),
      text: message,
      sender: "user" as const,
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        text: "Thanks for your message! I'll get back to you soon.",
        sender: "bot" as const,
        timestamp: new Date(),
      };
      setChatMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <main className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Card Title
          </h3>
          <p className="text-sm text-gray-600">Card content</p>
        </div>
      </div>
      {/* Header Section */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Title level="h1" align="center" color="#333">
          Loom Design System
        </Title>
        <Text variant="lead" align="center" style={{ marginTop: "16px" }}>
          A modern, comprehensive component library for React applications
        </Text>
      </div>

      {/* Grid Layout for Components */}
      <Grid columns={2} gap="lg" style={{ marginBottom: "40px" }}>
        {/* Card Component */}
        <Card title="Card Component" variant="elevated" hoverable>
          <Text variant="body">
            Beautiful cards with multiple variants and hover effects.
          </Text>
          <Button variant="primary" size="sm" style={{ marginTop: "12px" }}>
            Learn More
          </Button>
        </Card>

        {/* Button Variants */}
        <Card title="Button Variants" variant="outlined">
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <Button variant="primary" size="sm">
              Primary
            </Button>
            <Button variant="secondary" size="sm">
              Secondary
            </Button>
            <Button variant="outline" size="sm">
              Outline
            </Button>
            <Button variant="danger" size="sm">
              Danger
            </Button>
          </div>
        </Card>
      </Grid>

      {/* Form Components Section */}
      <Card
        title="Form Components"
        variant="elevated"
        style={{ marginBottom: "40px" }}
      >
        <Grid columns={2} gap="md">
          {/* Input Component */}
          <div>
            <Input
              title="Email Address"
              placeholder="Enter your email"
              regex={/^[^@\s]+@[^@\s]+\.[^@\s]+$/}
              type="info"
              errorText="Please enter a valid email."
              onChange={(val, isValid) => console.log(val, isValid)}
            />
          </div>

          {/* DateInput Component */}

          <div>
            <DateInput
              title="Select Date"
              includeTime={false}
              onChange={(date) => setSelectedDate(date || new Date())}
            />
          </div>

          {/* Range Component */}
          <div>
            <Range
              title="Volume Control"
              description="Adjust the volume level"
              min={0}
              max={100}
              onChange={(val) => console.log("Volume:", val)}
            />
          </div>

          {/* Radio Component */}
          <div>
            <Radio
              name="choice"
              options={radioOptions}
              direction="vertical"
              variant="default"
              value={selectedRadio}
              onChange={setSelectedRadio}
            />
          </div>
        </Grid>
      </Card>

      {/* Data Display Section */}
      <Card
        title="Data Display"
        variant="elevated"
        style={{ marginBottom: "40px" }}
      >
        {/* Table with Pagination */}
        <Table columns={tableColumns} data={tableData} striped hoverable />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          showFirstLast
          maxVisiblePages={5}
          size="md"
        />
      </Card>

      {/* Interactive Components */}
      <Grid columns={2} gap="lg" style={{ marginBottom: "40px" }}>
        {/* Calendar */}
        <Card title="Calendar" variant="outlined">
          <Calendar
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
            titleSize={18}
            titleWeight={600}
          />
        </Card>

        {/* Dropdown and Search */}
        <Card title="Selection Components" variant="outlined">
          <div style={{ marginBottom: "16px" }}>
            <Text variant="small" weight="medium">
              Dropdown:
            </Text>
            <Dropdown
              options={dropdownOptions}
              onChange={(value, option) => {
                setSelectedDropdown(value);
                console.log("Selected:", value, option);
              }}
              variant="filled"
              placeholder="Choose an option"
            />
          </div>

          <div>
            <Text variant="small" weight="medium">
              Search Input:
            </Text>
            <SearchInput
              options={searchOptions}
              onSelect={(option) => {
                setSearchValue(option.value);
                console.log("Selected:", option);
              }}
              loading={isSearching}
              placeholder="Search for something..."
            />
          </div>
        </Card>
      </Grid>

      {/* Feedback Components */}
      <Grid columns={2} gap="lg" style={{ marginBottom: "40px" }}>
        {/* Alerts */}
        <Card title="Alert Messages" variant="outlined">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <Alert
              title="Success!"
              message="Your changes have been saved successfully."
              type="success"
              closable
              onClose={() => console.log("Success alert closed")}
            />
            <Alert
              title="Warning"
              message="Please review your input before proceeding."
              type="warning"
              closable
            />
            <Alert
              title="Error"
              message="Something went wrong. Please try again."
              type="danger"
              closable
            />
          </div>
        </Card>

        {/* Modal Trigger */}
        <Card title="Modal Component" variant="outlined">
          <Text variant="body" style={{ marginBottom: "16px" }}>
            Click the button below to open a modal dialog.
          </Text>
          <Button
            variant="primary"
            onClick={() => setIsModalOpen(true)}
            fullWidth
          >
            Open Modal
          </Button>
        </Card>
      </Grid>

      {/* Accordion Component */}
      <Card
        title="Accordion Component"
        variant="elevated"
        style={{ marginBottom: "40px" }}
      >
        <Accordion items={accordionItems} allowMultiple variant="bordered" />
      </Card>

      {/* Lists Component */}
      <Card
        title="Lists Component"
        variant="outlined"
        style={{ marginBottom: "40px" }}
      >
        <Grid columns={2} gap="md">
          <div>
            <Text variant="small" weight="medium">
              Unordered List:
            </Text>
            <Lists type="ul" style="disc" spacing="normal">
              <ListItem>First item</ListItem>
              <ListItem>Second item</ListItem>
              <ListItem>Third item</ListItem>
            </Lists>
          </div>
          <div>
            <Text variant="small" weight="medium">
              Ordered List:
            </Text>
            <Lists type="ol" style="decimal" spacing="normal">
              <ListItem>Step one</ListItem>
              <ListItem>Step two</ListItem>
              <ListItem>Step three</ListItem>
            </Lists>
          </div>
        </Grid>
      </Card>

      {/* Typography Showcase */}
      <Card
        title="Typography"
        variant="elevated"
        style={{ marginBottom: "40px" }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Title level="h1">Heading 1</Title>
          <Title level="h2">Heading 2</Title>
          <Title level="h3">Heading 3</Title>
          <Text variant="lead">Lead paragraph text for important content</Text>
          <Text variant="body">Regular body text for general content</Text>
          <Text variant="small">
            Small text for captions and secondary information
          </Text>
          <Text variant="caption">Caption text for labels and metadata</Text>
        </div>
      </Card>

      {/* Chat Component */}
      <Grid columns={2} gap="lg" style={{ marginBottom: "40px" }}>
        <Card title="Chat Interface" variant="outlined">
          <Chat
            messages={chatMessages}
            onSendMessage={handleSendMessage}
            placeholder="Type your message..."
            showAvatars={true}
            showTimestamps={true}
            variant="default"
            botName="Support Bot"
            userName="You"
            botAvatar="🤖"
            userAvatar="👤"
          />
        </Card>

        {/* Bar Chart Component */}
        <Card title="Performance Analytics" variant="outlined">
          <BarChart
            title="Quarterly Performance"
            data={chartData}
            showValues={true}
            showDescriptions={true}
            orientation="vertical"
            variant="default"
            size="md"
          />
        </Card>
      </Grid>

      {/* Chart Variants */}
      <Card
        title="Chart Variants"
        variant="elevated"
        style={{ marginBottom: "40px" }}
      >
        <Grid columns={2} gap="lg">
          <div>
            <Text
              variant="small"
              weight="medium"
              style={{ marginBottom: "12px" }}
            >
              Horizontal Bar Chart:
            </Text>
            <BarChart
              title="Monthly Sales"
              data={chartData}
              showValues={true}
              showDescriptions={false}
              orientation="horizontal"
              variant="minimal"
              size="sm"
            />
          </div>
          <div>
            <Text
              variant="small"
              weight="medium"
              style={{ marginBottom: "12px" }}
            >
              Gradient Bar Chart:
            </Text>
            <BarChart
              title="User Growth"
              data={chartData}
              showValues={true}
              showDescriptions={true}
              orientation="vertical"
              variant="gradient"
              size="sm"
            />
          </div>
        </Grid>
      </Card>

      {/* Line Chart Section */}
      <Card
        title="Line Chart Analytics"
        variant="elevated"
        style={{ marginBottom: "40px" }}
      >
        <Grid columns={2} gap="lg">
          <div>
            <Text
              variant="small"
              weight="medium"
              style={{ marginBottom: "12px" }}
            >
              Monthly Trend Line:
            </Text>
            <LineChart
              title="Monthly Performance Trend"
              data={lineChartData}
              showValues={true}
              showDescriptions={true}
              variant="default"
              size="md"
              showGrid={true}
              showDots={true}
            />
          </div>
          <div>
            <Text
              variant="small"
              weight="medium"
              style={{ marginBottom: "12px" }}
            >
              Minimal Line Chart:
            </Text>
            <LineChart
              title="Growth Trajectory"
              data={lineChartData}
              showValues={false}
              showDescriptions={false}
              variant="minimal"
              size="sm"
              showGrid={false}
              showDots={true}
              customColor="#10b981"
            />
          </div>
        </Grid>
      </Card>

      {/* Payment Plans Section */}
      <Card
        title="Payment Plans"
        variant="elevated"
        style={{ marginBottom: "40px" }}
      >
        <Grid columns={3} gap="lg">
          {paymentPlans.map((plan, index) => (
            <PaymentPlan
              key={index}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              features={plan.features}
              popular={plan.popular}
              onUpgrade={() => console.log(`Upgrading to ${plan.title}`)}
              variant="elevated"
            />
          ))}
        </Grid>
      </Card>

      {/* New Components Section */}
      <Card
        title="Avatar & Badge Components"
        variant="elevated"
        style={{ marginBottom: "40px" }}
      >
        <Grid columns={2} gap="lg">
          <div>
            <Text
              variant="small"
              weight="medium"
              style={{ marginBottom: "12px" }}
            >
              Avatar Variants:
            </Text>
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Avatar name="John Doe" size="sm" />
              <Avatar name="Jane Smith" size="md" status="online" />
              <Avatar name="Bob Johnson" size="lg" status="away" />
              <Avatar name="Alice Brown" size="xl" status="busy" />
              <Avatar icon="👤" size="md" />
              <Avatar
                src="https://via.placeholder.com/40"
                alt="User"
                size="md"
              />
            </div>
          </div>
          <div>
            <Text
              variant="small"
              weight="medium"
              style={{ marginBottom: "12px" }}
            >
              Badge Variants:
            </Text>
            <div
              style={{
                display: "flex",
                gap: "8px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Badge variant="default">Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="danger">Danger</Badge>
              <Badge variant="info">Info</Badge>
              <Badge variant="primary" dot>
                {""}
              </Badge>
              <Badge variant="danger" max={99}>
                150
              </Badge>
            </div>
          </div>
        </Grid>
      </Card>

      {/* Carousel Section */}
      <Card
        title="Carousel Component"
        variant="elevated"
        style={{ marginBottom: "40px" }}
      >
        <Carousel
          items={carouselItems}
          autoPlay={true}
          autoPlayInterval={4000}
          showArrows={true}
          showDots={true}
          variant="card"
          size="md"
        />
      </Card>

      {/* Breadcrumb & Checkbox Section */}
      <Grid columns={2} gap="lg" style={{ marginBottom: "40px" }}>
        <Card title="Breadcrumb Navigation" variant="outlined">
          <Breadcrumb
            items={breadcrumbItems}
            variant="default"
            size="md"
            onItemClick={(item, index) =>
              console.log("Clicked:", item.label, index)
            }
          />
        </Card>

        <Card title="Checkbox Components" variant="outlined">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <Checkbox
              label="Basic checkbox"
              checked={checkboxStates.basic}
              onChange={(checked) =>
                setCheckboxStates((prev) => ({ ...prev, basic: checked }))
              }
            />
            <Checkbox
              label="With description"
              description="This checkbox has additional description text"
              checked={checkboxStates.withDescription}
              onChange={(checked) =>
                setCheckboxStates((prev) => ({
                  ...prev,
                  withDescription: checked,
                }))
              }
            />
            <Checkbox
              label="Indeterminate state"
              indeterminate={true}
              variant="primary"
            />
            <Checkbox
              label="Disabled checkbox"
              disabled={true}
              checked={true}
            />
          </div>
        </Card>
      </Grid>

      {/* OTP Input & Progress Bar Section */}
      <Grid columns={2} gap="lg" style={{ marginBottom: "40px" }}>
        <Card title="OTP Input" variant="outlined">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <Text variant="small" weight="medium">
              6-digit verification code:
            </Text>
            <OTPInput
              length={6}
              value={otpValue}
              onChange={setOtpValue}
              onComplete={(value) => console.log("OTP completed:", value)}
              variant="outlined"
              size="md"
              type="number"
            />
            <Text variant="small" color="#6b7280">
              Enter the 6-digit code sent to your device
            </Text>
          </div>
        </Card>

        <Card title="Progress Bars" variant="outlined">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <ProgressBar
              value={75}
              max={100}
              label="Project Progress"
              showPercentage={true}
              variant="primary"
              size="md"
            />
            <ProgressBar
              value={45}
              max={100}
              label="Upload Status"
              showPercentage={true}
              variant="success"
              size="sm"
              animated={true}
            />
            <ProgressBar
              value={90}
              max={100}
              label="Storage Usage"
              showPercentage={true}
              variant="warning"
              size="lg"
              striped={true}
            />
          </div>
        </Card>
      </Grid>

      {/* Tooltip & Command Palette Section */}
      <Grid columns={2} gap="lg" style={{ marginBottom: "40px" }}>
        <Card title="Tooltip Examples" variant="outlined">
          <div
            style={{
              display: "flex",
              gap: "16px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Tooltip content="This is a tooltip on top" placement="top">
              <Button variant="outline">Hover me (top)</Button>
            </Tooltip>
            <Tooltip
              content="This is a tooltip on bottom"
              placement="bottom"
              variant="dark"
            >
              <Button variant="outline">Hover me (bottom)</Button>
            </Tooltip>
            <Tooltip
              content="This is a tooltip on left"
              placement="left"
              variant="light"
            >
              <Button variant="outline">Hover me (left)</Button>
            </Tooltip>
            <Tooltip content="This is a tooltip on right" placement="right">
              <Button variant="outline">Hover me (right)</Button>
            </Tooltip>
          </div>
        </Card>

        <Card title="Command Palette" variant="outlined">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <Text variant="body" style={{ marginBottom: "8px" }}>
              Press the button below to open the command palette:
            </Text>
            <Button
              variant="primary"
              onClick={() => setIsCommandPaletteOpen(true)}
              fullWidth
            >
              Open Command Palette (⌘K)
            </Button>
            <Text variant="small" color="#6b7280">
              Try searching for "create", "settings", or "help"
            </Text>
          </div>
        </Card>
      </Grid>

      {/* Separator & Toggle Group Section */}
      <Grid columns={2} gap="lg" style={{ marginBottom: "40px" }}>
        <Card title="Separator Examples" variant="outlined">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div>
              <Text
                variant="small"
                weight="medium"
                style={{ marginBottom: "8px" }}
              >
                Horizontal Separators:
              </Text>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <Separator variant="default" />
                <Separator variant="thick" />
                <Separator variant="dashed" />
                <Separator variant="dotted" />
              </div>
            </div>
            <div>
              <Text
                variant="small"
                weight="medium"
                style={{ marginBottom: "8px" }}
              >
                Vertical Separators:
              </Text>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  height: "40px",
                }}
              >
                <Text variant="small">Left</Text>
                <Separator orientation="vertical" variant="default" />
                <Text variant="small">Middle</Text>
                <Separator orientation="vertical" variant="thick" />
                <Text variant="small">Right</Text>
              </div>
            </div>
          </div>
        </Card>

        <Card title="Toggle Group (Text Formatting)" variant="outlined">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            <div>
              <Text
                variant="small"
                weight="medium"
                style={{ marginBottom: "8px" }}
              >
                Text Formatting:
              </Text>
              <ToggleGroup
                items={toggleGroupItems}
                value={toggleGroupValue}
                onChange={setToggleGroupValue}
                type="multiple"
                variant="default"
                size="md"
              />
            </div>
            <div>
              <Text
                variant="small"
                weight="medium"
                style={{ marginBottom: "8px" }}
              >
                Single Selection:
              </Text>
              <ToggleGroup
                items={[
                  { value: "left", label: "Left", icon: "⬅️" },
                  { value: "center", label: "Center", icon: "↔️" },
                  { value: "right", label: "Right", icon: "➡️" },
                ]}
                type="single"
                variant="outlined"
                size="sm"
              />
            </div>
            <div>
              <Text
                variant="small"
                weight="medium"
                style={{ marginBottom: "8px" }}
              >
                Filled Variant:
              </Text>
              <ToggleGroup
                items={[
                  { value: "grid", label: "Grid", icon: "⊞" },
                  { value: "list", label: "List", icon: "☰" },
                ]}
                type="single"
                variant="filled"
                size="lg"
              />
            </div>
          </div>
        </Card>
      </Grid>

      {/* TextArea Section */}
      <Card
        title="TextArea Component"
        variant="elevated"
        style={{ marginBottom: "40px" }}
      >
        <Grid columns={2} gap="lg">
          <div>
            <Text
              variant="small"
              weight="medium"
              style={{ marginBottom: "12px" }}
            >
              Basic TextArea:
            </Text>
            <TextArea
              title="Comments"
              placeholder="Enter your comments here..."
              value={textAreaValue}
              onChange={setTextAreaValue}
              rows={4}
              variant="default"
              size="md"
            />
          </div>
          <div>
            <Text
              variant="small"
              weight="medium"
              style={{ marginBottom: "12px" }}
            >
              Advanced TextArea:
            </Text>
            <TextArea
              title="Description"
              description="Provide a detailed description of your project"
              placeholder="Describe your project..."
              rows={6}
              variant="outlined"
              size="lg"
              maxLength={500}
              resize="vertical"
              required
            />
          </div>
        </Grid>
      </Card>

      {/* Switch & Theme Switch Section */}
      <Grid columns={2} gap="lg" style={{ marginBottom: "40px" }}>
        <Card title="Switch Components" variant="outlined">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <Text
                variant="small"
                weight="medium"
                style={{ marginBottom: "12px" }}
              >
                Basic Switches:
              </Text>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Switch
                  label="Enable Notifications"
                  description="Receive email notifications for important updates"
                  checked={switchStates.notifications}
                  onChange={(checked) =>
                    setSwitchStates((prev) => ({
                      ...prev,
                      notifications: checked,
                    }))
                  }
                  variant="default"
                  size="md"
                />
                <Switch
                  label="Auto-save Changes"
                  description="Automatically save your work as you type"
                  checked={switchStates.autoSave}
                  onChange={(checked) =>
                    setSwitchStates((prev) => ({ ...prev, autoSave: checked }))
                  }
                  variant="success"
                  size="md"
                />
                <Switch
                  label="Public Profile"
                  description="Make your profile visible to other users"
                  checked={switchStates.publicProfile}
                  onChange={(checked) =>
                    setSwitchStates((prev) => ({
                      ...prev,
                      publicProfile: checked,
                    }))
                  }
                  variant="warning"
                  size="md"
                />
              </div>
            </div>

            <div>
              <Text
                variant="small"
                weight="medium"
                style={{ marginBottom: "12px" }}
              >
                Different Sizes:
              </Text>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <Switch
                  label="Small Switch"
                  checked={switchStates.notifications}
                  onChange={(checked) =>
                    setSwitchStates((prev) => ({
                      ...prev,
                      notifications: checked,
                    }))
                  }
                  size="sm"
                />
                <Switch
                  label="Medium Switch"
                  checked={switchStates.autoSave}
                  onChange={(checked) =>
                    setSwitchStates((prev) => ({ ...prev, autoSave: checked }))
                  }
                  size="md"
                />
                <Switch
                  label="Large Switch"
                  checked={switchStates.publicProfile}
                  onChange={(checked) =>
                    setSwitchStates((prev) => ({
                      ...prev,
                      publicProfile: checked,
                    }))
                  }
                  size="lg"
                />
              </div>
            </div>
          </div>
        </Card>

        <Card title="Theme Switch Component" variant="outlined">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <Text
                variant="small"
                weight="medium"
                style={{ marginBottom: "12px" }}
              >
                Theme Selection:
              </Text>
              <ThemeSwitch
                value={theme}
                onChange={setTheme}
                size="md"
                variant="default"
              />
            </div>

            <div>
              <Text
                variant="small"
                weight="medium"
                style={{ marginBottom: "12px" }}
              >
                Different Variants:
              </Text>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div>
                  <Text variant="small" style={{ marginBottom: "8px" }}>
                    Default Variant:
                  </Text>
                  <ThemeSwitch
                    value={theme}
                    onChange={setTheme}
                    size="sm"
                    variant="default"
                  />
                </div>
                <div>
                  <Text variant="small" style={{ marginBottom: "8px" }}>
                    Outlined Variant:
                  </Text>
                  <ThemeSwitch
                    value={theme}
                    onChange={setTheme}
                    size="sm"
                    variant="outlined"
                  />
                </div>
                <div>
                  <Text variant="small" style={{ marginBottom: "8px" }}>
                    Filled Variant:
                  </Text>
                  <ThemeSwitch
                    value={theme}
                    onChange={setTheme}
                    size="sm"
                    variant="filled"
                  />
                </div>
              </div>
            </div>

            <div>
              <Text
                variant="small"
                weight="medium"
                style={{ marginBottom: "12px" }}
              >
                Current Theme:
              </Text>
              <div
                style={{
                  padding: "12px",
                  background: theme === "dark" ? "#1f2937" : "#f9fafb",
                  borderRadius: "6px",
                  border: `1px solid ${theme === "dark" ? "#374151" : "#e5e7eb"}`,
                }}
              >
                <Text
                  variant="small"
                  color={theme === "dark" ? "#f9fafb" : "#374151"}
                >
                  Selected: {theme.charAt(0).toUpperCase() + theme.slice(1)}{" "}
                  Mode
                </Text>
              </div>
            </div>
          </div>
        </Card>
      </Grid>

      {/* Sidebar Section */}
      <Card
        title="Sidebar Component"
        variant="elevated"
        style={{ marginBottom: "40px" }}
      >
        <div style={{ display: "flex", gap: "20px", height: "400px" }}>
          <Sidebar
            items={sidebarItems}
            isOpen={isSidebarOpen}
            onToggle={setIsSidebarOpen}
            variant="default"
            size="md"
            position="left"
            collapsible={true}
            onItemClick={(item) =>
              console.log("Sidebar item clicked:", item.label)
            }
          />
          <div
            style={{
              flex: 1,
              padding: "20px",
              background: "#f9fafb",
              borderRadius: "8px",
            }}
          >
            <Title level="h3" style={{ marginBottom: "12px" }}>
              Main Content Area
            </Title>
            <Text variant="body" style={{ marginBottom: "16px" }}>
              This demonstrates how the sidebar component works alongside main
              content. The sidebar can be collapsed and expanded, and includes
              nested navigation items.
            </Text>
            <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                Toggle Sidebar
              </Button>
              <Button variant="primary" size="sm">
                Action Button
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Settings Modal"
        size="md"
        backdropBlur
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Text variant="body">
            This is a modal dialog with backdrop blur effect. You can add any
            content here.
          </Text>
          <Input title="Setting Name" placeholder="Enter setting name" />
          <Range
            title="Setting Value"
            min={0}
            max={100}
            onChange={(val) => console.log("Setting value:", val)}
          />
          <div
            style={{ display: "flex", gap: "8px", justifyContent: "flex-end" }}
          >
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Save
            </Button>
          </div>
        </div>
      </Modal>

      {/* Command Palette */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        commands={commandItems}
        placeholder="Type a command or search..."
      />
    </main>
  );
}
