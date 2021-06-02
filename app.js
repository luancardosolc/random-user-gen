const app = Vue.createApp({
  data() {
    return {
      firstName: 'Luan',
      lastName: 'Cardoso',
      email: 'luan@luan.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg'
    }
  }
});

app.mount('#app');
