import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-4 bg-zinc-900 text-white border-b border-zinc-800">
      <h1 className="text-2xl font-bold">
        AI Support
      </h1>

      <div className="flex gap-4">
        <Link href="/login">
          <button className="px-4 py-2 rounded-lg bg-white text-black font-medium">
            Login
          </button>
        </Link>

        <Link href="/signup">
          <button className="px-4 py-2 rounded-lg bg-blue-600">
            Signup
          </button>
        </Link>
      </div>
    </nav>
  );
}