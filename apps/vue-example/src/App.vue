<template>
  <div id="app">
    <!-- Header -->
    <header class="header">
      <div class="container">
        <h1 class="header-title">Loom Design System</h1>
        <p class="header-subtitle">Vue.js Components Showcase</p>
      </div>
    </header>

    <!-- Main Content -->
    <main class="main">
      <div class="container">
        <!-- Basic Components Section -->
        <section class="section">
          <h2 class="section-title">Basic Components</h2>
          <div class="component-grid">
            <div class="component-demo">
              <div class="demo-title">Buttons</div>
              <div class="demo-content">
                <button class="btn btn-primary" @click="handleButtonClick">Primary Button</button>
                <button class="btn btn-secondary" @click="handleButtonClick">Secondary Button</button>
                <button class="btn btn-outline" @click="handleButtonClick">Outline Button</button>
                <button class="btn btn-danger" @click="handleButtonClick">Danger Button</button>
              </div>
            </div>

            <div class="component-demo">
              <div class="demo-title">Inputs</div>
              <div class="demo-content">
                <input 
                  v-model="inputValue" 
                  placeholder="Enter text here..."
                  class="input"
                  @input="handleInputChange"
                />
                <input 
                  v-model="emailValue" 
                  type="email"
                  placeholder="Enter email..."
                  class="input"
                  @input="handleInputChange"
                />
              </div>
            </div>

            <div class="component-demo">
              <div class="demo-title">Cards</div>
              <div class="demo-content">
                <div class="card">
                  <h3>Example Card</h3>
                  <p>This is a beautiful card component with elevated styling.</p>
                  <button class="btn btn-primary btn-sm">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Form Components Section -->
        <section class="section">
          <h2 class="section-title">Form Components</h2>
          <div class="component-grid">
            <div class="component-demo">
              <div class="demo-title">Switches</div>
              <div class="demo-content">
                <label class="switch">
                  <input type="checkbox" v-model="switchValue" @change="handleSwitchChange">
                  <span class="slider"></span>
                  Enable notifications
                </label>
                <label class="switch">
                  <input type="checkbox" v-model="switchValue2" @change="handleSwitchChange">
                  <span class="slider"></span>
                  Auto-save changes
                </label>
              </div>
            </div>

            <div class="component-demo">
              <div class="demo-title">Checkboxes</div>
              <div class="demo-content">
                <label class="checkbox">
                  <input type="checkbox" v-model="checkboxValue" @change="handleCheckboxChange">
                  <span class="checkmark"></span>
                  Accept terms and conditions
                </label>
                <label class="checkbox">
                  <input type="checkbox" v-model="checkboxValue2" @change="handleCheckboxChange">
                  <span class="checkmark"></span>
                  Subscribe to newsletter
                </label>
              </div>
            </div>

            <div class="component-demo">
              <div class="demo-title">Radio Buttons</div>
              <div class="demo-content">
                <div class="radio-group">
                  <label v-for="option in radioOptions" :key="option.value" class="radio">
                    <input 
                      type="radio" 
                      :value="option.value" 
                      v-model="radioValue" 
                      @change="handleRadioChange"
                    >
                    <span class="radio-mark"></span>
                    {{ option.label }}
                  </label>
                </div>
              </div>
            </div>

            <div class="component-demo">
              <div class="demo-title">Slider</div>
              <div class="demo-content">
                <p>Volume: {{ sliderValue }}</p>
                <input 
                  type="range" 
                  v-model="sliderValue" 
                  min="0" 
                  max="100"
                  class="slider"
                  @input="handleSliderChange"
                />
              </div>
            </div>
          </div>
        </section>

        <!-- Data Display Section -->
        <section class="section">
          <h2 class="section-title">Data Display</h2>
          <div class="component-grid">
            <div class="component-demo">
              <div class="demo-title">Avatars</div>
              <div class="demo-content">
                <div class="avatar-group">
                  <div class="avatar avatar-sm">JD</div>
                  <div class="avatar avatar-md">JS</div>
                  <div class="avatar avatar-lg">BJ</div>
                  <div class="avatar avatar-xl">AB</div>
                </div>
              </div>
            </div>

            <div class="component-demo">
              <div class="demo-title">Badges</div>
              <div class="demo-content">
                <div class="badge-group">
                  <span class="badge badge-primary">New</span>
                  <span class="badge badge-success">Active</span>
                  <span class="badge badge-warning">Pending</span>
                  <span class="badge badge-danger">Error</span>
                  <span class="badge badge-info">Info</span>
                </div>
              </div>
            </div>

            <div class="component-demo">
              <div class="demo-title">Progress Bar</div>
              <div class="demo-content">
                <div class="progress-bar">
                  <div class="progress-fill" :style="{ width: progressValue + '%' }"></div>
                </div>
                <p>Loading progress: {{ progressValue }}%</p>
                <button class="btn btn-outline btn-sm" @click="updateProgress">
                  Update Progress
                </button>
              </div>
            </div>

            <div class="component-demo">
              <div class="demo-title">Spinner</div>
              <div class="demo-content">
                <div class="spinner-container">
                  <div class="spinner"></div>
                  <span>Loading...</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Individual Packages Demo -->
        <section class="section">
          <IndividualPackagesDemo />
        </section>
      </div>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <p class="footer-text">
          Built with Loom Design System for Vue.js
        </p>
        <p class="footer-subtext">
          Individual component packages for optimal bundle size
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import IndividualPackagesDemo from './components/IndividualPackagesDemo.vue';

// Reactive state
const inputValue = ref('');
const emailValue = ref('');
const switchValue = ref(false);
const switchValue2 = ref(true);
const checkboxValue = ref(false);
const checkboxValue2 = ref(true);
const radioValue = ref('option1');
const sliderValue = ref(50);
const progressValue = ref(75);

// Radio options
const radioOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' }
];

// Event handlers
const handleButtonClick = () => {
  console.log('Button clicked!');
};

const handleInputChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log('Input changed:', target.value);
};

const handleSwitchChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log('Switch changed:', target.checked);
};

const handleCheckboxChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log('Checkbox changed:', target.checked);
};

const handleRadioChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log('Radio changed:', target.value);
};

const handleSliderChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log('Slider changed:', target.value);
};

const updateProgress = () => {
  progressValue.value = Math.floor(Math.random() * 100);
};
</script>

<style scoped>
.header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 0;
  text-align: center;
}

.header-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 16px;
  color: white;
}

.header-subtitle {
  font-size: 20px;
  opacity: 0.9;
  color: white;
}

.main {
  padding: 60px 0;
}

.footer {
  background: #1f2937;
  color: white;
  padding: 40px 0;
  text-align: center;
}

.footer-text {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: white;
}

.footer-subtext {
  font-size: 14px;
  opacity: 0.8;
  color: white;
}

/* Component Styles */
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
  margin: 4px;
}

.btn-primary {
  background-color: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background-color: #2563eb;
}

.btn-secondary {
  background-color: #6b7280;
  color: white;
}

.btn-secondary:hover {
  background-color: #4b5563;
}

.btn-outline {
  background-color: transparent;
  color: #3b82f6;
  border: 1px solid #3b82f6;
}

.btn-outline:hover {
  background-color: #3b82f6;
  color: white;
}

.btn-danger {
  background-color: #ef4444;
  color: white;
}

.btn-danger:hover {
  background-color: #dc2626;
}

.btn-sm {
  padding: 6px 12px;
  font-size: 14px;
}

.input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 16px;
  margin: 4px 0;
}

.input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.card h3 {
  margin: 0 0 12px 0;
  color: #1f2937;
}

.card p {
  margin: 0 0 16px 0;
  color: #6b7280;
}

.switch {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
  cursor: pointer;
}

.switch input {
  display: none;
}

.slider {
  width: 44px;
  height: 24px;
  background-color: #ccc;
  border-radius: 24px;
  position: relative;
  transition: background-color 0.2s;
}

.slider:before {
  content: '';
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;
  top: 2px;
  left: 2px;
  transition: transform 0.2s;
}

.switch input:checked + .slider {
  background-color: #3b82f6;
}

.switch input:checked + .slider:before {
  transform: translateX(20px);
}

.checkbox {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
  cursor: pointer;
}

.checkbox input {
  display: none;
}

.checkmark {
  width: 20px;
  height: 20px;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  position: relative;
  transition: all 0.2s;
}

.checkbox input:checked + .checkmark {
  background-color: #3b82f6;
  border-color: #3b82f6;
}

.checkbox input:checked + .checkmark:after {
  content: '✓';
  position: absolute;
  color: white;
  font-size: 14px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.radio {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.radio input {
  display: none;
}

.radio-mark {
  width: 20px;
  height: 20px;
  border: 2px solid #d1d5db;
  border-radius: 50%;
  position: relative;
  transition: all 0.2s;
}

.radio input:checked + .radio-mark {
  border-color: #3b82f6;
}

.radio input:checked + .radio-mark:after {
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: #3b82f6;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.slider {
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background: #d1d5db;
  outline: none;
  margin: 8px 0;
}

.slider::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
}

.avatar-group {
  display: flex;
  gap: 12px;
  align-items: center;
}

.avatar {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #3b82f6;
  color: white;
  border-radius: 50%;
  font-weight: 500;
}

.avatar-sm {
  width: 32px;
  height: 32px;
  font-size: 12px;
}

.avatar-md {
  width: 40px;
  height: 40px;
  font-size: 14px;
}

.avatar-lg {
  width: 48px;
  height: 48px;
  font-size: 16px;
}

.avatar-xl {
  width: 64px;
  height: 64px;
  font-size: 18px;
}

.badge-group {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.badge {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.badge-primary {
  background-color: #dbeafe;
  color: #1e40af;
}

.badge-success {
  background-color: #dcfce7;
  color: #166534;
}

.badge-warning {
  background-color: #fef3c7;
  color: #92400e;
}

.badge-danger {
  background-color: #fee2e2;
  color: #991b1b;
}

.badge-info {
  background-color: #e0f2fe;
  color: #0c4a6e;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background-color: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
  margin: 8px 0;
}

.progress-fill {
  height: 100%;
  background-color: #3b82f6;
  transition: width 0.3s ease;
}

.spinner-container {
  display: flex;
  align-items: center;
  gap: 12px;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid #e5e7eb;
  border-top: 2px solid #3b82f6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>