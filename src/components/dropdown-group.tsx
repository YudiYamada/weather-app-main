interface DropdownGroupProps {
  title: string;
  children: React.ReactNode;
}

const DropdownGroup = ({ title, children }: DropdownGroupProps) => (
  <div className="mt-4 first:mt-0">
    <h4 className="mb-1 px-3 text-[10px] font-bold tracking-widest text-neutral-300/50 uppercase">
      {title}
    </h4>
    <div className="flex flex-col gap-1">{children}</div>
  </div>
);

export default DropdownGroup;