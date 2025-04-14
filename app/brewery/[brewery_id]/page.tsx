import BreweryInfo from "@/components/brewery/BreweryInfo";
import Testimonials from "@/components/brewery/Testimonials";
import Header from "@/components/global/Header";
import Navbar from "@/components/global/Navbar";
import { Button, ButtonWithGradientBorder } from "@/components/ui/button";
import { getBreweryImages } from "@/lib/utils";
import { getBreweryById } from "@/services/breweries";

const page = async ({
  params,
}: {
  params: Promise<{ brewery_id: string }>;
}) => {
  const { brewery_id } = await params;
  const brewery = await getBreweryById(brewery_id);
  const images = await getBreweryImages();

  return (
    <>
    <Header />
    <main className="flex flex-col w-full bg-background px-4 gap-4 text-foreground pb-8">
      {brewery && <BreweryInfo brewery={brewery} images={images} />}

      <Testimonials />

      <Button size={"xl"} >Reservar Mesa</Button>

      <ButtonWithGradientBorder />
    </main>
    <Navbar />
    </>
  );
};

export default page;
