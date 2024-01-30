import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { GET_user } from "../api/route";

async function useUser() {
  //   const response = await GET_user();
  //   const user = await response.json();
  //   return user;
}

export default function Header() {
  const user = useUser();

  return (
    <header className="gap-18 flex h-28 w-full flex-row items-center justify-center bg-red-300 px-4">
      <h1 className="text-2xl font-bold text-white">How gay is....</h1>
      <nav className="space-x-4">
        <Link className="text-white hover:text-gray-300" href="/">
          Home
        </Link>
        <Link className="text-white hover:text-gray-300" href="/dashboard">
          Dashboard
        </Link>
        <Link
          className="gap-4 text-white hover:text-gray-300"
          href="/dashboard"
        >
          User Page
        </Link>
      </nav>

      {/* <div className="flex gap-4">
        <SignOutButton className=" hover:text-gray-300" />
        <SignInButton className="hover:text-gray-300 " />
      </div>

      <UserButton afterSignOutUrl="/" /> */}
    </header>
  );
}
