
"use client";

import React, { FormEvent } from "react";
import Link from "next/link";

const DeleteTodo = () => {
  const handleDelete = (e:FormEvent<HTMLFormElement>) => {
    // Connect your delete-todo API here
    console.log("Todo deleted");
  };

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white sm:px-6 lg:px-8">
      <div className="flex min-h-[80vh] items-center justify-center">

        <div className="w-full max-w-md">

          {/* Delete Card */}
          <div className="rounded-3xl border border-red-500/20 bg-white/[0.03] p-6 text-center shadow-2xl backdrop-blur-xl sm:p-8">

            {/* Warning Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-3xl text-red-400">
              !
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-2xl font-bold">
              Delete Todo?
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-400">
              Are you sure you want to delete this todo? This action
              cannot be undone.
            </p>

            {/* Todo Preview */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-left">

              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Todo
              </p>

              <h2 className="mt-2 font-semibold text-white">
                Complete TodoApp project
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Finish frontend and backend integration.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-lg bg-blue-500/10 px-2.5 py-1 text-xs text-blue-400">
                  Work
                </span>

                <span className="rounded-lg bg-yellow-500/10 px-2.5 py-1 text-xs text-yellow-400">
                  Medium Priority
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">

              <Link
                href="/todos"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-slate-400 transition hover:bg-white/[0.08] hover:text-white"
              >
                Cancel
              </Link>

              <button
                type="button"
                onClick={handleDelete}
                className="rounded-xl bg-red-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-500/10 transition hover:bg-red-400 hover:-translate-y-0.5"
              >
                Delete Todo
              </button>

            </div>
          </div>

          {/* Back Link */}
          <div className="mt-5 text-center">
            <Link
              href="/todos"
              className="text-sm text-blue-400 transition hover:text-cyan-400"
            >
              ← Back to Todos
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
};

export default DeleteTodo;

