<template>
  <div class="head_bar">
    <p class="title">MeMo</p>

    <button v-if="isAuthenticated" class="head_button" @click="logout">
      ログアウト
    </button>
    <button v-else class="head_button" @click="login">ログイン</button>
  </div>
</template>

<script>
import { firebase } from "@/firebase";
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["setUser"]),
    login() {
      console.log("login");
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          let user = result.user;
          console.log(user);
        })
        .catch(function(error) {
          console.log(error);
          // Handle Errors here.
          // var errorCode = error.code;
          // var errorMessage = error.message;
          // The email of the user's account used.
          // var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          // var credential = error.credential;
          // ...
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          console.log("ログアウトしました");
        })
        .catch(e => {
          console.log("ログアウトできませんでした" + e);
        });
      console.log("logout");
    }
  },
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    }
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      this.setUser(user);
    });
  }
};
</script>

<style>
.head_bar {
  display: flex;
  align-items: center;
  background-color: aqua;
  width: 100vw;
  height: 50px;
}
.head_button {
  border: 0;
  background-color: aqua;
  outline: 0;
}
.title {
  text-align: center;
  width: 10%;
  height: 90%;
  margin: auto 10px;
  font-size: 35px;
}
</style>
