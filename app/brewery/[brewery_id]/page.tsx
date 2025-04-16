import BreweryInfo from "@/components/brewery/BreweryInfo";
import Testimonials from "@/components/brewery/Testimonials";
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
  
    <main className="flex flex-col w-full min-h-[calc(100vh-8rem)] bg-background">
      <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-8 w-full max-w-7xl mx-auto">
        {brewery && <BreweryInfo brewery={brewery} images={images} />}

        <Testimonials />

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="xl" className="w-full sm:w-auto min-w-[200px]">
            Reservar Mesa
          </Button>
          <ButtonWithGradientBorder className="w-full sm:w-auto min-w-[200px]">
            Opciones de transporte
          </ButtonWithGradientBorder>
        </div>
      </div>
    </main>
  );
};

export default page;
