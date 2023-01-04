import Link from "next/link"

export default function SoftNav() {
  return (
    <ul>
      <li>
        <Link href="./child-a">Soft Nav Child A (will 404 unexpectedly)</Link>
      </li>
      <li>
        <Link href="./child-b">Soft Nav Child B (will 404 unexpectedly)</Link>
      </li>
    </ul>
  )
}
