
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LuLoaderCircle, LuLogOut } from "react-icons/lu";
import { GlobalContext } from "@/app/contextapi";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AiOutlineLoading } from "react-icons/ai";

const Navbar = () => {
  const route=useRouter()
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const { auth_user_data, loading,GetAuthUser, set_auth_user_data} = GlobalContext();

  // Check whether user is logged in
  const isLoggedIn =
    auth_user_data &&
    !Array.isArray(auth_user_data) &&
    Boolean(auth_user_data.email);

  // Logout function
  const handleLogout = async () => {
    try {
      
   const result=    await axios.post("/api/auth/logout");
   if(result){
    toast.success('logout success')
     GetAuthUser()
      set_auth_user_data('')
     setProfileOpen(false);
     route.push('/')
   }


    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20">
            ✓
          </span>

          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            TodoApp
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            href="/todos"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
          >
            Todos
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
          >
            About
          </Link>

          <Link
            href="/dashboard"
            className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
          >
            Dashboard
          </Link>
        </div>

        {/* Desktop Authentication */}
        <div className="hidden items-center gap-3 md:flex">

          {loading ? (
            <LuLoaderCircle className="animate-spin text-2xl text-blue-500" />
          ) : isLoggedIn ? (

            /* Profile */
            <div className="relative">

              {/* Profile Circle */}
              <button
                type="button"
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-gray-200 bg-cyan-50 text-sm font-bold uppercase text-cyan-800 transition hover:border-cyan-400 hover:bg-cyan-100"
                aria-label="Open profile menu"
              >
                {auth_user_data?.image ? (
                  <img
                    src={auth_user_data.image}
                    alt={auth_user_data.name || "User"}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  auth_user_data?.name?.charAt(0) || "U"
                )}
              </button>

              {/* Profile Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 top-12 w-72 overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/40">

                  {/* User Information */}
                  <div className="border-b border-white/10 p-4">

                    <div className="flex items-center gap-3">

                      {/* Profile Image */}
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full border border-cyan-400/30 bg-cyan-50 text-lg font-bold uppercase text-cyan-800">

                        {auth_user_data?.image ? (
                          <img
                            src={auth_user_data.image}
                            alt={auth_user_data.name || "User"}
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          auth_user_data?.name?.charAt(0) || "U"
                        )}

                      </div>

                      {/* Name + Email */}
                      <div className="min-w-0">

                        <p className="truncate text-sm font-semibold text-white">
                          {auth_user_data?.name}
                        </p>

                        <p className="truncate text-xs text-slate-400">
                          {auth_user_data?.email}
                        </p>

                      </div>

                    </div>

                  </div>

                  {/* Profile Link */}
                  <div className="p-2">

                    <Link
                      href="/profile"
                      onClick={() => setProfileOpen(false)}
                      className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
                    >
                      View Profile
                    </Link>

                  </div>

                  {/* Logout */}
                  <div className="border-t border-white/10 p-2">

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex w-full items-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500/10 cursor-pointer flex "
                    >
                      <LuLogOut className="text-lg" />
                   {loading ? (
                                   <AiOutlineLoading className="animate-spin tansition" />
                                 ) : (
                                   "Logout"
                                 )}
                    </button>

                  </div>

                </div>
              )}

            </div>

          ) : (
            <>
              <Link
                href="/login"
                className="rounded-xl border border-blue-500/50 px-4 py-2 text-sm font-semibold text-blue-400 transition hover:border-blue-400 hover:bg-blue-500/10"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <span className="text-2xl">×</span>
          ) : (
            <span className="text-xl">☰</span>
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-slate-950 px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">

            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Home
            </Link>

            <Link
              href="/todos"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Todos
            </Link>

            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
            >
              About
            </Link>

            <Link
              href="/dashboard"
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-cyan-400"
            >
              Dashboard
            </Link>

            {/* Mobile Authentication */}
            {loading ? (
              <div className="mt-3 flex justify-center border-t border-white/10 pt-4">
                <LuLoaderCircle className="animate-spin text-2xl text-blue-500" />
              </div>
            ) : isLoggedIn ? (

              <div className="mt-3 border-t border-white/10 pt-4">

                {/* Mobile User Info */}
                <div className="mb-3 flex items-center gap-3 rounded-xl bg-white/5 p-3">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-cyan-50 font-bold uppercase text-cyan-800">

                    {auth_user_data?.image ? (
                      <img
                        src={auth_user_data.image}
                        alt={auth_user_data.name || "User"}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      auth_user_data?.name?.charAt(0) || "U"
                    )}

                  </div>

                  <div className="min-w-0">

                    <p className="truncate text-sm font-semibold text-white">
                      {auth_user_data?.name}
                    </p>

                    <p className="truncate text-xs text-slate-400">
                      {auth_user_data?.email}
                    </p>

                  </div>

                </div>

                {/* Mobile Profile */}
                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="mb-2 block rounded-xl border border-blue-500/50 px-4 py-3 text-center text-sm font-semibold text-blue-400 transition hover:bg-blue-500/10"
                >
                  View Profile
                </Link>

                {/* Mobile Logout */}
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500/10"
                >
                  <LuLogOut className="text-lg" />
                  Logout
                </button>

              </div>

            ) : (

              <div className="mt-3 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">

                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl border border-blue-500/50 px-4 py-3 text-center text-sm font-semibold text-blue-400 transition hover:bg-blue-500/10"
                >
                  Login
                </Link>

                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:from-blue-500 hover:to-cyan-400"
                >
                  Register
                </Link>

              </div>

            )}

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;




