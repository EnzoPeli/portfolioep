import { site } from "@/content/shared";

export function BrandMark() {
  return (
    <span className="flex items-center gap-2.5 text-ink">
      <span className="mint-dot" aria-hidden="true" />
      <span className="text-[13px] font-semibold tracking-[0.16em]">
        {site.shortName}
      </span>
    </span>
  );
}
