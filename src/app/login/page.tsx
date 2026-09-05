"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FormEvent, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { toast } from "react-toastify";
import { GlobalContext } from "../contextapi";
type user_data = {
  email: string;
  password: string;
};
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState<user_data["email"]>("");
  const [password, setPassword] = useState<user_data["password"]>("");
  
  const route = useRouter();
  const { GetAuthUser,loading,setLoading}=GlobalContext()
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    try {
      const data = { email, password };
      e.preventDefault();
      const result = await axios.post("/api/auth/login", data, {
        withCredentials: true,
      });
      if (result.data) {
        GetAuthUser()
        route.push("/");
      toast.success("login success");
      }
    } catch (error) {
      console.log(error);
      toast.error(error instanceof Error ? error.message : String(error))
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="min-h-screen w-full bg-slate-950 flex items-center justify-center px-5 py-10">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative w-full max-w-md">
        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
          {/* Logo */}
          <div className="mb-7 flex justify-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-bold text-white shadow-lg shadow-blue-500/20">
                ✓
              </span>

              <span className="text-xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                TodoApp
              </span>
            </Link>
          </div>

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">Welcome Back</h1>

            <p className="mt-2 text-sm text-slate-400">
              Login to manage your todos
            </p>
          </div>

          {/* Form */}
          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Email Address
              </label>

              <input
                id="email"
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-slate-300"
                >
                  Password
                </label>

                <Link
                  href="/forgot-password"
                  className="text-xs text-blue-400 transition hover:text-cyan-400"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                    onChange={(e)=>setPassword(e.target.value)}
         
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 pr-16 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-medium text-slate-500 hover:text-cyan-400"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400 active:translate-y-0 flex justify-center items-center cursor-pointer"
            >
              {loading ? (
                <AiOutlineLoading className="animate-spin tansition" />
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Register */}
          <p className="mt-7 text-center text-sm text-slate-500">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="font-semibold text-blue-400 transition hover:text-cyan-400"
            >
              Create account
            </Link>
          </p>
        </div>

        {/* Bottom */}
        <p className="mt-5 text-center text-xs text-slate-600">
          Stay organized. Get things done.
        </p>
      </div>
    </main>
  );
};

export default Login;
