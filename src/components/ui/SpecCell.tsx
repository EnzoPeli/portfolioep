import { NeonIndex } from "@/components/ui/NeonIndex";

type SpecCellProps = {
  index: string;
  value: string;
  label: string;
};

export function SpecCell({ index, value, label }: SpecCellProps) {
  return (
    <div className="bg-surface-soft px-5 py-5">
      <NeonIndex className="caption font-mono text-mint">{index}</NeonIndex>
      <p className="mt-3 text-[1.35rem] font-semibold leading-tight tracking-tight text-ink">
        {value}
      </p>
      <p className="mt-2 text-[13px] text-muted">{label}</p>
    </div>
  );
}
