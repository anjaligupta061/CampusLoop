function ActionCard({ title, subtitle, icon, tint }) {
  const Icon = icon

  return (
    <button className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-white p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-night-card">
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${tint}`}>
        <Icon size={22} />
      </span>
      <span>
        <span className="block font-semibold text-gray-900 dark:text-white">{title}</span>
        <span className="block text-sm text-gray-500 dark:text-gray-400">{subtitle}</span>
      </span>
    </button>
  )
}

export default ActionCard