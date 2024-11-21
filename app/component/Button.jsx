export default function Button({ children, className }) {
  return (
    <button
      className={`mt-8 px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-lg hover:opacity-90 transition ${className}`}
    >
      {children}
    </button>
  );
}
