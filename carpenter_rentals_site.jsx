import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Home, BedDouble } from "lucide-react";

const listings = [
  {
    id: 1,
    title: "Rustic Cabin Retreat",
    location: "Lebanon, MO",
    type: "Airbnb",
    image: "https://source.unsplash.com/800x600/?cabin",
    price: "$120/night",
    description: "A cozy cabin near Bennett Spring, perfect for weekend getaways.",
  },
  {
    id: 2,
    title: "Downtown Apartment Loft",
    location: "Lebanon, MO",
    type: "Airbnb",
    image: "https://source.unsplash.com/800x600/?apartment",
    price: "$95/night",
    description: "Modern loft with fast WiFi and walkable to local shops and cafes.",
  },
  {
    id: 3,
    title: "Spacious Mobile Home",
    location: "Conway, MO",
    type: "Mobile Home",
    image: "https://source.unsplash.com/800x600/?mobilehome",
    price: "$750/month",
    description: "Newly renovated mobile home just 15 minutes outside Lebanon.",
  },
  {
    id: 4,
    title: "Quiet Country Mobile Home",
    location: "Lebanon, MO",
    type: "Mobile Home",
    image: "https://source.unsplash.com/800x600/?countryhouse",
    price: "$675/month",
    description: "Peaceful living with large lot, pets welcome.",
  },
];

export default function CarpenterRentals() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Carpenter Rentals - Lebanon, MO</h1>
      <p className="text-lg text-gray-600 mb-8">
        Explore affordable Airbnb stays and mobile home rentals in Lebanon, MO and surrounding areas.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {listings.map((listing) => (
          <Card key={listing.id} className="rounded-2xl shadow-md">
            <img
              src={listing.image}
              alt={listing.title}
              className="rounded-t-2xl w-full h-64 object-cover"
            />
            <CardContent className="p-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4" /> {listing.location} · {listing.type}
              </div>
              <h2 className="text-xl font-semibold">{listing.title}</h2>
              <p className="text-gray-700 text-sm">{listing.description}</p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-primary font-bold text-lg">{listing.price}</span>
                <Button variant="outline">Inquire</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
