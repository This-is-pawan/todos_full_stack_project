'use client'
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div>
          <p className="text-sm font-semibold text-cyan-400">
            DASHBOARD
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Welcome back 👋
          </h1>

          <p className="mt-2 text-slate-400">
            Here&apos;s an overview of your productivity.
          </p>
        </div>

        {/* Statistics */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Total Tasks
              </span>

              <span className="rounded-lg bg-blue-500/10 px-2 py-1 text-blue-400">
                ✓
              </span>
            </div>

            <p className="mt-4 text-3xl font-bold">24</p>
            <p className="mt-1 text-xs text-slate-500">
              All your tasks
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Completed
              </span>

              <span className="rounded-lg bg-cyan-500/10 px-2 py-1 text-cyan-400">
                ✓
              </span>
            </div>

            <p className="mt-4 text-3xl font-bold text-cyan-400">
              16
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Tasks completed
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Pending
              </span>

              <span className="rounded-lg bg-indigo-500/10 px-2 py-1 text-indigo-400">
                !
              </span>
            </div>

            <p className="mt-4 text-3xl font-bold text-indigo-400">
              8
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Tasks remaining
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-500">
                Completion
              </span>

              <span className="rounded-lg bg-blue-500/10 px-2 py-1 text-blue-400">
                %
              </span>
            </div>

            <p className="mt-4 text-3xl font-bold">
              67%
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Overall progress
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">

          {/* Progress */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:col-span-2">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">
                  Productivity Overview
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Your current task completion
                </p>
              </div>

              <span className="text-2xl font-bold text-cyan-400">
                67%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="mt-8 h-3 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-[67%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />
            </div>

            <div className="mt-3 flex justify-between text-xs text-slate-500">
              <span>16 completed</span>
              <span>24 total</span>
            </div>

            {/* Mini Stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs text-slate-500">
                  Today
                </p>
                <p className="mt-2 text-xl font-bold">
                  4
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs text-slate-500">
                  This Week
                </p>
                <p className="mt-2 text-xl font-bold">
                  12
                </p>
              </div>

              <div className="rounded-xl bg-white/[0.03] p-4">
                <p className="text-xs text-slate-500">
                  This Month
                </p>
                <p className="mt-2 text-xl font-bold">
                  24
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h2 className="text-lg font-semibold">
              Quick Actions
            </h2>

            <div className="mt-5 space-y-3">

              <Link
                href="/todos"
                className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-blue-500/30 hover:bg-blue-500/5"
              >
                <div>
                  <p className="text-sm font-medium">
                    View Todos
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Manage your tasks
                  </p>
                </div>

                <span className="text-blue-400">
                  →
                </span>
              </Link>

              <button className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left transition hover:border-cyan-500/30 hover:bg-cyan-500/5">
                <div>
                  <p className="text-sm font-medium">
                    Add New Todo
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Create a new task
                  </p>
                </div>

                <span className="text-cyan-400">
                  +
                </span>
              </button>

            </div>
          </div>
        </div>

        {/* Recent Tasks */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold">
                Recent Tasks
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Your latest activity
              </p>
            </div>

            <Link
              href="/todos"
              className="text-sm text-blue-400 hover:text-cyan-400"
            >
              View all →
            </Link>
          </div>

          <div className="mt-5 divide-y divide-white/5">

            {[
              ["Complete project documentation", true],
              ["Build CRUD API", false],
              ["Test authentication", false],
            ].map(([title, completed], index) => (
              <div
                key={index}
                className="flex items-center gap-4 py-4"
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-lg border ${
                    completed
                      ? "border-cyan-400 bg-cyan-400 text-slate-950"
                      : "border-slate-600"
                  }`}
                >
                  {completed && "✓"}
                </span>

                <span
                  className={`text-sm ${
                    completed
                      ? "text-slate-500 line-through"
                      : "text-slate-300"
                  }`}
                >
                  {title}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </main>
  );
};

export default Dashboard;

