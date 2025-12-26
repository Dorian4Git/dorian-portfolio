export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-50">
        {title}
      </h1>
      {subtitle ? <p className="muted max-w-2xl">{subtitle}</p> : null}
    </div>
  );
}
