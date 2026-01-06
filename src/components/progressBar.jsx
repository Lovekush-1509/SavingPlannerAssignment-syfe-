export default function ProgressBar({ value }) {
    return (
      <div className="w-full bg-gray-200 rounded h-3 mt-2">
        <div
          className="bg-blue-500 h-3 rounded transition-all duration-300"
          style={{ width: `${Math.min(value, 100)}%` }}
        />
      </div>
    );
  }
  