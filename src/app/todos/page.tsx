
"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Todos = () => {
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(false);
const route=useRouter()
  const todos = [
    {
      id: 1,
      title: "Complete TodoApp project",
      description: "Finish frontend and backend integration",
      completed: true,
    },
    {
      id: 2,
      title: "Build CRUD API",
      description: "Create, update, delete and fetch todos",
      completed: false,
    },
    {
      id: 3,
      title: "Test authentication",
      description: "Check login and registration functionality",
      completed: false,
    },
    {
      id: 4,
      title: "Deploy application",
      description: "Deploy the TodoApp to production",
      completed: false,
    },
  ];
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    setLoading(true);
    try {
      const data = {};
      e.preventDefault();
      const result = await axios.post("/api/auth/createtodo", data, {
        withCredentials: true,
      });
      if (result.data) {
        route.push("/todos");
      toast.success("create success");
      }
    } catch (error) {
      console.log(error);
      toast.error(error instanceof Error ? error.message : String(error))
    } finally {
      setLoading(false);
    }
  };
  const filteredTodos =
    filter === "All"
      ? todos
      : filter === "Completed"
        ? todos.filter((todo) => todo.completed)
        : todos.filter((todo) => !todo.completed);

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

          <button className="rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400 cursor-pointer">
       <Link href={`/addTodo`}>   + Add Todo</Link>  
          </button>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-slate-500">Total Tasks</p>
            <p className="mt-2 text-3xl font-bold">4</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-slate-500">Completed</p>
            <p className="mt-2 text-3xl font-bold text-cyan-400">1</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <p className="text-sm text-slate-500">Pending</p>
            <p className="mt-2 text-3xl font-bold text-blue-400">3</p>
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
          {filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-blue-500/30 hover:bg-white/[0.05]"
            >
              <div className="flex items-start gap-4">

                {/* Checkbox */}
                <button
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
                  <h2
                    className={`font-semibold ${
                      todo.completed
                        ? "text-slate-500 line-through"
                        : "text-white"
                    }`}
                  >
                    {todo.title}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {todo.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 opacity-100 sm:opacity-0 sm:transition sm:group-hover:opacity-100">
                  <button className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-400 transition hover:border-blue-500/30 hover:text-blue-400">
                <Link href={`/todos/edit`}>  Edit</Link>  
                  </button>

                  <button className="rounded-lg border border-red-500/20 px-3 py-2 text-xs text-red-400 transition hover:bg-red-500/10">
               <Link href={`/todos/delete`}>  Delete</Link>          
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Link */}
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

