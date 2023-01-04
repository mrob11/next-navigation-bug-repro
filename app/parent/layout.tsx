import HardNav from "./hard-nav"
import SoftNav from "./soft-nav"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <SoftNav />
      <HardNav />
      <main>{children}</main>
    </div>
  )
}
