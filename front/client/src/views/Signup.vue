<template>
  <div class="signup">
    <h5 class="login-alarm-id d-none">입력된 정보가 올바르지 않습니다.</h5>
    <h5 class="login-alarm-pw d-none">입력된 정보가 올바르지 않습니다.</h5>
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
      idUnCorrect: false,
      pwUnCorrect: false
    }
  },
  methods: {
    signup() {
      this.$store.dispatch('signup', this.credentials)
      if(this.$store.state.signupState === 1) {
        const alarm = document.querySelector('.login-alarm-id')
        alarm.classList.remove('d-none')
        setTimeout(() => {
          alarm.classList.add('d-none')
        }, 1000)
      } else if(this.$store.state.signupState === 2) {
        const alarm = document.querySelector('.login-alarm-pw')
        alarm.classList.remove('d-none')
        setTimeout(() => {
          alarm.classList.add('d-none')
        }, 1000)
      }
    this.$store.state.signupState = 0
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


</style>