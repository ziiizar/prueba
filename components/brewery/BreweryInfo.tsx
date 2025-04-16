import { AddressIcon, PhoneIcon } from "@/icons";
import { Brewery } from "@/types";
import Carrousel from "../home/Carrousel";
import BreweryImages from "./BreweryImages";

const BreweryInfo = ({
  brewery,
  images,
}: {
  brewery: Brewery;
  images: string[];
}) => {
  return (
    <article className="flex flex-col gap-5">
      <h3 className="text-foreground text-3xl font-bold ">{brewery?.name}</h3>
      <div className="flex flex-col gap-2 text-sm">
        <p className="flex items-center gap-2">
          <AddressIcon />
          {brewery?.address_1}
        </p>
        <p className="flex items-center gap-2">
          <PhoneIcon />
          {brewery?.phone}
        </p>
      </div>

      <Carrousel>
        <BreweryImages data={images} />
      </Carrousel>
    </article>
  );
};

export default BreweryInfo;
