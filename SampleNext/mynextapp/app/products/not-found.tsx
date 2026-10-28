
import Link from "next/link";

export default function ProductNotFound() {
  return (
    <div>
      <h3>Product Not Found</h3>
      <p>
        The product you are looking for doesn't exist
        or has been removed.
      </p>
      <Link href="/products">Back to Products</Link>
    </div>
  );
}
