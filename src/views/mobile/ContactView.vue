<script setup>
import MapComponent from '@/components/mobile/MapComponent.vue';
import FooterComponent from '@/components/mobile/FooterComponent.vue';
import { ref } from 'vue';
import emailjs from 'emailjs-com';

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

const errors = ref({});
const showPopup = ref(false);
const popupMessage = ref('');

const validateForm = () => {
  errors.value = {};
  let isValid = true;

  if (!formData.value.name.trim()) {
    errors.value.name = 'Name is required.';
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

  if (!formData.value.subject.trim()) {
    errors.value.subject = 'Subject is required.';
    isValid = false;
  }

  if (!formData.value.message.trim()) {
    errors.value.message = 'Message is required.';
    isValid = false;
  }

  return isValid;
}

const sendEmail = async () => {
  try {
    await emailjs.send(`${import.meta.env.VITE_EMAILJS_SERVICE_ID}`, `${import.meta.env.VITE_EMAILJS_TEMPLATE_ID}`,
      {
        name: formData.value.name,
        email: formData.value.email,
        phone: formData.value.phone,
        subject: formData.value.subject,
        message: formData.value.message
      },
      `${import.meta.env.VITE_EMAILJS_USER_ID}`
    );
    popupMessage.value = 'Your message has been sent successfully!';
    formData.value = { name: '', email: '', phone: '', subject: '', message: ''};
    showPopup.value = true;
  } catch (error) {
    console.error('Email sending failed:', error);
    popupMessage.value = 'Failed to send your message. Please try again later.';
    showPopup.value = true;
  }
};

const submitForm = async (event) => {
  event.preventDefault();
  if (validateForm()) {
    await sendEmail();
  }
};
</script>

<template>
  <div id="app">
    <div class="contact">
      <div class="contact-header">
        <h1>Contact</h1>
      </div>
      <hr>

      <div class="map-with-text">
        <MapComponent class="map"/>
        <div class="contact-text">
          <h1>Contact Us</h1>
          <h3>Contact: Julie Chapman (Office Manager / Customer Service)</h3>
          <h3>Email: <a class="link" href="mailto:info@gatorpkg.com">info@gatorpkg.com</a> </h3>
          <h3>Phone: <a class="link" href="tel:734-222-8265">734-222-8265</a></h3>
        </div>
      </div>

      <div class="contact-form">
        <form @submit="submitForm">
          <label for="name">Name</label>
          <input id="name" type="text" v-model="formData.name" :class="{ error: errors.name }"
            placeholder="Enter your name" />
          <span class="error-message" v-if="errors.name">{{ errors.name }}</span>

          <label for="email">Email</label>
          <input id="email" type="email" v-model="formData.email" :class="{ error: errors.email }"
            placeholder="Enter your email address" />
          <span class="error-message" v-if="errors.email">{{ errors.email }}</span>

          <label for="phone">Phone</label>
          <input id="phone" type="tel" v-model="formData.phone" :class="{ error: errors.phone }"
            placeholder="Enter your phone number" />
          <span class="error-message" v-if="errors.phone">{{ errors.phone }}</span>

          <label for="subject">Subject</label>
          <input id="subject" type="text" v-model="formData.subject" :class="{ error: errors.subject }"
            placeholder="Enter your subject" />
          <span class="error-message" v-if="errors.subject">{{ errors.subject }}</span>

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

      <div class="contact-info">
        <hr>
        <img src="/images/sawblade.webp" alt="sawblade" loading="eager" />
        <h2>Need a quote or more information?</h2>
        <h3>Contact: Julie Chapman (Office Manager / Customer Service)</h3>
        <h3>Email: <a href="mailto:info@gatorpkg.com">info@gatorpkg.com</a> </h3>
        <h3>Phone: <a href="tel:734-222-8265">734-222-8265</a></h3>
      </div>
      <FooterComponent />
    </div>
  </div>
</template>

<style scoped>
.contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.contact hr {
  width: 70vw;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  border: 2px solid #222222;
}

.contact-header {
  display: flex;
  flex-direction: column;
  max-width: 70vw;
  text-align: center;
  align-items: center;
  justify-content: center;
}

.contact-header h1 {
  position: relative;
  font-size: 2.5rem;
  margin: 1.25rem 1.25rem -0.25rem 1.25rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
}

.map-with-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 80vw;
}

.contact-text {
  flex: 1;
  padding: 1rem;
  color: white;
  text-align: center;
}

.contact-text h1 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}
.contact-text h3 {
  font-size: 1rem;
  margin: 0.3rem;
}

.map {
  width: 100%;
  max-width: 100%;
  height: 40vh;
}

.contact-form {
  display: flex;
  flex-direction: column;
  position: relative;
  top: 0;
  left: 0;
  color: white;
  border: #303030 3px solid;
  background-color: #222222;
  border-radius: 10px;
  width: 80vw;
  max-width: 80vw;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 10px;
}

.contact-form label {
  font-size: 14px;
  margin-top: 10px;
}

.contact-form input,
.contact-form textarea {
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  background-color: #303030;
  color: white;
}

.contact-form textarea {
  resize: vertical;
  min-height: 100px;
}

.contact-form button {
  background-color: #303030;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
  cursor: pointer;
}

.contact-form button:hover {
  background-color: #404040;
}

.contact-form button:active {
  background-color: #353535;
}

.contact-form .error-message {
  color: red;
  font-size: 14px;
  margin-top: -5px;
  margin-bottom: 10px;
}

.contact-form input.error,
.contact-form textarea.error {
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

.contact-info {
  max-width: 80vw;
  margin: 1rem;
  text-align: center;
}

.contact-info img {
  width: 5rem;
  height: auto;
  max-width: 5rem;
  margin-top: 1rem;
}

.contact-info h2 {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}

.contact-info h3 {
  font-size: 1rem;
  margin: 0.3rem;
}

.contact-info a {
  color: #b9dbff;
  text-decoration: underline;
}

.contact-info hr {
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  border: 2px solid #222222;
  width: 70vw;
  max-width: 70vw;
  justify-self: center;
}
</style>
