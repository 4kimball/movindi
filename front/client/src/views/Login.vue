<template>
  <div class="login">
    <div class="login-form" @keyup.enter="login">
    <div>
      <label for="username">ID</label>
      <input type="text" id="username" v-model="credentials.username">
    </div>
    <div>
      <label for="password">PW</label>
      <input type="password" id="password" v-model="credentials.password">
    </div>
    <div class="login-signup">
    <router-link :to="{ name: 'Signup'}" class="rlink" id="signup" @click="signup">아직 회원이 아니신가요?</router-link>
    <button @click="login">로그인</button>
    </div>
  </div>
  </div>
 
</template>

<script>
import router from '../router'
export default {
  name: 'Login',
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      }
    }
  },
  components: {

  },
  methods: {
    login() {
      this.$store.dispatch('login', this.credentials)
    },
    signup() {
      router.push({name: 'Signup'})
    }
  }
}
</script>

<style>
.login {
  width: 100%;
  height: 1000px;
}

.login .login-form {
  position: absolute;
  top: 250px;
  left: 550px;
  padding: 5rem;
  color: var(--color-pink);
  font-weight: 600;

  display: flex;
  flex-direction: column;
}

.login .login-form input {
  margin: 2rem;
  width: 400px;
  height: 50px;
  border: none;
  background-color: rgba(51, 51, 51, 0.5);
  border-radius: 7px;
  border-bottom: 3px solid var(--color-pink);
  color: white;
}


.login .login-form button {
  width: 100px;
  align-items: flex-end;
  padding: 5px 0px;

  border:none;
  border-radius: 5px;
  background-color: var(--color-pink);
  color: white;
  font-weight: 800;
}

.login-signup {
  display: flex;
  justify-content: space-around;
}

.login-signup span {
  font-weight: 500;
  color: var(--color-pink);
}

.login-signup  span:hover {
  color: #ff80b3;
  cursor: pointer;
}

</style>