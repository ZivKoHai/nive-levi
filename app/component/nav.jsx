export default function Nav() {
  return (
    <nav className="p-6 sticky top-5 z-50 backdrop-blur-md bg-white/30 dark:bg-black/30 rounded-lg nav-animation">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">Niv Levi</div>
        <div className="space-x-6">
          <a href="#about" className="hover:text-gray-600 transition">
            About
          </a>
          <a
            href="#my-rival-brother"
            className="hover:text-gray-600 transition"
          >
            Rivalry
          </a>
          <a href="#military-life" className="hover:text-gray-600 transition">
            Military Life
          </a>
          <a href="#true-friendship" className="hover:text-gray-600 transition">
            True Friendship
          </a>
          <a href="#my-success" className="hover:text-gray-600 transition">
            My Success
          </a>
        </div>
      </div>
    </nav>
  );
}
