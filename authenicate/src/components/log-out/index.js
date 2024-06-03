"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { logoutAction } from "@/actions";
import { Button } from "../ui/button";

export default function AuthButtons() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const router = useRouter();

  async function handleLogout() {
    await logoutAction();
    setIsLoggedIn(false);
  }

  function handleLogin() {
    router.push("/sign-in");
  }

  function handleSignup() {
    router.push("/sign-up");
  }

  return (
    <div>
      {isLoggedIn ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <div className="flex gap-5">
          <Button onClick={handleLogin}>Login</Button>
          <Button onClick={handleSignup}>Signup</Button>
        </div>
      )}
    </div>
  );
}
