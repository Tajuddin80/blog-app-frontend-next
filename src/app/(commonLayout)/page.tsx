import { Button } from "@/components/ui/button";
import { cookies, headers } from "next/headers";

export default async function Home() {
  const cookieStore = await cookies();

  // console.log(cookieStore.get("better-auth.session-token"));

  const res = await fetch("http://localhost:4000/api/auth/get-session", {
    headers: {
      Cookie: cookieStore.toString(),
    }
  });

  console.log(await res.json());

  return (
    <div>
      <Button variant="outline">Click Here</Button>
    </div>
  );
}

