import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="flex flex-col items-center justify-center text-center mt-40 px-6">
        <h1 className="text-6xl font-bold leading-tight">
          AI Powered <br /> Customer Support
        </h1>

        <p className="mt-6 text-zinc-400 max-w-2xl">
          Automate customer interactions using intelligent AI agents,
          ticket management, and real-time support systems.
        </p>

        <button className="mt-8 px-6 py-3 bg-blue-600 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>
    </main>
  );
}