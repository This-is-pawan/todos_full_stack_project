import Link from "next/link";
import React from "react";

const About = () => {
return ( <main className="min-h-screen bg-slate-950 text-white">


  {/* Hero */}
  <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:px-8">
    <div className="absolute left-1/2 top-10 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl" />

    <div className="relative mx-auto max-w-4xl text-center">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-cyan-400 text-3xl font-bold shadow-lg shadow-blue-500/20">
        ✓
      </div>

      <h1 className="mt-7 text-4xl font-extrabold sm:text-6xl">
        About{" "}
        <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          TodoApp
        </span>
      </h1>

      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
        TodoApp is a simple productivity application designed to help
        you organize your tasks, track your progress, and get more
        things done without unnecessary complexity.
      </p>
    </div>
  </section>

  {/* Mission */}
  <section className="border-t border-white/10 py-20">
    <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:items-center sm:px-6 lg:px-8">

      <div>
        <p className="text-sm font-semibold text-cyan-400">
          OUR PURPOSE
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Keep things simple.
        </h2>

        <p className="mt-5 leading-7 text-slate-400">
          Managing tasks shouldn&apos;t be complicated. TodoApp focuses
          on the essentials so you can create tasks, complete them,
          and track your progress with a clean and easy-to-use
          interface.
        </p>

        <p className="mt-4 leading-7 text-slate-400">
          Whether you are managing daily activities, personal goals,
          or development projects, TodoApp gives you a simple place
          to keep everything organized.
        </p>

        <Link
          href="/todos"
          className="mt-7 inline-flex rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400"
        >
          Start Managing Tasks →
        </Link>
      </div>

      {/* Mission Card */}
      <div className="rounded-3xl border border-white/10 bg-white/3 p-7 shadow-2xl">
        <div className="space-y-4">

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                ✓
              </span>

              <div>
                <p className="font-semibold">
                  Create Tasks
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Quickly add what needs to be done.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                ✓
              </span>

              <div>
                <p className="font-semibold">
                  Complete Tasks
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Mark your progress as you work.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
            <div className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                📊
              </span>

              <div>
                <p className="font-semibold">
                  Track Progress
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  See how much you have accomplished.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>

  {/* Features */}
  <section className="border-t border-white/10 py-20">
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

      <div className="text-center">
        <p className="text-sm font-semibold text-cyan-400">
          FEATURES
        </p>

        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
          Everything you need
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        {[
          {
            icon: "✓",
            title: "CRUD Tasks",
            text: "Create, read, update and delete your tasks easily.",
          },
          {
            icon: "🔒",
            title: "Secure",
            text: "Keep your account and tasks protected with authentication.",
          },
          {
            icon: "📱",
            title: "Responsive",
            text: "Use TodoApp comfortably on desktop, tablet and mobile.",
          },
          {
            icon: "⚡",
            title: "Fast",
            text: "A lightweight interface focused on speed and simplicity.",
          },
        ].map((feature) => (
          <div
            key={feature.title}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-blue-500/30 hover:bg-white/[0.05]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-xl">
              {feature.icon}
            </div>

            <h3 className="mt-5 font-semibold">
              {feature.title}
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              {feature.text}
            </p>
          </div>
        ))}

      </div>
    </div>
  </section>

  {/* CTA */}
  <section className="border-t border-white/10 px-5 py-20 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-linear-to-b from-blue-500/10 to-transparent p-8 text-center sm:p-12">

      <h2 className="text-3xl font-bold sm:text-4xl">
        Ready to organize your day?
      </h2>

      <p className="mx-auto mt-4 max-w-xl text-slate-400">
        Start creating tasks and take control of your productivity.
      </p>

      <Link
        href="/register"
        className="mt-8 inline-flex rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 px-7 py-3.5 text-sm font-semibold shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400"
      >
        Get Started →
      </Link>

    </div>
  </section>

</main>


);
};

export default About;
