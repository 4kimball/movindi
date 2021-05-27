<template>
  <div class="signup">
    <div class="signup-form" @keyup.enter="signup">
      <div class="input-info">
        <label for="username">아이디: </label>
        <input type="text" id="username" v-model="credentials.username">
      </div>
      <div class="input-info">
        <label for="password">비밀번호: </label>
        <input type="password" id="password" v-model="credentials.password">
      </div>
      <div class="input-info">
        <label for="passwordConfirmation">비밀번호 확인: </label>
        <input type="password" id="passwordConfirmation" v-model="credentials.passwordConfirmation">
      </div>
     
      <div id="signup-btn">
        <div></div>
      <button class="signup-btn" @click="signup">가입</button>
      </div>
    </div>
    <h5 v-if="isIdError">비밀번호가 일치하지 않습니다.</h5>
    <h5 v-else-if="isPwError">동일한 계정이 존재합니다.</h5>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      credentials: {
        username: '',
        password: '',
        passwordConfirmation: '',
        sns_id: 'snsId',
        sns_type: 'instagram'
      },
      isIdError: false,
      isPwError: false
    }
  },
  methods: {
    signup() {
      const signupForm = document.querySelector('.signup-form')
      this.$store.dispatch('signup', this.credentials)
      if(this.$store.state.signupState === 1) {
        signupForm.id = 'sign-alarm'
        this.isPwError = true
        setTimeout(() => {
          signupForm.id = ''
          this.isPwError = false
          this.$store.state.signupState = 0
        }, 1000);
      } else if(this.$store.state.signupState === 2) {
        signupForm.id = 'sign-alarm'
        this.isIdError = true
        setTimeout(() => {
          signupForm.id = ''
          this.isIdError = false
          this.$store.state.signupState = 0
        }, 1000);
      }
  }
}
}
</script>

<style>
.signup {
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.signup .login-alarm-id, .login-alarm-pw {
  color: var(--color-pink);
  transition: all .5s ease-in-out;
}
.signup .signup-form {
  padding: 5rem;

  color: var(--color-pink);
  font-weight: 600;
}

.signup .signup-form input {
  margin: 2rem;
  width: 400px;
  height: 50px;
  border: none;
  background-color: rgba(51, 51, 51, 0.5);
  border-radius: 7px;
  border-bottom: 3px solid var(--color-pink);
  color: white;

}

.signup .signup-form .signup-btn {
  width: 100px;
  align-items: flex-end;
  padding: 5px 0px;

  border:none;
  border-radius: 5px;
  background-color: var(--color-pink);
  color: white;
  font-weight: 800;
}

.signup .signup-form .input-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#signup-btn {
  display: flex;
  justify-content: space-between;
  margin-right: 2rem;
}

.signup .signup-form #sns-type {
  background: linear-gradient(70deg, #0d0d0d, #4d4d4d);
  -webkit-appearance: none;
}

.signup h5 {
  color: var(--color-pink);
}
#sign-alarm {
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