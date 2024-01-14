'use client'

import { useFormRegister } from '@foundation/forms/src/register'
import { signIn } from 'next-auth/react'
import { fetchGraphqlStatic } from '@foundation/network/src/fetch'
import { RegisterWithCredentialsDocument } from '@foundation/network/src/queries/generated'

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormRegister()
  console.log('errors ', errors)

  return (
    <main>
      <form
        onSubmit={handleSubmit(async (formData) => {
          const { data, error } = await fetchGraphqlStatic({
            document: RegisterWithCredentialsDocument,
            variables: {
              registerWithCredentialsInput: formData,
            },
          })
          if (error) {
            alert(error)
          }
          if (data) {
            signIn('credentials', {
              email: formData.email,
              password: formData.password,
              callbackUrl: '/',
            })
          }
        })}
      >
        <input {...register('email')} />
        <input {...register('password')} type="password" />
        <input {...register('name')} />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}
