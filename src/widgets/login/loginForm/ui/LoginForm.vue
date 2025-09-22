<template>
  <BaseCard>
    <template #title>
      Авторизация
    </template>

    <template #content>
      <form @submit.prevent>
        <SInput
          v-model="email"
          type="base"
          :name="EMAIL_FIELD_NAME"
          placeholder="Email"
          :disabled="false"
        />

        <SInput
          v-model="password"
          type="password"
          :name="PASSWORD_FIELD_NAME"
          placeholder="Пароль"
          :disabled="false"
        />

        <SButton
          type="primary"
          @click="submit"
        >
          Войти в аккаунт
        </SButton>
      </form>
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import { SButton, SInput } from '@scaffold-org/scaffold-uikit'
import { useField, useForm } from 'vee-validate'

import { BaseCard } from '@/shared/ui/components'

import { EMAIL_FIELD_NAME, loginFormValidationSchema, PASSWORD_FIELD_NAME } from '../config/validation'

const { value: email } = useField<string>(EMAIL_FIELD_NAME)
const { value: password } = useField<string>(PASSWORD_FIELD_NAME)

const { handleSubmit } = useForm({
	validationSchema: loginFormValidationSchema
})

const submitHandler = (): void => {
	console.log('Логин')
}

const submit = handleSubmit(submitHandler)

</script>

<style scoped>

</style>