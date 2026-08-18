type SectionHeadingProps = {
  kicker: string;
  heading: string;
  intro?: string;
  as?: "h2" | "h3";
};

export function SectionHeading({
  kicker,
  heading,
  intro,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="label-caps text-mint">{kicker}</p>
      <Tag className="display-lg mt-3">{heading}</Tag>
      {intro ? <p className="body-md mt-5 max-w-xl">{intro}</p> : null}
    </div>
  );
}
