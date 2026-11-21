export default function SectionHeading({ issue, title, subtitle }) {
  return (
    <div>
      <span className="caption-box text-base">Issue #{issue}</span>
      <h2 className="glitch-text mt-4 font-comic text-5xl tracking-wide text-white sm:text-6xl">
        {title}
      </h2>
      {subtitle && <p className="mt-2 max-w-xl text-neutral-400">{subtitle}</p>}
    </div>
  )
}
