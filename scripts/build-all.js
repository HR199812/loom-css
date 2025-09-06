#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const components = [
  'accordion', 'alert', 'avatar', 'badge', 'barchart', 'breadcrumb', 'button', 'calendar', 'card', 'carousel',
  'chat', 'checkbox', 'commandpalette', 'dateinput', 'dropdown', 'grid', 'input', 'linechart', 'lists', 'modal',
  'otpinput', 'pagination', 'paymentplan', 'progressbar', 'radio', 'range', 'searchinput', 'section', 'separator',
  'sidebar', 'switch', 'table', 'tabs', 'text', 'textarea', 'themeswitch', 'title', 'toast', 'togglegroup', 'tooltip'
];

console.log('🚀 Building all individual component packages...\n');

// Build core package first
console.log('📦 Building @loom/core...');
try {
  execSync('npm run build', { cwd: path.join(__dirname, '..', 'packages', 'core'), stdio: 'inherit' });
  console.log('✅ @loom/core built successfully\n');
} catch (error) {
  console.error('❌ Failed to build @loom/core:', error.message);
  process.exit(1);
}

// Build all individual component packages
let successCount = 0;
let failCount = 0;

components.forEach(component => {
  const componentPath = path.join(__dirname, '..', 'packages', 'components', component);
  
  if (fs.existsSync(componentPath)) {
    console.log(`📦 Building @loom/${component}...`);
    try {
      execSync('npm run build', { cwd: componentPath, stdio: 'inherit' });
      console.log(`✅ @loom/${component} built successfully\n`);
      successCount++;
    } catch (error) {
      console.error(`❌ Failed to build @loom/${component}:`, error.message);
      failCount++;
    }
  } else {
    console.log(`⚠️  Package @loom/${component} not found, skipping...\n`);
  }
});

// Build main react package
console.log('📦 Building @loom/react (meta package)...');
try {
  execSync('npm run build', { cwd: path.join(__dirname, '..', 'packages', 'react'), stdio: 'inherit' });
  console.log('✅ @loom/react built successfully\n');
  successCount++;
} catch (error) {
  console.error('❌ Failed to build @loom/react:', error.message);
  failCount++;
}

// Summary
console.log('🎉 Build Summary:');
console.log(`✅ Successful: ${successCount} packages`);
console.log(`❌ Failed: ${failCount} packages`);

if (failCount > 0) {
  console.log('\n⚠️  Some packages failed to build. Check the errors above.');
  process.exit(1);
} else {
  console.log('\n🎉 All packages built successfully!');
}
