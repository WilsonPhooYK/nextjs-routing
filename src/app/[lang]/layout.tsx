import GlobalComp from "./GlobalComp"

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <GlobalComp />
      {children}
    </div>
  )
}
