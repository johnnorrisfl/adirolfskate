import React from "react"
import Link from "./link"

const Navigation = () => (
  <nav className="flex space-x-4 place-content-start align-center mt-2">
    <div>Jump to:</div>
    <ul className="flex justify-start space-x-4 flex-nowrap">
      <li>
        <Link href="#events">Events</Link>
      </li>
      <li>
        <Link href="#socials">Socials</Link>
      </li>
      {/* <li>
        <Link href="#lessons">Lessons</Link>
      </li>
      <li>
        <Link href="#donate">Donate</Link>
      </li>
      <li>
        <Link href="#merch">Merch</Link>
      </li> */}
    </ul>
  </nav>
)

export default Navigation
