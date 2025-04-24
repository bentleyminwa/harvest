type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: SectionProps) {
  return (
    <section
      className={`grid grid-cols-2 gap-10 w-3/4 mx-auto py-20 ${className}`}
    >
      {children}
    </section>
  );
}
