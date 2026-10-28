
import Link from "next/link";

interface Product {
  id: number;
  name: string;
}

export default function Products() {
  const prods: Product[] = [
    { id: 1, name: "Electronics" },
    { id: 2, name: "HomeDecor" },
    { id: 3, name: "Fashion" },
  ];

  return (
    <div>
      <h2
        style={{
          fontWeight: "bold",
          color: "violet",
          textAlign: "center",
        }}
      >
        Products Catalogue
      </h2>

      <ul>
        {prods.map((prod) => (
          <li key={prod.id}>
            <Link href={`/products/${prod.id}`}>
              {prod.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
