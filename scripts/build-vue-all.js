#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// List of Vue.js components
const components = [
  'Button', 'Input', 'Card', 'Text', 'Title', 'Alert', 'Modal', 'Switch', 
  'Checkbox', 'Radio', 'Slider', 'Select', 'Image', 'Avatar', 'Badge',
  'List', 'ListItem', 'Separator', 'ProgressBar', 'Spinner', 'Toast',
  'Navigation', 'TabBar', 'Header', 'Footer', 'Grid', 'Flex', 'Container',
  'Form', 'Field', 'Table', 'Pagination', 'Breadcrumb', 'Accordion',
  'Tabs', 'Tooltip', 'Dropdown', 'DatePicker', 'TimePicker', 'Calendar'
];

console.log('🚀 Building all Vue.js individual component packages...\n');

let successCount = 0;
let errorCount = 0;
const errors = [];

components.forEach(componentName => {
  const componentDir = path.join(__dirname, '..', 'packages', 'components-vue', componentName.toLowerCase());
  
  if (!fs.existsSync(componentDir)) {
    console.log(`❌ Directory not found: ${componentDir}`);
    errorCount++;
    return;
  }
  
  try {
    console.log(`📦 Building @loom-vue/${componentName.toLowerCase()}...`);
    
    // Change to component directory and run build
    process.chdir(componentDir);
    execSync('npm run build', { stdio: 'inherit' });
    
    console.log(`✅ Successfully built @loom-vue/${componentName.toLowerCase()}\n`);
    successCount++;
    
  } catch (error) {
    console.log(`❌ Failed to build @loom-vue/${componentName.toLowerCase()}`);
    console.log(`   Error: ${error.message}\n`);
    errorCount++;
    errors.push({
      component: componentName,
      error: error.message
    });
  }
});

// Build main Vue.js package
console.log('📦 Building main @loom/vue package...');
try {
  const vueDir = path.join(__dirname, '..', 'packages', 'vue');
  process.chdir(vueDir);
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Successfully built @loom/vue\n');
  successCount++;
} catch (error) {
  console.log('❌ Failed to build @loom/vue');
  console.log(`   Error: ${error.message}\n`);
  errorCount++;
  errors.push({
    component: 'vue',
    error: error.message
  });
}

// Summary
console.log('📊 Build Summary:');
console.log(`✅ Successful builds: ${successCount}`);
console.log(`❌ Failed builds: ${errorCount}`);

if (errors.length > 0) {
  console.log('\n❌ Build Errors:');
  errors.forEach(({ component, error }) => {
    console.log(`   ${component}: ${error}`);
  });
}

if (errorCount === 0) {
  console.log('\n🎉 All Vue.js packages built successfully!');
} else {
  console.log(`\n⚠️  ${errorCount} packages failed to build. Please check the errors above.`);
  process.exit(1);
}
