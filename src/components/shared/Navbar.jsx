"use client"
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";
import Image from "next/image";
import { Avatar, Button, Dropdown, Label } from "@heroui/react";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineLogin } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <nav className="bg-white border-b border-gray-100 w-full h-16" />;

  const user = session?.user;
  const logout = async () => await authClient.signOut();

  return (
    <nav className="bg-white border-b border-gray-100 w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <Image src="/assets/logo.png" alt="SportNest" width={140} height={40} className="h-9 w-auto" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {[
            { href: "/", label: "Home" },
            { href: "/all-facilities", label: "All Facilities" },
            ...(user ? [
              { href: "/my-bookings", label: "My Bookings" },
              { href: "/add-facilities", label: "Add Facility" },
              { href: "/manage-my-facilities", label: "Manage" },
            ] : [])
          ].map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-[#2d6a4f] rounded-md hover:bg-[#d8f3dc]/40 transition-all"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <Dropdown>
              <Button className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 text-sm font-medium text-gray-700 transition-all" aria-label="Menu" variant="secondary">
                <Avatar size="sm">
                  <Avatar.Image referrerPolicy="no-referrer" alt={user.name} src={user.image} />
                  <Avatar.Fallback className="bg-[#2d6a4f] text-white text-xs">{user.name[0]}</Avatar.Fallback>
                </Avatar>
                <span className="text-gray-800">{user.name}</span>
                <RiArrowDropDownLine className="text-gray-500 text-lg" />
              </Button>
              <Dropdown.Popover>
                <Dropdown.Menu>
                  <Dropdown.Item id="user-info" textValue="User info">
                    <Label>
                      <p className="text-xs text-gray-400">Signed in as</p>
                      <p className="text-sm font-medium">{user.email}</p>
                    </Label>
                  </Dropdown.Item>
                  <Dropdown.Item id="add" textValue="Add Facilities">
                    <Link href="/add-facilities" className="block w-full text-sm">Add Facilities</Link>
                  </Dropdown.Item>
                  <Dropdown.Item id="bookings" textValue="My Bookings">
                    <Link href="/my-bookings" className="block w-full text-sm">My Bookings</Link>
                  </Dropdown.Item>
                  <Dropdown.Item id="manage" textValue="Manage">
                    <Link href="/manage-my-facilities" className="block w-full text-sm">Manage My Facilities</Link>
                  </Dropdown.Item>
                  <Dropdown.Item onClick={logout} id="logout" textValue="Logout" variant="danger">
                    <Label className="text-sm">Logout</Label>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Popover>
            </Dropdown>
          ) : (
            <Link href="/login">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#2d6a4f] hover:bg-[#40916c] text-white text-sm font-semibold rounded-lg transition-colors">
                <MdOutlineLogin /> Login
              </button>
            </Link>
          )}
        </div>

        {/* Hamburger */}
        <button className="md:hidden text-xl text-gray-700 p-1" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
          {[
            { href: "/", label: "Home" },
            { href: "/all-facilities", label: "All Facilities" },
            ...(user ? [
              { href: "/my-bookings", label: "My Bookings" },
              { href: "/add-facilities", label: "Add Facility" },
              { href: "/manage-my-facilities", label: "Manage My Facilities" },
            ] : [])
          ].map(({ href, label }) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#2d6a4f] hover:bg-[#d8f3dc]/40 rounded-md transition-all">
              {label}
            </Link>
          ))}
          {user ? (
            <button onClick={logout} className="mt-1 px-3 py-2 text-left text-sm font-medium text-red-500 hover:bg-red-50 rounded-md transition-all">
              Logout
            </button>
          ) : (
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              <button className="mt-2 w-full px-4 py-2 bg-[#2d6a4f] text-white text-sm font-semibold rounded-lg hover:bg-[#40916c] transition-colors">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;