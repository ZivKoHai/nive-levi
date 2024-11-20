export default function Nav() {
  return (
    <nav className="p-6 sticky top-5 z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 rounded-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Niv Levi</div>
        <div className="space-x-6">
          <a href="#about" className="hover:text-gray-600 transition">
            About
          </a>
          <a href="#projects" className="hover:text-gray-600 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-600 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
