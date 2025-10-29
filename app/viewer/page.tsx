// Force dynamic rendering to avoid static prerender issues when using search params
export const dynamic = "force-dynamic";

export default function ViewerPage({
  searchParams,
}: {
  searchParams: { src?: string };
}) {
  const src = typeof searchParams?.src === "string" ? searchParams.src : "";

  return (
    <div className="min-h-screen w-screen bg-black text-white">
      <div className="p-3 fixed top-0 left-0 z-10">
        <a href="/" className="px-3 py-1 rounded bg-white/10 hover:bg-white/20">
          ← Back
        </a>
      </div>
      <div className="min-h-screen w-full flex justify-center">
        {src ? (
          <img src={src} alt="preview" className="w-auto max-w-[95vw] h-auto" />
        ) : (
          <div className="text-center p-6">No image specified.</div>
        )}
      </div>
    </div>
  );
}



