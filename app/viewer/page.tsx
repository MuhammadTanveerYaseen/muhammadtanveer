"use client";
import { useSearchParams, useRouter } from "next/navigation";

export default function ViewerPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const src = searchParams.get("src") || "";

  return (
    <div className="min-h-screen w-screen bg-black text-white">
      <div className="p-3 fixed top-0 left-0 z-10">
        <button onClick={() => router.back()} className="px-3 py-1 rounded bg-white/10 hover:bg-white/20">
          ← Back
        </button>
      </div>
      <div className="min-h-screen w-full flex justify-center">
        {src ? (
          <img
            src={src}
            alt="preview"
            className="w-auto max-w-[95vw] h-auto"
          />
        ) : (
          <div className="text-center p-6">No image specified.</div>
        )}
      </div>
    </div>
  );
}



