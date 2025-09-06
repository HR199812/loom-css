"use client";

// Example of using individual component packages (currently using @loom/react for demo)
// In production, you would import from individual packages:
// import { Button } from "@loom/button";
// import { Input } from "@loom/input";
// etc.
import {
  Button,
  Input,
  Card,
  Grid,
  Text,
  Title,
  Badge,
  Alert,
} from "@loom/react";

export function IndividualPackagesDemo() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Title level="h1" className="text-center mb-8">
        Individual Packages Demo
      </Title>

      <Alert variant="info" className="mb-8">
        <Text>
          This demo uses individual component packages instead of the complete
          library. Each component is imported from its own package for optimal
          bundle size.
        </Text>
      </Alert>

      <Grid columns={2} gap="lg">
        <Card title="Form Example" variant="elevated">
          <div className="space-y-4">
            <div>
              <Text className="text-sm font-medium mb-2">Email</Text>
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
              />
            </div>
            <div>
              <Text className="text-sm font-medium mb-2">Password</Text>
              <Input
                type="password"
                placeholder="Enter your password"
                className="w-full"
              />
            </div>
            <Button variant="primary" className="w-full">
              Sign In
            </Button>
          </div>
        </Card>

        <Card title="Benefits" variant="outlined">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Text>Smaller bundle size</Text>
              <Badge variant="success">✓</Badge>
            </div>
            <div className="flex items-center justify-between">
              <Text>Better tree shaking</Text>
              <Badge variant="success">✓</Badge>
            </div>
            <div className="flex items-center justify-between">
              <Text>Faster builds</Text>
              <Badge variant="success">✓</Badge>
            </div>
            <div className="flex items-center justify-between">
              <Text>Selective updates</Text>
              <Badge variant="success">✓</Badge>
            </div>
          </div>
        </Card>
      </Grid>

      <Card title="Installation Example" className="mt-8">
        <div className="space-y-4">
          <Text className="font-medium">Install only what you need:</Text>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              {`npm install @loom/core @loom/button @loom/input @loom/card @loom/grid`}
            </pre>
          </div>

          <Text className="font-medium">Import individual components:</Text>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
              {`import { Button } from "@loom/button";
import { Input } from "@loom/input";
import { Card } from "@loom/card";
import { Grid } from "@loom/grid";`}
            </pre>
          </div>
        </div>
      </Card>
    </div>
  );
}
