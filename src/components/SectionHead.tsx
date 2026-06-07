import Reveal from "./Reveal";

type Props = {
  index: string;
  kicker: string;
  title: string;
};

export default function SectionHead({ index, kicker, title }: Props) {
  return (
    <Reveal>
      <div className="mb-12 flex items-end justify-between gap-6 border-b border-line pb-5">
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-xs text-amber">{index}</span>
            <span className="h-px w-8 bg-line-bright" />
            <span className="label">{kicker}</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl">{title}</h2>
        </div>
      </div>
    </Reveal>
  );
}
