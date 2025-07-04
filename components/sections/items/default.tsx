import {
  SatelliteIcon,
  BrainCircuitIcon,
  EarthIcon,
  TrendingUpIcon,
  ShieldCheckIcon,
  ZapIcon,
  WavesIcon,
  TreesIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  title?: string;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  title = "Clarity From Above",
  items = [
    {
      title: "20+ Satellites",
      description: "Integrated data from multiple satellite constellations",
      icon: <SatelliteIcon className="size-5 stroke-1" />,
    },
    {
      title: "800+ Parameters",
      description: "Comprehensive environmental monitoring variables",
      icon: <BrainCircuitIcon className="size-5 stroke-1" />,
    },
    {
      title: "97% Accuracy",
      description: "Proprietary AI models for precise analysis",
      icon: <ShieldCheckIcon className="size-5 stroke-1" />,
    },
    {
      title: "Real-time Analysis",
      description: "Instant insights without ground-based stations",
      icon: <ZapIcon className="size-5 stroke-1" />,
    },
    {
      title: "Flood Monitoring",
      description: "Early warning systems for water management",
      icon: <WavesIcon className="size-5 stroke-1" />,
    },
    {
      title: "Land Assessment",
      description: "Erosion and environmental damage detection",
      icon: <EarthIcon className="size-5 stroke-1" />,
    },
    {
      title: "Renewable Energy",
      description: "Site automation and optimization",
      icon: <TrendingUpIcon className="size-5 stroke-1" />,
    },
    {
      title: "Methane Detection",
      description: "Illegal landfill and emission monitoring",
      icon: <TreesIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md text-muted-foreground max-w-[740px] font-medium text-balance sm:text-xl">
            We deliver insights with 97% accuracy by integrating over 20 satellites and 800+ parameters into our proprietary AI models. Our platform provides analysis without reliance on traditional ground-based stations.
          </p>
        </div>
        {items !== false && items.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {items.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription>{item.description}</ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}