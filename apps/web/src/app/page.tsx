import { getAuth } from '@foundation/network/src/auth/authOptions'
import { add } from '@foundation/sample-lib'
import Link from 'next/link'

export default async function Home() {
  const session = await getAuth()
  return (
    <main>
      Hello world {add(23, 3)}
      {session?.user ? (
        <div>
          <Link href="/api/auth/signout">Sign out</Link>
        </div>
      ) : (
        <Link href="/signIn">Login</Link>
      )}
    </main>
  )
}
