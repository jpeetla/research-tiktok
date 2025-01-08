export function SummaryCard({
  title,
  author,
  summary,
}: {
  title: string;
  author: string;
  summary: string;
}) {
  return (
    <div className="max-w-xl w-full mx-auto my-4 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Title */}
      <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">
        {title}
      </h1>

      {/* Author */}
      <h2 className="text-sm md:text-base text-gray-600 mb-4">by {author}</h2>

      {/* Summary */}
      <p className="text-gray-800 leading-relaxed">{summary}</p>
    </div>
  );
}
