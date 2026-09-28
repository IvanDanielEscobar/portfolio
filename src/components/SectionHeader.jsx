export default function SectionHeader({
  badge,
  badgeColor = "emerald",
  title,
  description,
  rightContent,
  className = "mb-16",
}) {
  const colorMap = {
    emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    purple: "bg-purple-500/10 border-purple-500/20 text-purple-400",
  };

  const badgeClasses = colorMap[badgeColor] || colorMap.emerald;

  if (rightContent) {
    return (
      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 ${className}`}>
        <div>
          {badge && (
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono uppercase tracking-wider mb-3 ${badgeClasses}`}
            >
              {badge}
            </div>
          )}
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            {title}
          </h2>
          {description && (
            <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
        <div>{rightContent}</div>
      </div>
    );
  }

  return (
    <div className={className}>
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-mono uppercase tracking-wider mb-3 ${badgeClasses}`}
        >
          {badge}
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-sm text-zinc-400 mt-2 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
