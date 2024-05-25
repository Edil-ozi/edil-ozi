import SiteHeader from "@/components/site-header"
// import { SiteFooter } from "@/components/site-footer"

interface AppLayoutProps {
  children: React.ReactNode
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      {/* <SiteFooter /> */}
    </>
  )
}
