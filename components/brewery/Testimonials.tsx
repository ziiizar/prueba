import { opinions } from "@/mocks";
import TestimonialCard from "./TestimonialCard";
const Testimonials = () => {
  return (
    <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-semibold">Opiniones</h3>
        {opinions.map((opinion) => (
            <TestimonialCard key={opinion.id} opinion={opinion} />
        ))}
    </div>
  )
}

export default Testimonials