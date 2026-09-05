
import Link from "next/link";
import React from "react";

const GlobalError = () => {
  return (
    <main className="min-h-screen w-full bg-slate-950 flex items-center justify-center px-6">
      <div className="relative w-full max-w-lg text-center">
        {/* Background Glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />

        {/* Card */}
        <div className="relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl px-8 py-12 shadow-2xl">
          {/* 404 */}
          <h1 className="text-8xl sm:text-9xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
            404
          </h1>

          {/* Heading */}
          <h2 className="mt-4 text-2xl sm:text-3xl font-bold text-white">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="mt-3 text-sm sm:text-base leading-6 text-slate-400 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
            It may have been moved, deleted, or the URL might be incorrect.
          </p>

          {/* Button */}
          <div className="mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:bg-blue-500 hover:-translate-y-0.5"
            >
              <span>←</span>
              Go Back Home
            </Link>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="mt-6 text-xs text-slate-500">
          Error Code: 404
        </p>
      </div>
    </main>
  );
};

export default GlobalError;

