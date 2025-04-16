'use client'

import { useEffect, useState } from "react";
import Card from "./Card";
import { Brewery } from "@/types";
import { getRandomImage } from "@/lib/utils";
import { routes } from "@/constants/routes";
import { AddressIcon, PhoneIcon } from "@/icons";

const BreweryCard = ({ brewery }: { brewery: Brewery }) => {
  const [randomImage, setRandomImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRandomImage = async () => {
      setIsLoading(true);
      try {
        const image = await getRandomImage();
        setRandomImage(image);
      } catch (error) {
        console.error("Error loading brewery image", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRandomImage();
  }, []);

  return (
    <Card.Root item={brewery}>
      <Card.Title>{brewery.name}</Card.Title>
      <Card.Content>
        <Card.Image 
          alt={brewery.name} 
          src={randomImage || '/images/default-brewery.jpg'} 
          className={isLoading ? "animate-pulse" : ""}
        />
        <Card.Info>
          <Card.Text className="flex items-center gap-2">
            <AddressIcon />
            {brewery.street || "Dirección no disponible"}
          </Card.Text>
          <Card.Text className="flex items-center gap-2">
            <PhoneIcon />
            {brewery.phone || "Teléfono no disponible"}
          </Card.Text>
        </Card.Info>
      </Card.Content>
      <Card.Action href={`${routes.brewery}/${brewery.id}`} />
    </Card.Root>
  );
};

export default BreweryCard; 