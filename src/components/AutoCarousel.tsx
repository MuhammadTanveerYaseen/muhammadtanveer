import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

type AutoCarouselProps = {
  children: React.ReactNode;
  intervalMs?: number;
  className?: string;
};

const AutoCarousel: React.FC<AutoCarouselProps> = ({ children, intervalMs = 2500, className }) => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const timerRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    if (!api) return;
    const start = () => {
      stop();
      timerRef.current = window.setInterval(() => {
        if (!api) return;
        if (api.canScrollNext()) {
          api.scrollNext();
        } else {
          api.scrollTo(0);
        }
      }, intervalMs);
    };
    const stop = () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };

    start();
    return () => stop();
  }, [api, intervalMs]);

  return (
    <Carousel setApi={setApi} className={className} opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {React.Children.map(children, (child, idx) => (
          <CarouselItem key={idx}>{child}</CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default AutoCarousel;



