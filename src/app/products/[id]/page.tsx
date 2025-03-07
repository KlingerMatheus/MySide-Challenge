export default function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return <div>ID Produto: {params.id}</div>;
}
