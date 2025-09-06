<template>
  <div class="demo-card">
    <div class="card">
      <h3>Individual Packages Demo</h3>
      <div class="demo-content">
        <div class="alert alert-info">
          <strong>Bundle Size Benefits</strong><br>
          This demo uses individual component packages for optimal bundle size.
        </div>

        <div class="form-section">
          <h4>Example Form</h4>
          
          <div class="form-group">
            <label>Email</label>
            <input 
              v-model="email" 
              type="email"
              placeholder="Enter your email"
              class="input"
              @input="handleEmailChange"
            />
          </div>

          <div class="form-group">
            <label>Password</label>
            <input 
              v-model="password" 
              type="password"
              placeholder="Enter your password"
              class="input"
              @input="handlePasswordChange"
            />
          </div>

          <button 
            class="btn btn-primary"
            @click="handleLogin"
            :disabled="!email || !password">
            Sign In
          </button>
        </div>

        <div class="benefits-section">
          <h4>Benefits:</h4>
          <div class="benefits-list">
            <div class="benefit-item">
              <span class="badge badge-success">✓</span>
              <span>Smaller bundle size</span>
            </div>
            <div class="benefit-item">
              <span class="badge badge-success">✓</span>
              <span>Better tree shaking</span>
            </div>
            <div class="benefit-item">
              <span class="badge badge-success">✓</span>
              <span>Faster builds</span>
            </div>
            <div class="benefit-item">
              <span class="badge badge-success">✓</span>
              <span>Selective updates</span>
            </div>
          </div>
        </div>

        <div class="installation-section">
          <h4>Installation:</h4>
          <div class="code-block">
            <code>npm install @loom-vue/button @loom-vue/input @loom-vue/card</code>
          </div>
        </div>

        <div class="usage-section">
          <h4>Usage:</h4>
          <div class="code-block">
            <code>import { Button, Input, Card } from '@loom-vue/button';</code>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Reactive state
const email = ref('');
const password = ref('');

// Event handlers
const handleEmailChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log('Email changed:', target.value);
};

const handlePasswordChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log('Password changed:', target.value);
};

const handleLogin = () => {
  if (email.value && password.value) {
    console.log('Login successful!', { email: email.value });
    // Reset form
    email.value = '';
    password.value = '';
  }
};
</script>

<style scoped>
.demo-card {
  margin: 20px 0;
}

.demo-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-section {
  background: #f9fafb;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
}

.form-group {
  margin-bottom: 16px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #374151;
}

.benefits-section {
  background: #f0f9ff;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #bae6fd;
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.installation-section,
.usage-section {
  background: #f3f4f6;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
}

.code-block {
  background: #1f2937;
  padding: 16px;
  border-radius: 6px;
  border-left: 4px solid #3b82f6;
}

.code-block code {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  color: #f9fafb;
  white-space: pre-wrap;
}

.alert {
  padding: 12px 16px;
  border-radius: 6px;
  margin-bottom: 16px;
}

.alert-info {
  background-color: #dbeafe;
  color: #1e40af;
  border: 1px solid #93c5fd;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-primary {
  background-color: #3b82f6;
  color: white;
}

.btn-primary:hover:not(:disabled) {
  background-color: #2563eb;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.badge-success {
  background-color: #dcfce7;
  color: #166534;
}

.input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 16px;
}

.input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

@media (max-width: 768px) {
  .demo-card {
    margin: 16px 0;
  }
  
  .demo-content {
    gap: 20px;
  }
  
  .form-section,
  .benefits-section,
  .installation-section,
  .usage-section {
    padding: 16px;
  }
}
</style>