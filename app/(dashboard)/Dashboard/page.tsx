import { options } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(options);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/server");
  }

  return (
    <>
      {/* <section className="flex flex-col gap-6">
        <UserCard user={session?.user} pagetype={"Server"} />
      </section> */}
      <h2>Dashboard</h2>
    </>
  );
}
