type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className }: SectionProps) {
  return <section className={`grid ${className}`}>{children}</section>;
}
