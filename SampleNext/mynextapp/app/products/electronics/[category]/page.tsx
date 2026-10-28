
interface CategoryProps {
  params: Promise<{ category: string }>;
}

export default async function Category({
  params,
}: CategoryProps) {
  const { category } = await params;

  return (
    <div>
      <h2>Category: {category.toUpperCase()}</h2>
      <p>
        Browsing items under the {category} category.
      </p>
    </div>
  );
}
