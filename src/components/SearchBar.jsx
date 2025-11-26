export default function SearchBar({ value, onChange }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search characters..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 rounded 
                   bg-gray-200 text-gray-900 
                   placeholder-gray-600
                   dark:bg-gray-700 dark:text-white 
                   dark:placeholder-gray-300
                   transition"
      />
    </div>
  );
}
