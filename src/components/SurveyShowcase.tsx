"use client";
import React from "react";
import AutoCarousel from "@/components/AutoCarousel";
import Image from "next/image";

const SurveyShowcase: React.FC = () => {
  const surveyImages = [
    "/survey/67011f3440fbea1f38d71390.webp",
    "/survey/67011f47e60d2664b0291a43.webp",
    "/survey/67011f5040fbea841cd713b3.webp",
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Surveys</h2>
          <p className="text-muted-foreground">Collect insights with elegant, conversion-optimized surveys</p>
        </div>

        <AutoCarousel className="rounded-3xl overflow-hidden glass-card p-6">
          {surveyImages.map((src, i) => (
            <div key={i} className="h-[70vh] md:h-[80vh] overflow-visible">
              <div className="relative mx-auto max-w-4xl">
                <Image
                  src={src}
                  alt="Survey showcase"
                  width={900}
                  height={1600}
                  sizes="(max-width: 768px) 90vw, 66vw"
                  unoptimized
                  className="w-full h-auto rounded-2xl bg-muted/20"
                  priority={i === 0}
                />
              </div>
            </div>
          ))}
        </AutoCarousel>
      </div>
    </section>
  );
};

export default SurveyShowcase;


