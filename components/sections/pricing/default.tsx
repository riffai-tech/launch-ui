import { Section } from "../../ui/section";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamProps {
  title?: string | false;
  description?: string | false;
  team?: TeamMember[] | false;
  className?: string;
}

export default function Team({
  title = "A Shared Ambition",
  description = "RIFFAI was founded by a team of highly experienced professionals from backgrounds in Satellite, AI, Climate Science, and Earth Observation. Our team includes specialists from institutions like Imperial College London, Stanford University, and MIT.",
  team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Co-founder",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      name: "Prof. Michael Rodriguez",
      role: "CTO & Co-founder", 
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    },
    {
      name: "Dr. James Park",
      role: "Head of Earth Sciences",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
    },
  ],
  className = "",
}: TeamProps) {
  return (
    <Section className={className}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 px-4 text-center sm:gap-8">
            {title && (
              <h2 className="text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}
        {team !== false && team.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl">
            {team.map((member, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-sm">{member.name}</h3>
                  <p className="text-muted-foreground text-xs">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}