function FeatureItem({ title, subtitle, icon }) {
  const Icon = icon

  return (
    <div className="flex items-center gap-3 rounded-xl border border-brand-100 bg-white/70 p-3 backdrop-blur dark:border-white/10 dark:bg-night-card/60">
      <Icon size={20} className="shrink-0 text-brand-600 dark:text-brand-500" />
      <div>
        <p className="text-sm font-semibold text-gray-900 dark:text-white">{title}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</p>
      </div>
    </div>
  )
}

export default FeatureItem