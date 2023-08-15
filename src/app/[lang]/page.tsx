import Link from "next/link"

export async function generateStaticParams() {
  return [{ lang: 'en' }];
}

export default function Home() {
  return (
    <div className="grid">
      <h1>Main page</h1>
      <Link href="/en/1">Go to page 1</Link>
    </div>
  )
}
