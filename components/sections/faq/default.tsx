import Link from "next/link";
import { ReactNode } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
  value?: string;
}

interface FAQProps {
  title?: string;
  items?: FAQItemProps[] | false;
  className?: string;
}

export default function FAQ({
  title = "Frequently Asked Questions",
  items = [
    {
      question: "How accurate is RIFFAI's satellite monitoring?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[640px] text-balance">
            Our AI models achieve 97% accuracy by integrating data from over 20 satellites and analyzing 800+ environmental parameters. This precision is achieved through proprietary machine learning algorithms trained on extensive satellite datasets.
          </p>
        </>
      ),
    },
    {
      question: "What types of environmental changes can RIFFAI detect?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[600px]">
            RIFFAI monitors flood patterns, illegal landfills, methane emissions, erosion, land damage, and renewable energy site conditions. Our platform provides early warning systems for climate-related disasters and environmental violations.
          </p>
        </>
      ),
    },
    {
      question: "How does RIFFAI work without ground-based stations?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Our platform relies entirely on satellite data and advanced AI processing. By combining multiple satellite sources and sophisticated algorithms, we eliminate the need for traditional ground-based monitoring infrastructure.
          </p>
        </>
      ),
    },
    {
      question: "Who can benefit from RIFFAI's technology?",
      answer: (
        <>
          <p className="text-muted-foreground mb-4 max-w-[580px]">
            Government agencies, environmental organizations, insurance companies, agricultural businesses, and renewable energy companies use our platform for monitoring, risk assessment, and decision-making.
          </p>
        </>
      ),
    },
  ],
  className,
}: FAQProps) {
  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-8">
        <h2 className="text-center text-3xl font-semibold sm:text-5xl">
          {title}
        </h2>
        {items !== false && items.length > 0 && (
          <Accordion type="single" collapsible className="w-full max-w-[800px]">
            {items.map((item, index) => (
              <AccordionItem
                key={index}
                value={item.value || `item-${index + 1}`}
              >
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </Section>
  );
}