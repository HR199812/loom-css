/**
 * Example: Using Individual Component Packages
 * 
 * This example shows how to use individual Loom components
 * instead of the complete package to reduce bundle size.
 */

// Instead of importing everything from @loom/react:
// import { Button, Input, Card, Grid } from '@loom/react';

// Import only what you need from individual packages:
import { Button } from '@loom/button';
import { Input } from '@loom/input';
import { Card } from '@loom/card';
import { Grid } from '@loom/grid';
import { Text } from '@loom/text';
import { Title } from '@loom/title';

// You still need the core package for utilities and tokens
import '@loom/core/loom-utilities.css';

export function IndividualPackagesExample() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Title level="h1" className="text-center mb-8">
        Individual Packages Example
      </Title>
      
      <Text className="text-center mb-8 text-gray-600">
        This example uses individual component packages instead of the complete library.
        This results in a much smaller bundle size!
      </Text>

      <Grid columns={2} gap="lg">
        <Card title="Login Form" variant="elevated">
          <div className="space-y-4">
            <Input 
              type="email" 
              placeholder="Enter your email"
              className="w-full"
            />
            <Input 
              type="password" 
              placeholder="Enter your password"
              className="w-full"
            />
            <Button variant="primary" className="w-full">
              Sign In
            </Button>
          </div>
        </Card>

        <Card title="Benefits" variant="outlined">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <Text>Smaller bundle size</Text>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <Text>Better tree shaking</Text>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <Text>Faster builds</Text>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <Text>Selective updates</Text>
            </div>
          </div>
        </Card>
      </Grid>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <Title level="h3" className="mb-2">
          Installation
        </Title>
        <Text className="text-sm text-gray-700">
          Install only the components you need:
        </Text>
        <pre className="mt-2 p-3 bg-gray-100 rounded text-sm overflow-x-auto">
{`npm install @loom/core @loom/button @loom/input @loom/card @loom/grid`}
        </pre>
      </div>
    </div>
  );
}

// Bundle size comparison
export const BundleSizeComparison = () => {
  const packages = [
    { name: '@loom/react (all)', size: '~500KB', components: '40+ components' },
    { name: '@loom/button', size: '~15KB', components: '1 component' },
    { name: '@loom/input', size: '~12KB', components: '1 component' },
    { name: '@loom/card', size: '~8KB', components: '1 component' },
    { name: '@loom/core', size: '~50KB', components: 'Utilities + tokens' },
  ];

  return (
    <Card title="Bundle Size Comparison" className="mt-8">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Package</th>
              <th className="text-left p-2">Size</th>
              <th className="text-left p-2">Components</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg, index) => (
              <tr key={index} className="border-b">
                <td className="p-2 font-mono text-sm">{pkg.name}</td>
                <td className="p-2 text-sm">{pkg.size}</td>
                <td className="p-2 text-sm">{pkg.components}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};
