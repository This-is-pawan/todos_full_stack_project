
"use client";

import React, { FormEvent, useState } from "react";
import Link from "next/link";

const AddTodo = () => {
  const [priority, setPriority] = useState("Medium");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect your create-todo API here
    console.log("Todo submitted");
  };

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-8">
          <Link
            href="/todos"
            className="inline-flex items-center text-sm text-slate-500 transition hover:text-cyan-400"
          >
            ← Back to Todos
          </Link>

          <p className="mt-7 text-sm font-semibold text-cyan-400">
            TASK MANAGER
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Add New Todo
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Create a new task and keep your day organized.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl sm:p-8">

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Todo Title */}
            <div>
              <label
                htmlFor="title"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Todo Title
              </label>

              <input
                id="title"
                name="title"
                type="text"
                placeholder="e.g. Complete React project"
                required
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="description"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Description
              </label>

              <textarea
                id="description"
                name="description"
                rows={5}
                placeholder="Describe what needs to be done..."
                className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-600 transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Category + Priority */}
            <div className="grid gap-5 sm:grid-cols-2">

              {/* Category */}
              <div>
                <label
                  htmlFor="category"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Category
                </label>

                <select
                  id="category"
                  name="category"
                  className="w-full appearance-none rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="Personal">Personal</option>
                  <option value="Work">Work</option>
                  <option value="Study">Study</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Priority */}
              <div>
                <label
                  htmlFor="priority"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Priority
                </label>

                <select
                  id="priority"
                  name="priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High</option>
                </select>
              </div>
            </div>

            {/* Due Date */}
            <div>
              <label
                htmlFor="dueDate"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Due Date
              </label>

              <input
                id="dueDate"
                name="dueDate"
                type="date"
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Priority Preview */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                Selected Priority
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span
                  className={`h-3 w-3 rounded-full ${
                    priority === "High"
                      ? "bg-red-400"
                      : priority === "Medium"
                        ? "bg-yellow-400"
                        : "bg-cyan-400"
                  }`}
                />

                <span className="text-sm font-medium text-slate-300">
                  {priority} Priority
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col-reverse gap-3 pt-2 sm:flex-row sm:justify-end">

              <Link
                href="/todos"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-center text-sm font-semibold text-slate-400 transition hover:bg-white/[0.08] hover:text-white"
              >
                Cancel
              </Link>

              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400 active:translate-y-0"
              >
                Create Todo →
              </button>

            </div>
          </form>
        </div>

        {/* Helper */}
        <p className="mt-5 text-center text-xs text-slate-600">
          You can edit or delete your todo anytime.
        </p>

      </div>
    </main>
  );
};

export default AddTodo;

