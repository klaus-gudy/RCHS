import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

export default async function Home() {
  const session = await getServerSession(options)

  return (
    <>
    {session ? (
        // <UserCard user={session?.user} pagetype={"Home"} />
        <h2>Home - Session</h2>
      ) : (
    <h2>Home - No session</h2>
    )}
    </>
    );
}
