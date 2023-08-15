import Link from "next/link";

export async function generateStaticParams() {
  return [{ lang: 'en' }];
}

export default function Page1() {
  return (
    <div className="grid">
      <h1>Page 2</h1>
      <Link href="/en/1">Go back to page 1</Link>
    </div>
  )
};
