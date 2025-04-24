type SectionContentProps = {
  sectionHeading: string;
  sectionTitle: string;
  sectionDescription?: string;
  sectionButton?: React.ReactNode;
  className?: string;
};

export default function SectionContent({
  sectionHeading,
  sectionTitle,
  sectionDescription,
  sectionButton,
  className,
}: SectionContentProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="space-y-5">
        <h3 className="uppercase text-lg font-bold text-[#8da583]">
          --- {sectionHeading}
        </h3>
        <h2 className="text-5xl font-bold">{sectionTitle}</h2>
        <p>{sectionDescription}</p>
        <>{sectionButton}</>
      </div>
    </div>
  );
}
