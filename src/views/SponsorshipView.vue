<script setup>
import { ref } from 'vue';
import JumbotronComponent from '@/components/JumbotronComponent.vue';
import emailjs from 'emailjs-com';

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  companyName: '',
  phone: '',
  message: '',
});

const errors = ref({});
const showPopup = ref(false);
const popupMessage = ref('');

const validateForm = () => {
  errors.value = {};
  let isValid = true;

  if (!formData.value.firstName.trim()) {
    errors.value.firstName = 'First name is required.';
    isValid = false;
  }

  if (!formData.value.lastName.trim()) {
    errors.value.lastName = 'Last name is required.';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!formData.value.email.trim()) {
    errors.value.email = 'Email is required.';
    isValid = false;
  } else if (!emailRegex.test(formData.value.email)) {
    errors.value.email = 'Invalid email address.';
    isValid = false;
  }

  if (!formData.value.phone.trim()) {
    errors.value.phone = 'Phone number is required.';
    isValid = false;
  }

  if (!formData.value.message.trim()) {
    errors.value.message = 'Message is required.';
    isValid = false;
  }

  return isValid;
};

const sendEmail = async () => {
  try {
    await emailjs.send(
      'service_r01aab9',
      'template_m1r1q4a',
      {
        firstName: formData.value.firstName,
        lastName: formData.value.lastName,
        email: formData.value.email,
        companyName: formData.value.companyName || 'Not provided',
        phone: formData.value.phone,
        message: formData.value.message,
      },
      'EwConf8u9WFHISASE'
    );
    popupMessage.value = 'Sponsorship request submitted successfully!';
    showPopup.value = true;
  } catch (error) {
    console.error('Error sending email:', error);
    popupMessage.value = 'There was an error sending your sponsorship request. Please try again later.';
    showPopup.value = true;
  }
};

const submitForm = async (e) => {
  e.preventDefault();

  if (validateForm()) {
    await sendEmail();
  }
};
</script>

<template>
  <div id="app">
    <JumbotronComponent Title="Sponsor Us" Description="Become a sponsor today!" />

    <div class="sponsorship">
      <h1>Sponsorship Request Form</h1>
      <form @submit="submitForm">
        <label for="firstName">First Name</label>
        <input id="firstName" type="text" v-model="formData.firstName" :class="{ error: errors.firstName }"
          placeholder="Enter your first name" />
        <span class="error-message" v-if="errors.firstName">{{ errors.firstName }}</span>

        <label for="lastName">Last Name</label>
        <input id="lastName" type="text" v-model="formData.lastName" :class="{ error: errors.lastName }"
          placeholder="Enter your last name" />
        <span class="error-message" v-if="errors.lastName">{{ errors.lastName }}</span>

        <label for="email">Email</label>
        <input id="email" type="email" v-model="formData.email" :class="{ error: errors.email }"
          placeholder="Enter your email address" />
        <span class="error-message" v-if="errors.email">{{ errors.email }}</span>

        <label for="companyName">Company Name</label>
        <input id="companyName" type="text" v-model="formData.companyName"
          placeholder="Enter your company name (optional)" />

        <label for="phone">Phone</label>
        <input id="phone" type="tel" v-model="formData.phone" :class="{ error: errors.phone }"
          placeholder="Enter your phone number" />
        <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>

        <label for="message">Message</label>
        <textarea id="message" v-model="formData.message" :class="{ error: errors.message }"
          placeholder="Enter your message"></textarea>
        <span class="error-message" v-if="errors.message">{{ errors.message }}</span>

        <button type="submit">Submit</button>
      </form>
    </div>

    <div v-if="showPopup" class="popup">
      <p>{{ popupMessage }}</p>
      <button @click="showPopup = false">Close</button>
    </div>
  </div>
</template>

<style>
.sponsorship {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;
  color: white;
  border: #384046 3px solid;
  border-radius: 10px;
  width: 60vw;
  min-width: 400px;
  margin-top: 10px;
  margin-bottom: 10px;
}

.sponsorship h1 {
  background-color: #262A2D;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-left: 10px;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-right: 10px;
  margin: 0;
  font-size: 26px;
  border-bottom: #384046 3px solid;
}

.sponsorship form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
}

.sponsorship label {
  font-size: 18px;
  margin-top: 10px;
}

.sponsorship input,
.sponsorship textarea {
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  background-color: #384046;
  color: white;
}

.sponsorship button {
  background-color: #384046;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
}

.sponsorship button:hover {
  background-color: #4d565d;
}

.sponsorship button:active {
  background-color: #1A2023;
}

.sponsorship .error-message {
  color: red;
  font-size: 14px;
  margin-top: -5px;
  margin-bottom: 10px;
}

.sponsorship input.error,
.sponsorship textarea.error {
  border: 2px solid red;
}

.popup {
  position: fixed;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #262A2D;
  color: white;
  padding: 20px;
  border: 2px solid #384046;
  border-radius: 10px;
  z-index: 1000;
  text-align: center;
}

.popup button {
  margin-top: 10px;
  background-color: #384046;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
}

.popup button:hover {
  background-color: #4d565d;
}
</style>
