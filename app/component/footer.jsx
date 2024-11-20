export default function Footer() {
  return (
    <div className="relative">
      <footer className="py-6 text-center bg-yellow-100 dark:bg-yellow-500 absolute bottom-0 w-full inset-x-0">
        <p className="text-sm text-black dark:text-white font-mono">
          &copy; {new Date().getFullYear()} Niv Levi. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
