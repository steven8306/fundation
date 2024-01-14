'use client'

import { useFormLogin } from '@foundation/forms/src/login'
import { signIn } from 'next-auth/react'
import { fetchGraphqlStatic } from '@foundation/network/src/fetch'
import { RegisterWithCredentialsDocument } from '@foundation/network/src/queries/generated'

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormLogin()
  console.log('errors ', errors)

  return (
    <main>
      <form
        onSubmit={handleSubmit(async (formData) => {
          signIn('credentials', {
            email: formData.email,
            password: formData.password,
            callbackUrl: '/',
          })
        })}
      >
        <input {...register('email')} />
        <input {...register('password')} type="password" />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}
