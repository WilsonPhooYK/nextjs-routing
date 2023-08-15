import Link from "next/link";

export async function generateStaticParams() {
  return [{ lang: 'en' }];
}

export default function Page1() {
  return (
    <div className="grid">
      <h1>Page 1</h1>
      <Link href="/en/2">Go to page 2</Link>
      <Link href="/en">Go back to main</Link>
    </div>
  )
};
