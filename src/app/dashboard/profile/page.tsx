
"use client";

import React, { useState } from "react";
import Link from "next/link";

const Profile = () => {
  const [editing, setEditing] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 px-5 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">

        {/* Page Header */}
        <div className="mb-8">
          <p className="text-sm font-semibold text-cyan-400">
            ACCOUNT
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            My Profile
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Manage your personal information and account settings.
          </p>
        </div>

        {/* Profile Card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl">

          {/* Cover */}
          <div className="h-32 bg-gradient-to-r from-blue-600/40 via-cyan-500/30 to-indigo-600/40 sm:h-40" />

          {/* Profile Info */}
          <div className="px-6 pb-7 sm:px-8">

            <div className="-mt-12 flex flex-col gap-5 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">

              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end">
                {/* Avatar */}
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-4 border-slate-950 bg-gradient-to-br from-blue-500 to-cyan-400 text-3xl font-bold text-white shadow-xl sm:h-28 sm:w-28">
                  P
                </div>

                <div className="sm:pb-1">
                  <h2 className="text-2xl font-bold">
                    Pawan
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    pawan@example.com
                  </p>
                </div>
              </div>

              <button
                onClick={() => setEditing(!editing)}
                className="rounded-xl border border-blue-500/40 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-400 transition hover:bg-blue-500/20 hover:text-cyan-400"
              >
                {editing ? "Cancel" : "Edit Profile"}
              </button>
            </div>

            {/* Divider */}
            <div className="my-7 border-t border-white/10" />

            {/* Profile Form */}
            <div className="grid gap-5 sm:grid-cols-2">

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  type="text"
                  defaultValue="Pawan"
                  disabled={!editing}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  defaultValue="pawan@example.com"
                  disabled={!editing}
                  className="w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>

              {/* Bio */}
              <div className="sm:col-span-2">
                <label
                  htmlFor="bio"
                  className="mb-2 block text-sm font-medium text-slate-300"
                >
                  Bio
                </label>

                <textarea
                  id="bio"
                  rows={4}
                  defaultValue="Focused on staying organized and getting things done."
                  disabled={!editing}
                  className="w-full resize-none rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </div>
            </div>

            {/* Save Button */}
            {editing && (
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setEditing(false)}
                  className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                ✓
              </span>

              <div>
                <p className="text-xs text-slate-500">
                  Total Tasks
                </p>

                <p className="text-2xl font-bold">
                  24
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                ✓
              </span>

              <div>
                <p className="text-xs text-slate-500">
                  Completed
                </p>

                <p className="text-2xl font-bold text-cyan-400">
                  16
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                %
              </span>

              <div>
                <p className="text-xs text-slate-500">
                  Completion Rate
                </p>

                <p className="text-2xl font-bold">
                  67%
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Account Settings */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

          <h2 className="text-lg font-semibold">
            Account Settings
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Manage your account and security.
          </p>

          <div className="mt-5 space-y-3">

            {/* Change Password */}
            <Link
              href="/change-password"
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-blue-500/30 hover:bg-blue-500/5"
            >
              <div>
                <p className="text-sm font-medium">
                  Change Password
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Update your account password
                </p>
              </div>

              <span className="text-blue-400">
                →
              </span>
            </Link>

            {/* Logout */}
            <button
              type="button"
              className="flex w-full items-center justify-between rounded-xl border border-red-500/10 bg-red-500/[0.02] p-4 text-left transition hover:border-red-500/30 hover:bg-red-500/5"
            >
              <div>
                <p className="text-sm font-medium text-red-400">
                  Logout
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Sign out from your account
                </p>
              </div>

              <span className="text-red-400">
                →
              </span>
            </button>

          </div>
        </div>

        {/* Back */}
        <div className="mt-6 text-center">
          <Link
            href="/dashboard"
            className="text-sm text-blue-400 transition hover:text-cyan-400"
          >
            ← Back to Dashboard
          </Link>
        </div>

      </div>
    </main>
  );
};

export default Profile;

