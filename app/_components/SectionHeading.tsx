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
    <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
      <span className="flex justify-center">
        <span className="eyebrow">{eyebrow}</span>
      </span>
      <h2 className="mt-3 text-2xl font-bold sm:text-4xl lg:text-[42px]">
        {title} <span className="grad-text">{accent}</span>
      </h2>
      {subtitle ? <p className="mt-3 text-base text-muted sm:mt-4 sm:text-lg">{subtitle}</p> : null}
    </Reveal>
  );
}
