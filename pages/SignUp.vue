<template>
  <div class="main-content">
    <div class="container container-small">
      <h2 class="headline">Create an account</h2>

      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(submitForm)">
          <div class="field">
            <ValidationProvider name="Username" rules="required" v-slot="{ errors }">
              <label class="label" for="username">Username</label>
              <input
                class="textfield"
                v-model="fields.username"
                type="text"
                name="username"
                id="username"
              />
              <div class="error-message" v-if="errors[0]">{{errors[0]}}</div>
            </ValidationProvider>
          </div>
          <div class="field">
            <ValidationProvider
              name="password"
              rules="required|min:8"
              v-slot="{ errors }"
              vid="password"
            >
              <label class="label" for="password">Password</label>
              <input
                class="textfield"
                v-model="fields.password"
                type="password"
                name="password"
                id="password"
              />
              <div class="error-message" v-if="errors[0]">{{errors[0]}}</div>
            </ValidationProvider>
          </div>
          <div class="field">
            <ValidationProvider
              name="Confirm Password"
              rules="required|confirmed:password"
              v-slot="{ errors }"
            >
              <label class="label" for="confirmPassword">Confirm Password</label>
              <input
                class="textfield"
                v-model="fields.confirmPassword"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
              />
              <div class="error-message" v-if="errors[0]">{{errors[0]}}</div>
            </ValidationProvider>
          </div>
          <div class="btn-container">
            <button class="btn btn-submit" type="submit" :disabled="isLoading">Submit</button>
          </div>
        </form>
      </ValidationObserver>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { defineComponent, ref, reactive } from '@vue/composition-api'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import * as yup from 'yup'

type User = {
  username: string
  password: string
  confirmPassword: string
}

export default defineComponent({
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  setup() {
    const isLoading = ref<boolean>(false)
    const fields = reactive<User>({
      username: '',
      password: '',
      confirmPassword: '',
    })

    const submitForm = async () => {
      isLoading.value = true
    }

    return {
      fields,
      isLoading,
      submitForm,
    }
  },
})
</script>

<style scoped>
.container-small {
  @apply max-w-sm bg-blue-700 text-white rounded-md mt-12 shadow-2xl;
}

.headline {
  @apply text-xl mb-2 font-bold;
}

.field {
  @apply mb-6;
}

.label {
  @apply block text-sm mb-2 font-bold;
}

.textfield {
  @apply min-w-full rounded-sm text-black px-4 py-2;
}

.btn-container {
  @apply mt-6;
}

.btn-submit {
  @apply px-8;
}

.error-message {
  @apply text-sm mt-2;
}
</style>
