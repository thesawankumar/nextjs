"use client";

import Link from "next/link";


export default function Home() {
  return (
    <div>
      <h1>Welcome to the recipe app</h1>
      <Link href={"/recipe-list"}>Explore Recipes</Link>
    </div>
  );
}
