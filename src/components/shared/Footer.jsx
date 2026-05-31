import Image from "next/image";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1a1f2e] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          <div className="md:col-span-1">
            <Image src="/assets/logo.png" alt="SportNest" width={140} height={40} className="h-10 w-auto brightness-200" />
            <p className="text-gray-400 mt-4 text-sm leading-relaxed">
              Book your favourite sports venues instantly. Football, cricket, badminton and more.
            </p>
          </div>

          {[
            {
              title: "Company",
              links: ["About Us", "Blogs", "Contact", "Careers", "Partner With Us"]
            },
            {
              title: "Legal",
              links: ["FAQs", "Privacy Policy", "Terms of Service", "Cancellation Policy"]
            }
          ].map(col => (
            <div key={col.title}>
              <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map(l => (
                  <li key={l}><span className="text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">{l}</span></li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Social</h3>
            <ul className="space-y-2">
              {[
                { icon: <FaInstagram />, label: "Instagram" },
                { icon: <CiFacebook />, label: "Facebook" },
                { icon: <CiLinkedin />, label: "LinkedIn" },
                { icon: <FaXTwitter />, label: "Twitter" },
              ].map(({ icon, label }) => (
                <li key={label} className="flex items-center gap-2 text-sm text-gray-400 hover:text-white cursor-pointer transition-colors">
                  {icon} {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} SportNest. All rights reserved.</span>
          <span>Play Better · Book Faster</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;