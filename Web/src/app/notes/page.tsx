"use client";

import clsx from "clsx";
import {
  ArrowRight,
  CreditCard,
  Laptop,
  Phone,
  Plus,
  Shield,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { searchNotes } from "../api/notes/route";

export default function NotesPage() {
  const [markdown, setMarkdown] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    searchNotes("The Hobbit").then((res) => {
      console.log(res);
    });
  }, []);
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 p-6 border-r border-gray-700">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search all components"
              className="w-full p-2 bg-gray-800 border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <ul className="space-y-2">
            <li className="text-gray-400">Setting up the database</li>
            <li className="text-gray-400">Second one</li>
            <li className="text-blue-400 font-semibold">The Hobbit</li>
            <li className="text-gray-400">The Grapes of Wrath</li>
            <li className="text-gray-400">Hamlet</li>
            <li className="text-gray-400">Life of PI</li>
            <li className="text-gray-400">Frankenstein</li>
            <li className="text-gray-400">The War of the Worlds</li>
            <li className="text-gray-400">Pride and Prejudice</li>
            <li className="text-gray-400">Grimms' Fairy Tales</li>
            <li className="text-gray-400">The Thirty-Nine Steps</li>
            <li className="text-gray-400">His Dark Materials</li>
            <li className="text-gray-400">A Brief History of Time</li>
            <li className="text-gray-400">Jude the Obscure</li>
            <li className="text-gray-400">The Lord of the Rings</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">The Hobbit</h1>
            <div className="flex space-x-2">
              <button className="p-2 bg-gray-800 rounded hover:bg-gray-700">
                <span className="text-gray-400">B</span>
              </button>
              <button className="p-2 bg-gray-800 rounded hover:bg-gray-700">
                <span className="text-gray-400">I</span>
              </button>
              <button className="p-2 bg-gray-800 rounded hover:bg-gray-700">
                <span className="text-gray-400">U</span>
              </button>
              <button className="p-2 bg-gray-800 rounded hover:bg-gray-700">
                <span className="text-gray-400">HR</span>
              </button>
              <button className="p-2 bg-gray-800 rounded hover:bg-gray-700">
                <span className="text-gray-400">S</span>
              </button>
              <button className="p-2 bg-gray-800 rounded hover:bg-gray-700">
                <span className="text-gray-400">T</span>
              </button>
              <button className="p-2 bg-gray-800 rounded hover:bg-gray-700">
                <span className="text-gray-400">V</span>
              </button>
              <button className="p-2 bg-gray-800 rounded hover:bg-gray-700">
                <span className="text-gray-400">E</span>
              </button>
              <button className="p-2 bg-gray-800 rounded hover:bg-gray-700">
                <span className="text-gray-400">P</span>
              </button>
              <button className="p-2 bg-gray-800 rounded hover:bg-gray-700">
                <span className="text-gray-400">M</span>
              </button>
              <button className="p-2 bg-gray-800 rounded hover:bg-gray-700">
                <span className="text-gray-400">Share</span>
              </button>
              <button className="p-2 bg-red-600 rounded hover:bg-red-500">
                <span className="text-white">Delete</span>
              </button>
            </div>
          </div>
          {/* Content */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <p className="mb-4">
                I felt these films had “too much,” whether it was all the added
                sideplots, action, new characters, or even the “CGI”. As a huge
                fan of J.R.R. Tolkien’s book, I decided to edit these movies
                down to match closer to what was written while also rectifying
                many common critiques. This project is for both the purist and
                casual fans alike, with the end result providing a more focused
                narrative that I find more enjoyable and emotionally impactful.
              </p>
              <p>
                — I initially edited with the book at my side, page by page,
                starting on June 19th, 2019 — After numerous revisions to make
                the edit seamless for general audiences and feel as professional
                as possible, I finished on December 24th, 2021. I also worked on
                two last revision, one in September 2023 and one released in
                June the 2024, where I am now fully satisfied with the cut after
                many years of work.
              </p>
            </div>
            <div className="w-1/2">
              <p className="mb-4">
                I felt these films had “too much,” whether it was all the added
                sideplots, action, new characters, or even the “CGI”. As a huge
                fan of J.R.R. Tolkien’s book, I decided to edit these movies
                down to match closer to what was written while also rectifying
                many common critiques. This project is for both the purist and
                casual fans alike, with the end result providing a more focused
                narrative that I find more enjoyable and emotionally impactful.
              </p>
              <p>
                I initially edited with the book at my side, page by page,
                starting on June 19th, 2019. After numerous revisions to make
                the edit seamless for general audiences and feel as professional
                as possible, I finished on December 24th, 2021. I also worked on
                two last revision, one in September 2023 and one released in
                June the 2024, where I am now fully satisfied with the cut after
                many years of work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
