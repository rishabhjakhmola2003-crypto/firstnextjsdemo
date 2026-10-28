
import { notFound } from "next/navigation";

interface ProdProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({
  params,
}: ProdProps) {
  const { id } = await params;

  const prodIds = ["1", "2", "3"];

  if (!prodIds.includes(id)) {
    notFound();
  }

  return (
    <div>
      <h2>Product Details: {id}</h2>
      <p>Dynamic route example for product #{id}</p>
    </div>
  );
}
