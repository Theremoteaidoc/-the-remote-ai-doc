export default function Wordmark({ markClassName = 'h-8', textClassName = 'text-2xl' }) {
  return (
    <span className="inline-flex items-center gap-3">
      <img
        src="/rebuild/brand/seascope-mark.png"
        alt=""
        className={`${markClassName} w-auto`}
        width="32"
        height="32"
      />
      <span className={`font-display font-medium leading-none ${textClassName}`}>
        <span className="text-ink">SeaScope</span>{' '}
        <span className="text-teal-strong">CDS</span>
      </span>
    </span>
  );
}
