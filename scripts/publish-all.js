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

console.log('🚀 Publishing all individual component packages...\n');

// Publish core package first
console.log('📦 Publishing @loom/core...');
try {
  execSync('npm publish', { cwd: path.join(__dirname, '..', 'packages', 'core'), stdio: 'inherit' });
  console.log('✅ @loom/core published successfully\n');
} catch (error) {
  console.error('❌ Failed to publish @loom/core:', error.message);
  process.exit(1);
}

// Publish all individual component packages
let successCount = 0;
let failCount = 0;

components.forEach(component => {
  const componentPath = path.join(__dirname, '..', 'packages', 'components', component);
  
  if (fs.existsSync(componentPath)) {
    console.log(`📦 Publishing @loom/${component}...`);
    try {
      execSync('npm publish', { cwd: componentPath, stdio: 'inherit' });
      console.log(`✅ @loom/${component} published successfully\n`);
      successCount++;
    } catch (error) {
      console.error(`❌ Failed to publish @loom/${component}:`, error.message);
      failCount++;
    }
  } else {
    console.log(`⚠️  Package @loom/${component} not found, skipping...\n`);
  }
});

// Publish main react package last
console.log('📦 Publishing @loom/react (meta package)...');
try {
  execSync('npm publish', { cwd: path.join(__dirname, '..', 'packages', 'react'), stdio: 'inherit' });
  console.log('✅ @loom/react published successfully\n');
  successCount++;
} catch (error) {
  console.error('❌ Failed to publish @loom/react:', error.message);
  failCount++;
}

// Summary
console.log('🎉 Publish Summary:');
console.log(`✅ Successful: ${successCount} packages`);
console.log(`❌ Failed: ${failCount} packages`);

if (failCount > 0) {
  console.log('\n⚠️  Some packages failed to publish. Check the errors above.');
  process.exit(1);
} else {
  console.log('\n🎉 All packages published successfully!');
  console.log('\n📚 Next steps:');
  console.log('1. Update documentation with new package names');
  console.log('2. Create migration guide for existing users');
  console.log('3. Announce the new individual package structure');
}
