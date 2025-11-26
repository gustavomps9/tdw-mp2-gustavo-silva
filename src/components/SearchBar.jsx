export default function SearchBar({ value, onChange }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search characters..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 rounded bg-gray-700 text-white placeholder-gray-300"
      />
    </div>
  );
}
