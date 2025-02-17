
import { MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price?: string;
  slug: string;
}

const PropertyCard = ({ image, title, location, slug }: PropertyCardProps) => {
  return (
    <Link to={`/project/${slug}`}>
      <Card className="overflow-hidden group cursor-pointer border-none">
        <CardContent className="p-0">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="pt-4">
            <h3 className="text-lg font-medium text-estate-800">{title}</h3>
            <div className="flex items-center mt-2 text-estate-500">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PropertyCard;
