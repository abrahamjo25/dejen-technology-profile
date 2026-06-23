import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  accent,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center">
      <span className="flex justify-center">
        <span className="eyebrow">{eyebrow}</span>
      </span>
      <h2 className="mt-3.5 text-3xl font-bold sm:text-4xl lg:text-[42px]">
        {title} <span className="grad-text">{accent}</span>
      </h2>
      {subtitle ? <p className="mt-4 text-lg text-muted">{subtitle}</p> : null}
    </Reveal>
  );
}
