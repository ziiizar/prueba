import { ReactNode } from "react";

interface CarrouselProps {
  title?: string;
  children: ReactNode;
}

const Carrousel = ({ title, children }: CarrouselProps) => {
  return (
    <section className="flex flex-col gap-5 w-full">
      <h3 className="text-foreground text-3xl font-bold ">{title}</h3>
      <div className="flex gap-4 overflow-x-auto pb-4 px-4 snap-x snap-mandatory">
        {children}
      </div>
    </section>
  );
};

export default Carrousel;
