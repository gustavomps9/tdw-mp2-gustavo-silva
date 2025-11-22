import { useGetCharactersQuery } from "./api/rickAndMortyApi.js";

export default function Test() {
  const { data, error, isLoading } = useGetCharactersQuery({ page: 1 });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div>
      <h1>Characters:</h1>
      {data.results.map((c) => (
        <p key={c.id}>{c.name}</p>
      ))}
    </div>
  );
}
