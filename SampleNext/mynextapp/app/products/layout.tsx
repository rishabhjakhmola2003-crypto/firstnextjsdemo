
export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div
        style={{
          background: "#dcdcdc",
          padding: "0.75rem",
          marginBottom: "1rem",
          borderRadius: "4px",
        }}
      >
        <strong>Products Header</strong>
      </div>

      {children}
    </div>
  );
}
