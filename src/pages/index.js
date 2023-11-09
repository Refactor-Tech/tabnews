import { useRouter } from "next/router";

export default function Home() {
  const { query } = useRouter();
  const person = Boolean(query.name) ? query.name : "Anonymous";

  return <div style={{ fontFamily: "sans-serif" }}>Hello, {person}!</div>;
}
