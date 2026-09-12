
"use client";

import React, { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { GlobalContext } from "@/app/contextapi";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { AiOutlineLoading } from "react-icons/ai";

interface TodoData {
  _id: string;
  userId: string;
  todolist: string;
  description: string;
  category: string;
  prioity: string;
  due_date: string;
  completed?: boolean;
}

const EditTodo = () => {
  const params = useParams();
  const router = useRouter();

  const id = params.id as string;

  const { auth_user_create_data, GetAuthUser} = GlobalContext();
  const [loading,setLoading] = useState(false);
  // Form states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Work");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const [completed, setCompleted] = useState(false);

  const currentTodo: TodoData | undefined =
    auth_user_create_data?.find(
      (item: TodoData) => item._id === id
    );

  // Load selected todo data into form
  useEffect(() => {
    if (!currentTodo) {
      return;
    }

    setTitle(currentTodo.todolist || "");
    setDescription(currentTodo.description || "");
    setCategory(currentTodo.category || "Work");
    setPriority(currentTodo.prioity || "Medium");
    setDueDate(currentTodo.due_date || "");
    setCompleted(currentTodo.completed || false);
  }, [currentTodo]);

  

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = {
        todolist: title,
        description: description,
        category: category,
        prioity: priority,
        due_date: dueDate,
        completed: completed,
      };


      const result = await axios.patch(
        `/api/auth/update/${id}`,
        data,
        {
          withCredentials: true,
        }
      );
if(result.data){
  toast.success("Todo updated successfully");
  GetAuthUser()
  router.push("/todos");
}
    } catch (error) {
      console.error("Update Todo Error:", error);

      if (axios.isAxiosError(error)) {
        toast.error("Backend error:", error.response?.data);
      }

     toast.error("Failed to update todo");
    } finally {
      setLoading(false);
    }
  };

  // If todo does not exist
  if (!currentTodo && !loading) {
    return (
      <main className="min-h-screen bg-slate-950 px-5 py-10 text-white">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/todos"
            className="text-sm text-slate-500 transition hover:text-cyan-400"
          >
            ← Back to Todos
          </Link>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center">
            <h1 className="text-2xl font-bold">
              Todo not found
            </h1>

            <p className="mt-2 text-sm text-slate-400">
              The todo you are trying to edit does not exist.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">

        {/* Header */}
        <div className="mb-8">
          <Link
            href="/todos"
            className="text-sm text-slate-500 transition hover:text-cyan-400"
          >
            ← Back to Todos
          </Link>

          <p className="mt-7 text-sm font-semibold text-cyan-400">
            TASK MANAGER
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Edit Todo
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Update your task details and save your changes.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-2xl backdrop-blur-xl sm:p-8">

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Title */}
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
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
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
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
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
                  value={category}
                  onChange={(e) =>
                    setCategory(e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="Personal">
                    Personal
                  </option>

                  <option value="Work">
                    Work
                  </option>

                  <option value="Study">
                    Study
                  </option>

                  <option value="Shopping">
                    Shopping
                  </option>

                  <option value="Other">
                    Other
                  </option>
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
                  onChange={(e) =>
                    setPriority(e.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="Low">
                    Low
                  </option>

                  <option value="Medium">
                    Medium
                  </option>

                  <option value="High">
                    High
                  </option>
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
                value={dueDate}
                onChange={(e) =>
                  setDueDate(e.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-300 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            {/* Completed */}
            <div className="rounded-xl border border-white/10 bg-slate-900/50 p-4">
              <label className="flex cursor-pointer items-center gap-3">

                <input
                  type="checkbox"
                  checked={completed}
                  onChange={(e) =>
                    setCompleted(e.target.checked)
                  }
                  className="h-5 w-5 rounded border-slate-600 bg-slate-900 accent-cyan-400"
                />

                <div>
                  <p className="text-sm font-medium text-slate-300">
                    Mark as completed
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Mark this task as finished.
                  </p>
                </div>

              </label>
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
                disabled={loading}
                className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? (
                                              <AiOutlineLoading className="animate-spin tansition" />
                                            ) : (
                                              "Edit"
                                            )}
              </button>

            </div>

          </form>
        </div>
      </div>
    </main>
  );
};

export default EditTodo;

