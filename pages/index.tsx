import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>Top</div>
      <Link href="/foo">to foo</Link>
    </>
  );
}
