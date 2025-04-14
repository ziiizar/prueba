'use client'

import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { createContext, useContext, ReactNode } from "react";
import { cn } from "@/lib/utils";


interface CardContextValue<T = any> {
  item: T;
}

const CardContext = createContext<CardContextValue | undefined>(undefined);

const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("Card compound components must be used within Card");
  }
  return context;
};

interface CardRootProps<T> {
  item: T;
  children: ReactNode;
  className?: string;
}

const CardRoot = <T extends object>({ item, children, className }: CardRootProps<T>) => {
  return (
    <CardContext.Provider value={{ item }}>
      <article className={cn("flex flex-col p-4 w-[328px] gap-4 bg-card rounded-lg", className)}>
        {children}
      </article>
    </CardContext.Provider>
  );
};

const CardTitle = ({ children, className }: { children: ReactNode, className?: string }) => {
  return <h4 className={cn("text-foreground text-lg font-bold", className)}>{children}</h4>;
};

const CardImage = ({ 
  alt,
  src,
  className
}: { 
  alt:  string;
  src:  string;
  className?: string;
}) => {
  return (
    <Image
      src={src }
      alt={alt}
      width={72}
      height={72}
      className={cn("rounded-full size-16", className)}
    />
  );
};

const CardContent = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={cn("flex gap-2 text-muted-foreground", className)}>
      {children}
    </div>
  );
};

const CardInfo = ({ children, className }: { children: ReactNode, className?: string }) => {
  return (
    <div className={cn("flex flex-col gap-[10px]", className)}>
      {children}
    </div>
  );
};

const CardText = ({ children, className }: { children: ReactNode, className?: string }) => {
  return <p className={cn("text-sm font-normal", className)}>{children}</p>;
};

const CardAction = ({ href, className }: { href:  string, className?: string }) => {
  return (
    <div className={cn("flex place-content-center items-center", className)}>
      <Link href={href}>
        <Button >Ver más</Button>
      </Link>
    </div>
  );
};

const Card = {
  Root: CardRoot,
  Title: CardTitle,
  Image: CardImage,
  Content: CardContent,
  Info: CardInfo,
  Text: CardText,
  Action: CardAction,
};

export default Card;
