"use client";
import React from "react";
import Nav from "../../components/Nav";

export default function ThankYou() {
  return (
    <>
      <Nav />
      <div className="flex items-center justify-center h-screen">
        <div className="p-4 rounded shadow-lg ring ring-paxOrange">
          <div className="flex flex-col items-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-success w-28 h-28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-4xl font-bold">Vielen Dank !</h1>
            <p>
              Vielen Dank für Ihre Zeit. Falls Sie sich für ein Lizenzwechsel
              entschieden oder eine Erhöhung abgelehnt haben, werden wir uns
              telefonisch bei Ihnen melden.
            </p>
            <a className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span className="text-sm font-medium text-black">
                Sie können diese Seite nun schließen
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
