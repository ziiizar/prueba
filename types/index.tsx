import { JSX } from "react";

export type Brewery = {
    id: string;
    name: string;
    brewery_type: string;
    address_1: string;
    address_2: string | null;
    address_3: string | null;
    city: string;
    state_province: string;
    postal_code: string;
    country: string;
    longitude: number;
    latitude: number;
    phone: string;
    website_url: string;
    state: string;
    street: string;
}   


export type Opinion = {
    id: string;
    user: {
      name: string;
      avatar: string;
    };
    comment: string;
  }

  export type NavLinkProps = {   
    
        label: string;
        icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
        href: string;
   
}