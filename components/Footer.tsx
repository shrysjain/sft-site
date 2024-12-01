import Link from "next/link";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p>Fairfax County, Virginia</p>
            <p>Phone: (571) 685-9946</p>
            <p>Email: bishtshaurya314@gmail.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#mission" className="hover:text-blue-400">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#team" className="hover:text-blue-400">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="#join" className="hover:text-blue-400">
                  Join the Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-400">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <FaXTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-white hover:text-blue-400">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>&copy; 2024 Solve for Tomorrow &bull; all rights reserved</p>
        </div>
      </div>
    </footer>
  );
}
