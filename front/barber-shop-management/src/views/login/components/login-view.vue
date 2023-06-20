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
import PasswordEncoder from "@/utils/password-encoder.js";
export default {
  data() {
    return {
      encoder: new PasswordEncoder(),
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
    encoderPassword(password) {
      return this.encoder
        .encodingPassword(password)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          console.log("Erro do codificador: ", error);
          throw error;
        });
    },
    buildRequest() {
      return this.encoderPassword(this.password)
        .then((hashedPassword) => {
          let request = {
            email: this.email,
            password: hashedPassword,
          };
          return request;
        })
        .catch((error) => {
          console.error("Erro ao criar requisição:", error);
          throw error;
        });
    },    
    login() {
      if (this.email && this.password && this.verifyEmail(this.email)) {
        this.buildRequest()
          .then((request) => {
            console.log("Requisição montada para enviar ao back:", request);
          })
          .catch((error) => {
            console.error("Erro ao montar a requisição:", error);
          });
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
