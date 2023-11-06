import { useRouter } from "next/router";

export default function Home() {
  const { query } = useRouter();

  return <div style={{ fontFamily: "sans-serif" }}>Hello, {query.name}!</div>;
}
