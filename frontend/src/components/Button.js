export default function Button({
  text,
  type = "button",
}) {
  return (
    <button
      type={type}
      className="w-full py-3 bg-blue-600 rounded-lg font-semibold hover:bg-blue-700 transition"
    >
      {text}
    </button>
  );
}