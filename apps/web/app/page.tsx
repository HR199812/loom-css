"use client";
import {
  Button,
  Card,
  Text,
  Title,
  Badge,
  Avatar,
  Grid,
  Separator,
  Input,
  Switch,
  ProgressBar,
  BarChart,
  LineChart,
  Modal,
} from "@loom/react";
import { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Sample data for charts
  const performanceData = [
    { label: "Q1 2024", value: 85, description: "Strong start", color: "#3b82f6" },
    { label: "Q2 2024", value: 92, description: "Continued growth", color: "#10b981" },
    { label: "Q3 2024", value: 78, description: "Seasonal adjustment", color: "#f59e0b" },
    { label: "Q4 2024", value: 95, description: "Year-end surge", color: "#ef4444" },
  ];

  const growthData = [
    { label: "Jan", value: 65, description: "January", color: "#3b82f6" },
    { label: "Feb", value: 72, description: "February", color: "#3b82f6" },
    { label: "Mar", value: 68, description: "March", color: "#3b82f6" },
    { label: "Apr", value: 85, description: "April", color: "#3b82f6" },
    { label: "May", value: 92, description: "May", color: "#3b82f6" },
    { label: "Jun", value: 88, description: "June", color: "#3b82f6" },
  ];

  const components = [
    { name: "Button", description: "Interactive buttons with multiple variants", icon: "🔘" },
    { name: "Input", description: "Form inputs with validation and styling", icon: "📝" },
    { name: "Card", description: "Container components with shadows", icon: "🃏" },
    { name: "Modal", description: "Overlay dialogs and popups", icon: "🪟" },
    { name: "Table", description: "Data tables with sorting and pagination", icon: "📊" },
    { name: "Chart", description: "Beautiful charts and data visualization", icon: "📈" },
    { name: "Avatar", description: "User profile images and initials", icon: "👤" },
    { name: "Badge", description: "Status indicators and notifications", icon: "🏷️" },
    { name: "Alert", description: "Feedback messages and notifications", icon: "⚠️" },
    { name: "Switch", description: "Toggle switches for settings", icon: "🔄" },
    { name: "Progress", description: "Progress bars and loading indicators", icon: "📊" },
    { name: "Tooltip", description: "Contextual help and information", icon: "💡" },
  ];

  const features = [
    {
      title: "Individual Packages",
      description: "Install only the components you need. Each component is a separate npm package for optimal bundle size.",
      icon: "📦",
    },
    {
      title: "TypeScript Ready",
      description: "Built with TypeScript from the ground up. Full type safety and excellent developer experience.",
      icon: "🔷",
    },
    {
      title: "Accessible by Default",
      description: "All components follow WCAG guidelines and include proper ARIA attributes for screen readers.",
      icon: "♿",
    },
    {
      title: "Customizable",
      description: "Easily customize colors, spacing, and styling to match your brand and design system.",
      icon: "🎨",
    },
    {
      title: "Framework Agnostic",
      description: "Available for React, Vue.js, and more. Use the same design system across all your projects.",
      icon: "⚛️",
    },
    {
      title: "Production Ready",
      description: "Battle-tested components used in production applications. Reliable and performant.",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Loom</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#components" className="text-gray-600 hover:text-gray-900 transition-colors">Components</a>
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#docs" className="text-gray-600 hover:text-gray-900 transition-colors">Documentation</a>
              <Button variant="primary" size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <Badge variant="primary" className="mb-6">
              🎉 Now with Vue.js support
            </Badge>
            <Title level="h1" className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-6">
              Build Beautiful UIs
              <br />
              <span className="text-blue-600">Faster</span>
            </Title>
            <Text variant="lead" className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              A modern, comprehensive design system with individual component packages for React and Vue.js. 
              Install only what you need, customize everything, and ship faster.
            </Text>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="primary" size="lg" className="px-8 py-4 text-lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
                View Components
              </Button>
            </div>
            <div className="mt-12 text-sm text-gray-500">
              <code className="bg-gray-100 px-3 py-1 rounded">npm install @loom/button</code>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">40+</div>
              <div className="text-gray-600">Components</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">2</div>
              <div className="text-gray-600">Frameworks</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">TypeScript</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 mb-2">0</div>
              <div className="text-gray-600">Bundle Bloat</div>
            </div>
          </div>
        </div>
      </section>

      {/* Components Showcase */}
      <section id="components" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Title level="h2" className="text-4xl font-bold text-gray-900 mb-4">
              Beautiful Components
            </Title>
            <Text variant="lead" className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pre-built, accessible, and customizable components that work seamlessly together.
            </Text>
          </div>

          <Grid columns={3} gap="lg" className="mb-16">
            {components.map((component, index) => (
              <Card key={index} variant="elevated" hoverable className="text-center p-6">
                <div className="text-4xl mb-4">{component.icon}</div>
                <Title level="h3" className="text-lg font-semibold mb-2">
                  {component.name}
                </Title>
                <Text variant="body" className="text-gray-600">
                  {component.description}
                </Text>
              </Card>
            ))}
          </Grid>

          {/* Interactive Demo */}
          <Card variant="elevated" className="p-8">
            <div className="text-center mb-8">
              <Title level="h3" className="text-2xl font-bold mb-4">
                Try It Live
              </Title>
              <Text variant="body" className="text-gray-600">
                See our components in action with this interactive demo
              </Text>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <Text variant="small" weight="medium" className="mb-2">Button Variants</Text>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="primary" size="sm">Primary</Button>
                    <Button variant="secondary" size="sm">Secondary</Button>
                    <Button variant="outline" size="sm">Outline</Button>
                    <Button variant="danger" size="sm">Danger</Button>
                  </div>
                </div>
                
                <div>
                  <Text variant="small" weight="medium" className="mb-2">Form Elements</Text>
                  <div className="space-y-3">
                    <Input 
                      title="Email" 
                      placeholder="Enter your email" 
                      value={email}
                      onChange={(val) => setEmail(val)}
                    />
                    <div className="flex items-center space-x-2">
                      <Switch 
                        checked={isSubscribed}
                        onChange={setIsSubscribed}
                      />
                      <Text variant="small">Subscribe to updates</Text>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <Text variant="small" weight="medium" className="mb-2">Progress Indicators</Text>
                  <div className="space-y-3">
                    <ProgressBar value={75} label="Project Progress" showPercentage />
                    <ProgressBar value={45} label="Upload Status" variant="success" showPercentage />
                    <ProgressBar value={90} label="Storage Usage" variant="warning" showPercentage />
                  </div>
                </div>
                
                <div>
                  <Text variant="small" weight="medium" className="mb-2">User Elements</Text>
                  <div className="flex items-center space-x-4">
                    <Avatar name="John Doe" size="md" status="online" />
                    <div>
                      <Text variant="small" weight="medium">John Doe</Text>
                      <div className="flex space-x-1">
                        <Badge variant="success">Active</Badge>
                        <Badge variant="primary">Pro</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Title level="h2" className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Loom?
            </Title>
            <Text variant="lead" className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built for modern development workflows with performance and developer experience in mind.
            </Text>
          </div>

          <Grid columns={2} gap="lg">
            {features.map((feature, index) => (
              <Card key={index} variant="outlined" className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <Title level="h3" className="text-lg font-semibold mb-2">
                      {feature.title}
                    </Title>
                    <Text variant="body" className="text-gray-600">
                      {feature.description}
                    </Text>
                  </div>
                </div>
              </Card>
            ))}
          </Grid>
        </div>
      </section>

      {/* Analytics Demo */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Title level="h2" className="text-4xl font-bold text-gray-900 mb-4">
              Data Visualization
            </Title>
            <Text variant="lead" className="text-xl text-gray-600 max-w-2xl mx-auto">
              Beautiful charts and data visualization components built right in.
            </Text>
          </div>

          <Grid columns={2} gap="lg">
            <Card variant="elevated" className="p-6">
              <Title level="h3" className="text-lg font-semibold mb-4">
                Quarterly Performance
              </Title>
              <BarChart
                title="Quarterly Performance"
                data={performanceData}
                showValues={true}
                showDescriptions={true}
                orientation="vertical"
                variant="default"
                size="md"
              />
            </Card>
            
            <Card variant="elevated" className="p-6">
              <Title level="h3" className="text-lg font-semibold mb-4">
                Growth Trend
              </Title>
              <LineChart
                title="Growth Trend"
                data={growthData}
                showValues={true}
                showDescriptions={true}
                variant="default"
                size="md"
                showGrid={true}
                showDots={true}
              />
            </Card>
          </Grid>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Title level="h2" className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </Title>
          <Text variant="lead" className="text-xl text-blue-100 mb-8">
            Join thousands of developers building beautiful UIs with Loom Design System.
          </Text>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-8 py-4 text-lg"
              onClick={() => setIsModalOpen(true)}
            >
              Start Building
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg text-white border-white hover:bg-white hover:text-blue-600">
              View Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <span className="text-xl font-bold">Loom</span>
              </div>
              <Text variant="body" className="text-gray-400">
                A modern design system for building beautiful, accessible user interfaces.
              </Text>
            </div>
            
            <div>
              <Title level="h4" className="text-lg font-semibold mb-4">Components</Title>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Buttons</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Forms</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Navigation</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Data Display</a>
              </div>
            </div>
            
            <div>
              <Title level="h4" className="text-lg font-semibold mb-4">Resources</Title>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Documentation</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Examples</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">GitHub</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Changelog</a>
              </div>
            </div>
            
            <div>
              <Title level="h4" className="text-lg font-semibold mb-4">Community</Title>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Discord</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Blog</a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">Support</a>
              </div>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Text variant="small" className="text-gray-400">
              © 2024 Loom Design System. All rights reserved.
            </Text>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">License</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Get Started with Loom"
        size="md"
        backdropBlur
      >
        <div className="space-y-6">
          <Text variant="body">
            Ready to start building with Loom? Choose your framework and get started in minutes.
          </Text>
          
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <Title level="h4" className="text-lg font-semibold mb-2">React</Title>
              <Text variant="small" className="text-gray-600 mb-3">
                Install individual components or the full package
              </Text>
              <code className="bg-gray-100 px-3 py-1 rounded text-sm block">
                npm install @loom/button
              </code>
            </div>
            
            <div className="p-4 border border-gray-200 rounded-lg">
              <Title level="h4" className="text-lg font-semibold mb-2">Vue.js</Title>
              <Text variant="small" className="text-gray-600 mb-3">
                Vue 3 components with Composition API support
              </Text>
              <code className="bg-gray-100 px-3 py-1 rounded text-sm block">
                npm install @loom-vue/button
              </code>
            </div>
          </div>
          
          <div className="flex gap-3 justify-end">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Get Started
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}