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
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="w-3/4 max-w-3xl mx-auto my-4 p-8 bg-white border border-gray-200 rounded-3xl shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          {title}
        </h1>

        <h2 className="text-base md:text-lg text-gray-600 mb-6">by {author}</h2>

        <p className="text-gray-800 leading-relaxed text-lg">{summary}</p>
      </div>
    </div>
  );
}
