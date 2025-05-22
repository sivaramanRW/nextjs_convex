"use client";

import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

export default function Home() {
  const tasks = useQuery(api.tasks.get);
  const data = useQuery(api.data.get)

  return (
    <main>
      {tasks?.map(({ _id, text, isCompleted }) => <div key={_id}>{text}{isCompleted}</div>)}
      {data?.map(({ _id, text, isCompleted, something }) => <div key={_id}>{text}{isCompleted}{something}</div>)}
    </main>
  );``
}