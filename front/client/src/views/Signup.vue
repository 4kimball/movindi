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
      <div class="input-info">
        <label for="snsId">SNS ID
          <select name="sns-id" id="sns-type" v-model="sns_type" required>
            <option value="instagram">Instgram</option>
            <option value="kakao">KaKaO</option>
        </select>
        : 
        </label>
        
        <input type="text" placeholder="선택사항 입니다." v-model="sns_id">
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
      
    }
  },
  methods: {
    signup() {
      this.$store.dispatch('signup', this.credentials)
    }
  }
}
</script>

<style>
.signup {
  width: 100%;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
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