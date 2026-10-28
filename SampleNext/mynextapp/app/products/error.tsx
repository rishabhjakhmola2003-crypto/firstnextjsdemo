"use client";

export default function ProductsError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section role="alert">
      <h2>Something went wrong while loading products.</h2>
      <button type="button" onClick={reset}>
        Try again
      </button>
    </section>
  );
}