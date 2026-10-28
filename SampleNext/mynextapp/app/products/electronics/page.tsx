
import Link from "next/link";

export default function Electronics() {
  return (
    <div>
      <h2>Electronics Hub</h2>
      <p>Select a category</p>

      <ul>
        <li>
          <Link href="/electronics/laptop">Laptop</Link>
        </li>
        <li>
          <Link href="/electronics/headphones">
            Headphones
          </Link>
        </li>
      </ul>
    </div>
  );
}
