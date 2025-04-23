type SectionNavProps = {
  children: React.ReactNode;
};

export default function SectionNav({ children }: SectionNavProps) {
  return (
    <div className="absolute left-[50%] -translate-x-[50%] bottom-10 w-3/4  grid grid-cols-3 gap-10">
      {children}
    </div>
  );
}
