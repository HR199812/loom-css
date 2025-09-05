'use client';

import React from 'react';

export const UtilityExample: React.FC = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">
        Loom Design System - Utility Classes Demo
      </h1>
      
      {/* Grid Layout Example */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Grid Layout</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-primary text-white p-4 rounded-lg text-center">
            Grid Item 1
          </div>
          <div className="bg-secondary text-white p-4 rounded-lg text-center">
            Grid Item 2
          </div>
          <div className="bg-success text-white p-4 rounded-lg text-center">
            Grid Item 3
          </div>
        </div>
      </div>

      {/* Flexbox Example */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Flexbox Layout</h2>
        <div className="flex justify-between items-center bg-muted p-4 rounded-lg">
          <div className="text-sm text-secondary">Left Content</div>
          <div className="text-lg font-medium">Center Content</div>
          <div className="text-sm text-secondary">Right Content</div>
        </div>
      </div>

      {/* Spacing Example */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Spacing System</h2>
        <div className="space-y-4">
          <div className="p-2 bg-warning text-white rounded">Padding 2 (0.5rem)</div>
          <div className="p-4 bg-warning text-white rounded">Padding 4 (1rem)</div>
          <div className="p-6 bg-warning text-white rounded">Padding 6 (1.5rem)</div>
          <div className="p-8 bg-warning text-white rounded">Padding 8 (2rem)</div>
        </div>
      </div>

      {/* Typography Example */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Typography</h2>
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Heading 1 - 4xl Bold</h1>
          <h2 className="text-3xl font-semibold">Heading 2 - 3xl Semibold</h2>
          <h3 className="text-2xl font-medium">Heading 3 - 2xl Medium</h3>
          <p className="text-base text-secondary">Body text - Base Secondary</p>
          <p className="text-sm text-muted">Small text - SM Muted</p>
        </div>
      </div>

      {/* Colors Example */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Color System</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="bg-primary text-white p-3 rounded text-center">Primary</div>
            <div className="bg-secondary text-white p-3 rounded text-center">Secondary</div>
            <div className="bg-success text-white p-3 rounded text-center">Success</div>
          </div>
          <div className="space-y-2">
            <div className="bg-warning text-white p-3 rounded text-center">Warning</div>
            <div className="bg-error text-white p-3 rounded text-center">Error</div>
            <div className="bg-muted text-foreground p-3 rounded text-center">Muted</div>
          </div>
        </div>
      </div>

      {/* Shadows Example */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Shadow System</h2>
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border">Shadow SM</div>
          <div className="bg-white p-4 rounded-lg shadow-md border">Shadow MD</div>
          <div className="bg-white p-4 rounded-lg shadow-lg border">Shadow LG</div>
          <div className="bg-white p-4 rounded-lg shadow-xl border">Shadow XL</div>
        </div>
      </div>

      {/* Border Radius Example */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Border Radius</h2>
        <div className="flex gap-4">
          <div className="bg-primary text-white p-4 rounded-sm">Rounded SM</div>
          <div className="bg-primary text-white p-4 rounded">Rounded</div>
          <div className="bg-primary text-white p-4 rounded-lg">Rounded LG</div>
          <div className="bg-primary text-white p-4 rounded-xl">Rounded XL</div>
          <div className="bg-primary text-white p-4 rounded-full">Rounded Full</div>
        </div>
      </div>

      {/* Interactive Elements */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Interactive Elements</h2>
        <div className="flex gap-4">
          <button className="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Primary Button
          </button>
          <button className="bg-secondary text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Secondary Button
          </button>
          <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition-colors">
            Outline Button
          </button>
        </div>
      </div>
    </div>
  );
};
