<template>
  <v-row no-gutters class="landing pa-0 ma-0">
    <v-col class="d-none d-md-block grey" cols="4"> </v-col>
    <v-col class="col-12 col-md-8">
      <base-top-bar class="main_bar" elevation="0" color="transparent">
      </base-top-bar>
      <v-container
        class="main_panel d-flex flex-column justify-center align-center"
      >
        <login-form @submit="handleLogin" style="width: 200px"></login-form>
        <v-btn to="/sign-up" class="mt-4" style="width: 200px">Sign Up</v-btn>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import BaseTopBar from "@/components/BaseTopBar.vue";
import LoginForm from "@/components/LoginForm.vue";

export default {
  components: { BaseTopBar, LoginForm },
  name: "Landing",
  methods: {
    async handleLogin(form) {
      this.$store.commit("loading");

      try {
        await this.$store.dispatch("login", {
          email: form.email,
          password: form.password,
        });
        // change route to dashboard
        this.$router.push("/main");
      } catch (e) {
        switch (e.code) {
          case "auth/wrong-password":
          case "auth/user-not-found":
            this.$store.commit("alert", {
              message: "아이디 또는 비밀번호가 올바르지 않습니다!",
            });
            break;
          case "user-unauthorized":
            this.$store.commit("alert", {
              message:
                "계정이 확인되지 않았습니다. 계정 확인에는 최대 1~2일이 소요됩니다.",
              timeMs: 10000,
            });
            break;
          default:
            this.$store.commit("alert", { message: e.code });
            console.dir(e);
        }
      }
      this.$store.commit("unLoading");
    },
  },
};
</script>

<style scoped lang="scss">
.landing {
  height: 100%;
  width: 100%;
}
.main_panel {
  height: calc(100vh - 64px);
}
</style>
