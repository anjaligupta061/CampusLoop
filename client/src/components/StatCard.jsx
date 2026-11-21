function StatCard({ label, value, icon }) {
  const Icon = icon

  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-night-card">
      <div className="rounded-xl bg-brand-100 p-3 text-brand-600 dark:bg-brand-500/20 dark:text-brand-100">
        <Icon size={22} />
      </div>
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-300">{label}</p>
        <p className="font-heading text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  )
}

export default StatCard