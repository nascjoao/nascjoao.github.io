"use client";
import dayjs from "dayjs";
import React from "react";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export default function ToPostDate({ children }: { children: string }) {
  return <span>{dayjs().to(children)}</span>;
}
