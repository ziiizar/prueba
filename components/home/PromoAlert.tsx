import { AlertIcon } from "@/icons"

const PromoAlert = () => {
  return (
    <div className="h-[72px] bg-accent text-accent-foreground flex items-center gap-3  px-5 py-3  border-l-3 border-l-[#DD6B20] ">
        <AlertIcon />
        <div className="flex flex-col  ">
            <h3 className="font-bold">Happy Hour</h3>
            <p>16:00 - 17:00 hs MEX</p>
        </div>

    </div>
  )
}

export default PromoAlert