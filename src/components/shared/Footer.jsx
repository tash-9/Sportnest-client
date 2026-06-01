import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail, MdOutlinePhone, MdOutlineLocationOn } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-[#1a1f2e] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-3xl mx-auto">
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Contact
            </h3>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MdOutlineEmail className="text-green-500 text-lg" />
                support@sportnest.com
              </li>

              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MdOutlinePhone className="text-green-500 text-lg" />
                +880 1234 567890
              </li>

              <li className="flex items-center gap-3 text-sm text-gray-400">
                <MdOutlineLocationOn className="text-green-500 text-lg" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:translate-x-50">
            <h3 className="font-semibold text-white mb-5 text-sm uppercase tracking-wider">
              Social
            </h3>

            <ul className="space-y-4">
              {[
                { icon: <FaInstagram />, label: "Instagram" },
                { icon: <CiFacebook />, label: "Facebook" },
                { icon: <FaXTwitter />, label: "X" },
              ].map(({ icon, label }) => (
                <li
                  key={label}
                  className="flex items-center gap-3 text-sm text-gray-400 hover:text-white cursor-pointer transition-colors"
                >
                  <span className="text-green-500 text-lg">{icon}</span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-sm text-gray-300">
            © 2026 SportNest. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 mt-1">
            Play Better · Book Faster
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;