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

console.log('🚀 Publishing all Vue.js individual component packages...\n');

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
    console.log(`📦 Publishing @loom-vue/${componentName.toLowerCase()}...`);
    
    // Change to component directory and run publish
    process.chdir(componentDir);
    execSync('npm publish', { stdio: 'inherit' });
    
    console.log(`✅ Successfully published @loom-vue/${componentName.toLowerCase()}\n`);
    successCount++;
    
  } catch (error) {
    console.log(`❌ Failed to publish @loom-vue/${componentName.toLowerCase()}`);
    console.log(`   Error: ${error.message}\n`);
    errorCount++;
    errors.push({
      component: componentName,
      error: error.message
    });
  }
});

// Publish main Vue.js package
console.log('📦 Publishing main @loom/vue package...');
try {
  const vueDir = path.join(__dirname, '..', 'packages', 'vue');
  process.chdir(vueDir);
  execSync('npm publish', { stdio: 'inherit' });
  console.log('✅ Successfully published @loom/vue\n');
  successCount++;
} catch (error) {
  console.log('❌ Failed to publish @loom/vue');
  console.log(`   Error: ${error.message}\n`);
  errorCount++;
  errors.push({
    component: 'vue',
    error: error.message
  });
}

// Summary
console.log('📊 Publish Summary:');
console.log(`✅ Successful publishes: ${successCount}`);
console.log(`❌ Failed publishes: ${errorCount}`);

if (errors.length > 0) {
  console.log('\n❌ Publish Errors:');
  errors.forEach(({ component, error }) => {
    console.log(`   ${component}: ${error}`);
  });
}

if (errorCount === 0) {
  console.log('\n🎉 All Vue.js packages published successfully!');
} else {
  console.log(`\n⚠️  ${errorCount} packages failed to publish. Please check the errors above.`);
  process.exit(1);
}
