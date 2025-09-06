#!/bin/bash

echo "🚀 Setting up Loom Vue.js Example App..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Please run this script from the vue-example directory"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

echo "✅ Setup complete!"
echo ""
echo "📱 To run the app:"
echo "  npm run dev          # Start development server"
echo "  npm run build        # Build for production"
echo "  npm run preview      # Preview production build"
echo ""
echo "🎉 Happy coding with Loom Design System for Vue.js!"
