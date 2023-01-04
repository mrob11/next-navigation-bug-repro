import Link from "next/link"

export default function SoftNav() {
  return (
    <ul>
      <li>
        <Link href="./child-a">Soft Nav Child A</Link>
      </li>
      <li>
        <Link href="./child-b">Soft Nav Child B</Link>
      </li>
    </ul>
  )
}
