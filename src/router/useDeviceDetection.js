import { ref, onMounted, onBeforeUnmount } from 'vue';

export default function useDeviceDetection() {
  const isMobile = ref(false);

  const checkDevice = () => {
    const screenWidth = window.innerWidth
    const userAgent = navigator.userAgent.toLowerCase()
    const mobileUserAgents = [
      /android/,
      /webos/,
      /iphone/,
      /ipad/,
      /ipod/,
      /blackberry/,
      /windows phone/,
      /mobile/
    ]

    isMobile.value = screenWidth <= 768 || mobileUserAgents.some(agent => userAgent.match(agent));
  }

  onMounted(() => {
    checkDevice();
    window.addEventListener('resize', checkDevice);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkDevice);
  });

  return { isMobile };
}
