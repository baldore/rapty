<template>
  <div class="main-content">
    <div class="container container-small">
      <h2 class="headline">Create an account</h2>

      <form @submit.prevent="handleSubmit">
        <div class="field">
          <label class="label" for="username">Username</label>
          <input
            class="textfield"
            v-model="fields.username"
            type="text"
            name="username"
            id="username"
          />
        </div>
        <div class="field">
          <label class="label" for="password">Password</label>
          <input
            class="textfield"
            v-model="fields.password"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div class="field">
          <label class="label" for="confirmPassword">Confirm Password</label>
          <input
            class="textfield"
            v-model="fields.confirmPassword"
            type="password"
            name="confirmPassword"
            id="confirmPassword"
          />
        </div>
        <div class="btn-container">
          <button class="btn btn-submit" type="submit">Submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { defineComponent, ref, reactive } from '@vue/composition-api'
import * as yup from 'yup'

async function runValidation<T>(
  schema: yup.ObjectSchema,
  fields: T
): Promise<{
  valid: boolean
  errors: ReturnType<typeof processErrors> | null
}> {
  const { valid, errors } = await schema
    .validate(fields, { abortEarly: false })
    .then(() => ({ valid: true, errors: null }))
    .catch((errors) => ({ valid: false, errors: processErrors(errors) }))

  return { valid, errors }
}

function processErrors<T>(errors: yup.ValidationError) {
  return errors.inner.reduce((prev, next) => {
    if (!prev[next.path]) {
      prev[next.path] = []
    }

    prev[next.path].push(next.message)

    return prev
  }, {} as { [key: string]: string[] })
}

const userSchema = yup
  .object({
    username: yup.string().required('Username is required'),
    password: yup.string().min(8).max(20).required('Password is required'),
    confirmPassword: yup
      .string()
      .test('match-passwords', 'Passwords must match', function (value) {
        return this.parent.password === value
      }),
  })
  .defined()

type User = yup.InferType<typeof userSchema>

export default defineComponent({
  setup() {
    const fields = reactive<User>({
      username: '',
      password: '',
      confirmPassword: '',
    })

    const handleSubmit = async () => {
      const { valid, errors } = await runValidation(userSchema, fields)

      if (valid) {
        console.log('submitting')
        return
      }

      console.log(errors)
    }

    return {
      fields,
      handleSubmit,
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
  @apply mb-2;
}

.label {
  @apply block text-sm mb-2;
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
</style>
