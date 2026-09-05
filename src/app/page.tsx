
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-white">

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute left-1/2 top-20 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute right-0 top-40 -z-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-[calc(100vh-73px)] max-w-7xl items-center px-5 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              Simple. Fast. Productive.
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
              Organize Your Tasks.
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                Get Things Done.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              TodoApp helps you organize your daily tasks, stay focused,
              and keep track of everything that matters — all in one simple
              and beautiful workspace.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/register"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400"
              >
                Get Started →
              </Link>

              <Link
                href="/login"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
              >
                Login
              </Link>
            </div>

            {/* Todo Preview */}
            <div className="mx-auto mt-16 max-w-3xl">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 shadow-2xl backdrop-blur-xl">
                <div className="rounded-xl border border-white/10 bg-slate-900/80 p-5 sm:p-7">

                  {/* Fake Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-5">
                    <div>
                      <p className="text-left text-lg font-bold">
                        My Tasks
                      </p>
                      <p className="mt-1 text-left text-xs text-slate-500">
                        Stay organized and productive
                      </p>
                    </div>

                    <span className="rounded-lg bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-400">
                      3 Tasks
                    </span>
                  </div>

                  {/* Tasks */}
                  <div className="mt-5 space-y-3">

                    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                      <span className="flex h-5 w-5 items-center justify-center rounded-md border border-cyan-400 text-xs text-cyan-400">
                        ✓
                      </span>

                      <span className="text-sm text-slate-400 line-through">
                        Complete project documentation
                      </span>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                      <span className="h-5 w-5 rounded-md border border-slate-600" />

                      <span className="text-sm text-slate-300">
                        Build TodoApp features
                      </span>
                    </div>

                    <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[0.03] p-4">
                      <span className="h-5 w-5 rounded-md border border-slate-600" />

                      <span className="text-sm text-slate-300">
                        Review today's tasks
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-white/10 bg-slate-950 py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-cyan-400">
              EVERYTHING YOU NEED
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Stay organized effortlessly
            </h2>

            <p className="mt-4 text-slate-400">
              Keep your tasks organized with a simple and powerful
              productivity experience.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {/* Feature 1 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">
                ✓
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Manage Tasks
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Create, update, complete, and delete your tasks from one
                simple dashboard.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-white/[0.05]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl">
                ⚡
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Fast & Simple
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                A clean interface designed to help you focus on your work
                instead of managing complicated tools.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-indigo-500/30 hover:bg-white/[0.05]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-2xl">
                📊
              </div>

              <h3 className="mt-5 text-lg font-semibold">
                Track Progress
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Keep an eye on completed and pending tasks so you always
                know what needs to be done.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">

          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-blue-500/10 to-transparent p-8 sm:p-12">

            <h2 className="text-3xl font-bold sm:text-4xl">
              Ready to get organized?
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-slate-400">
              Start managing your tasks today and turn your plans into
              progress.
            </p>

            <Link
              href="/register"
              className="mt-8 inline-flex rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400"
            >
              Create Your Account →
            </Link>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-7">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">

          <p>
            © {new Date().getFullYear()} TodoApp. All rights reserved.
          </p>

          <div className="flex gap-5">
            <Link
              href="/about"
              className="transition hover:text-cyan-400"
            >
              About
            </Link>

            <Link
              href="/todos"
              className="transition hover:text-cyan-400"
            >
              Todos
            </Link>

            <Link
              href="/login"
              className="transition hover:text-cyan-400"
            >
              Login
            </Link>
          </div>

        </div>
      </footer>

    </main>
  );
};

export default Home;

