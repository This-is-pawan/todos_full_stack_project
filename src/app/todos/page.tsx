"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GlobalContext } from "../contextapi";

interface Todo {
  _id: string;
  userId: string;
  todolist: string;
  description: string;
  category: string;
  prioity: string;
  due_date: string;
  completed?: boolean;
  createdAt: string;
  updatedAt: string;
}

const Todos = () => {
  const [filter, setFilter] = useState("All");

  const { auth_user_create_data , GetAuthUser} = GlobalContext();

  

  // Make sure todos is always an array
  const todos: Todo[] = Array.isArray(auth_user_create_data)
    ? auth_user_create_data
    : [];

  // Filter todos
  const filteredTodos =
    filter === "All"
      ? todos
      : filter === "Completed"
        ? todos.filter((todo) => todo.completed === true)
        : todos.filter((todo) => todo.completed !== true);

  // Stats
  const totalTasks = todos.length;

  const completedTasks = todos.filter(
    (todo) => todo.completed === true
  ).length;

  const pendingTasks = todos.filter(
    (todo) => todo.completed !== true
  ).length;

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-cyan-400">
              TASK MANAGER
            </p>

            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
              My Todos
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              Organize your tasks and stay productive.
            </p>
          </div>

          <Link
            href="/addTodo"
            className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 text-center text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400"
          >
            + Add Todo
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          {/* Total */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-slate-500">
              Total Tasks
            </p>

            <p className="mt-2 text-3xl font-bold">
              {totalTasks}
            </p>
          </div>

          {/* Completed */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-slate-500">
              Completed
            </p>

            <p className="mt-2 text-3xl font-bold text-cyan-400">
              {completedTasks}
            </p>
          </div>

          {/* Pending */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-slate-500">
              Pending
            </p>

            <p className="mt-2 text-3xl font-bold text-blue-400">
              {pendingTasks}
            </p>
          </div>
        </div>

        {/* Filter */}
        <div className="mt-8 flex flex-wrap gap-2">
          {["All", "Pending", "Completed"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                filter === item
                  ? "bg-blue-600 text-white"
                  : "border border-white/10 bg-white/[0.03] text-slate-400 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <div className="mt-5 space-y-3">

          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <div
                key={todo._id}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-blue-500/30 hover:bg-white/[0.05]"
              >
                <div className="flex items-start gap-4">

                  {/* Checkbox */}
                  <button
                    type="button"
                    className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border transition ${
                      todo.completed
                        ? "border-cyan-400 bg-cyan-400 text-slate-950"
                        : "border-slate-600 hover:border-cyan-400"
                    }`}
                  >
                    {todo.completed && "✓"}
                  </button>

                  {/* Content */}
                  <div className="min-w-0 flex-1">

                    {/* Todo title */}
                    <h2
                      className={`font-semibold ${
                        todo.completed
                          ? "text-slate-500 line-through"
                          : "text-white"
                      }`}
                    >
                      {todo.todolist}
                    </h2>

                    {/* Description */}
                    <p className="mt-1 text-sm text-slate-500">
                      {todo.description}
                    </p>

                    {/* Todo information */}
                    <div className="mt-3 flex flex-wrap items-center gap-2">

                      {/* Category */}
                      <span className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slate-400">
                        {todo.category}
                      </span>

                      {/* Priority */}
                      <span
                        className={`rounded-lg px-2.5 py-1 text-xs font-medium ${
                          todo.prioity === "High"
                            ? "bg-red-500/10 text-red-400"
                            : todo.prioity === "Medium"
                              ? "bg-yellow-500/10 text-yellow-400"
                              : "bg-cyan-500/10 text-cyan-400"
                        }`}
                      >
                        {todo.prioity}
                      </span>

                      {/* Due date */}
                      <span className="text-xs text-slate-500">
                        Due:{" "}
                        {new Date(todo.due_date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 opacity-100 sm:opacity-0 sm:transition sm:group-hover:opacity-100">

                    {/* Edit */}
                    <Link
                      href={`/todos/edit/${todo._id}`}
                      className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-400 transition hover:border-blue-500/30 hover:text-blue-400"
                    >
                      Edit
                    </Link>

                    {/* Delete */}
                    <Link
                      href={`/todos/delete/${todo._id}`}
                      className="rounded-lg border border-red-500/20 px-3 py-2 text-xs text-red-400 transition hover:bg-red-500/10"
                    >
                      Delete
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            /* Empty state */
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center">
              <p className="text-lg font-semibold text-slate-300">
                No todos found
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Create your first todo to get started.
              </p>

              <Link
                href="/addTodo"
                className="mt-5 inline-block rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                + Create Todo
              </Link>
            </div>
          )}
        </div>

        {/* Dashboard */}
        <div className="mt-8 text-center">
          <Link
            href="/dashboard"
            className="text-sm text-blue-400 transition hover:text-cyan-400"
          >
            View your dashboard →
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Todos;