import Link from "next/link";

export function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 pt-4 sm:pt-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Logo
            </Link>
          </div>
          <div className="flex items-center">
            <Link
              href="#mission"
              className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Mission
            </Link>
            <Link
              href="#team"
              className="text-white hover:text-blue-200 px-3 py-2 rounded-md text-sm font-medium"
            >
              Team
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
