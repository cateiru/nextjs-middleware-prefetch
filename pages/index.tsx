import Link from "next/link";

export default function Home() {
  return (
    <>
      <h2>Top</h2>
      <ul>
        <li>
          <Link href="/ssg">SSG</Link>
        </li>
        <li>
          <Link href="/ssr">SSR</Link>
        </li>
      </ul>
    </>
  );
}
