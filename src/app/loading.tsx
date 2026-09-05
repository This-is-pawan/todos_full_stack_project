
import React from "react";

const GlobalLoading = () => {
  return (
    <main className="min-h-screen w-full bg-slate-950 flex items-center justify-center px-5">
      <div className="flex flex-col items-center text-center">

        {/* Spinner */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-white/10" />

          {/* Animated Ring */}
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-blue-500 border-r-cyan-400" />

          {/* Logo */}
          <span className="text-xl font-bold text-cyan-400">
            ✓
          </span>
        </div>

        {/* App Name */}
        <h1 className="mt-6 text-xl font-bold">
          <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            TodoApp
          </span>
        </h1>

        {/* GlobalLoading Text */}
        <p className="mt-2 text-sm text-slate-500">
          GlobalLoading your tasks...
        </p>

        {/* GlobalLoading Dots */}
        <div className="mt-5 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-500" />
        </div>

      </div>
    </main>
  );
};

export default GlobalLoading;

