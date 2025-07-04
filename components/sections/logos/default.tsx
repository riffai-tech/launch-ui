import { ReactNode } from "react";

import { siteConfig } from "@/config/site";

import { Badge } from "../../ui/badge";
import { Section } from "../../ui/section";

interface LogosProps {
  title?: string;
  badge?: ReactNode | false;
  logos?: ReactNode[] | false;
  className?: string;
}

export default function Logos({
  title = "Our Work in Action",
  badge = false,
  logos = false,
  className,
}: LogosProps) {
  const projects = [
    {
      title: "Flood Warning & Water Management",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      description: "NDWI mapping for early flood detection"
    },
    {
      title: "Illegal Landfill & Methane Detection",
      image: "https://images.pexels.com/photos/2827392/pexels-photo-2827392.jpeg",
      description: "Spectral analysis for environmental violations"
    },
    {
      title: "Renewable Energy Site Automation",
      image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg",
      description: "Wind and solar site optimization"
    },
    {
      title: "Erosion & Land Damage Assessment",
      image: "https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg",
      description: "Comprehensive land change analysis"
    },
  ];

  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-6">
          {badge !== false && badge}
          <h2 className="text-md font-semibold sm:text-2xl">{title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {projects.map((project, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}