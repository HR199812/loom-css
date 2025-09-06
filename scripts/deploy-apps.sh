#!/bin/bash

# Deploy Script for Loom CSS Apps
# This script builds and deploys the React and Vue example apps

set -e

echo "🚀 Starting deployment process for Loom CSS apps..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if required tools are installed
check_dependencies() {
    print_status "Checking dependencies..."
    
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install Node.js and npm."
        exit 1
    fi
    
    if ! command -v vercel &> /dev/null; then
        print_warning "Vercel CLI is not installed. Installing..."
        npm install -g vercel
    fi
    
    if ! command -v netlify &> /dev/null; then
        print_warning "Netlify CLI is not installed. Installing..."
        npm install -g netlify-cli
    fi
    
    print_success "All dependencies are available"
}

# Build React app
build_react_app() {
    print_status "Building React app..."
    cd apps/web
    
    # Install dependencies
    npm install
    
    # Build the app
    npm run build
    
    print_success "React app built successfully"
    cd ../..
}

# Build Vue app
build_vue_app() {
    print_status "Building Vue app..."
    cd apps/vue-example
    
    # Install dependencies
    npm install
    
    # Build the app
    npm run build
    
    print_success "Vue app built successfully"
    cd ../..
}

# Deploy React app to Vercel
deploy_react_app() {
    print_status "Deploying React app to Vercel..."
    cd apps/web
    
    # Deploy to Vercel
    vercel --prod --yes
    
    print_success "React app deployed to Vercel"
    cd ../..
}

# Deploy Vue app to Netlify
deploy_vue_app() {
    print_status "Deploying Vue app to Netlify..."
    cd apps/vue-example
    
    # Deploy to Netlify
    netlify deploy --prod --dir=dist --yes
    
    print_success "Vue app deployed to Netlify"
    cd ../..
}

# Deploy documentation
deploy_docs() {
    print_status "Building and deploying documentation..."
    
    # Build documentation
    npm run docs:build
    
    # Deploy to Vercel
    vercel --prod --cwd=. --yes
    
    print_success "Documentation deployed"
}

# Main deployment function
main() {
    echo "🎯 Loom CSS Deployment Script"
    echo "=============================="
    
    # Check dependencies
    check_dependencies
    
    # Build apps
    build_react_app
    build_vue_app
    
    # Deploy apps
    deploy_react_app
    deploy_vue_app
    
    # Deploy documentation
    deploy_docs
    
    echo ""
    print_success "🎉 All deployments completed successfully!"
    echo ""
    echo "📋 Deployment Summary:"
    echo "  • React App: Deployed to Vercel"
    echo "  • Vue App: Deployed to Netlify"
    echo "  • Documentation: Deployed to Vercel"
    echo ""
    echo "🔗 Update your documentation with the live URLs once deployment is complete."
}

# Run main function
main "$@"
