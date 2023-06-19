 <template>
  <v-card class="pa-5 align-center justify-center" elevation="24" width="400px">
    <v-text-field
      class="mb-4"
      v-model="email"
      label="E-mail"
      placeholder="Insira seu e-mail..."
      type="text"
      hide-details="auto"
      prepend-inner-icon="mdi mdi-email-outline"
      variant="plain"
    />
    <v-text-field
      v-model="password"
      label="Senha"
      placeholder="Insira sua senha..."
      :type="showPassword ? 'text' : 'password'"
      hide-details="auto"
      prepend-inner-icon="mdi-lock-outline"
      variant="plain"
    >
      <template v-slot:append>
        <v-icon v-if="showPassword" @click="showPassword = !showPassword"
          >mdi-eye-outline</v-icon
        >
        <v-icon v-if="!showPassword" @click="showPassword = !showPassword"
          >mdi-eye-off-outline</v-icon
        >
      </template>
    </v-text-field>

    <p class="mt-2 text-right text-hover">Recuperar Senha?</p>
    <v-btn
      variant="text"
      prepend-icon="mdi-login"
      class="mt-4 btn-styles"
      width="100%"
      @click="login"
      >Entrar</v-btn
    >

    <p class="mt-4 align-center justify-center text-center text-hover">
      Clique aqui para se cadastrar...
    </p>
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      email: null,
      password: null,
      showPassword: false,
      saveData: false,
    };
  },

  methods: {
    verifyEmail(email) {
      if (email.length >= 3) {
        var regex = /[@]/;
        if (regex.test(email)) {
          regex = /[.]/;
          let dividedEmail = email.split("@");
          if (regex.test(dividedEmail[1])) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    buildRequest() {
      let request = {
        email: this.email,
        password: this.password,
      };
      return request;
    },
    login() {
      if (this.email && this.password && this.verifyEmail(this.email)) {
        console.log(
          "requisição montada para enviar ao back: ",
          this.buildRequest()
        );
      } else {
        alert("Email ou senha incorreto...");
      }
    },
  },
};
</script>

<style scoped>
.v-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}

.btn-styles {
  background-color: darkslateblue;
  border-radius: 5px;
  color: white;
}
.text-hover:hover {
  color: blue;
  cursor: pointer;
}
</style>
