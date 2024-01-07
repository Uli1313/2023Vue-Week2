import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
const apiUrl = "https://ec-course-api.hexschool.io/v2";

const app = createApp({
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      axios
        .post(`${apiUrl}/admin/signin`, this.user)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
          alert("登入成功");
          location.href = "product.html";
        })
        .catch((err) => alert("登入失敗，請重新輸入"));
    },
  },
  mounted() {},
});

app.mount("#app");
