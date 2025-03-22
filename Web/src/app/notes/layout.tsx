import { Metadata } from "next";
import * as React from "react";

import "@/styles/colors.css";

export const metadata: Metadata = {
  title: "Notes",
  description: "Notes",
};

export default function NotesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
