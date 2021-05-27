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
import { mapState } from 'vuex'
import router from '../router'
export default {
  name: 'Login',
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      },
      isCorrect: false
    }
  },
  components: {

  },
  methods: {
    login() {
      const loginForm = document.querySelector('.login-form')
      this.$store.dispatch('login', this.credentials)
      if(this.$store.state.loginState === 401) {
        loginForm.id = 'login-alarm'
        setTimeout(() => {
          loginForm.id = ''
          this.$store.state.loginState = ''
        }, 1000)
      } 
    },
    signup() {
      router.push({name: 'Signup'})
    },
 
  },
  computed: {
    ...mapState([
      'loginState'
    ])
  }
}
</script>

<style>
.login {
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login .login-alarm {
  color: var(--color-pink);
}
.login .login-form {
  padding: 5rem;
  color: var(--color-pink);
  font-weight: 600;

  display: flex;
  flex-direction: column;
  margin-top: 15rem;
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

#login-form-rotate {
  transform: rotate(1.1);
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

#login-alarm {
  animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>