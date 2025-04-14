import { Opinion } from "@/types";
import Image from "next/image";
const TestimonialCard = ({opinion}: {opinion:Opinion}) => {
  return (
    <div className="flex flex-col gap-1">
        <div className="flex justify-between">
            <div className="flex items-center gap-2">
                <Image src={opinion.user.avatar} alt={opinion.user.name} width={600} height={400} className="rounded-full size-[38px]" objectFit="cover" />
                <p className=" font-medium">{opinion.user.name}</p>
            </div>
            <button className="text-primary cursor-pointer"   >
                Responder
            </button>
        </div>
        <p className="text-sm ">{opinion.comment}</p>
    </div>
  )
}

export default TestimonialCard