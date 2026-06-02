export default function InputField({
  type,
  placeholder,
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-3 rounded-lg bg-zinc-800 outline-none border border-zinc-700 focus:border-blue-500"
    />
  );
}