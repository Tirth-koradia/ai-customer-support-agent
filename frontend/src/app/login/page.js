import InputField from "@/components/InputField";
import Button from "@/components/Button";

export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <form className="space-y-4">
          <InputField
            type="email"
            placeholder="Email"
          />

          <InputField
            type="password"
            placeholder="Password"
          />

          <Button text="Login" />
        </form>
      </div>
    </main>
  );
}