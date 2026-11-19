import { Link } from 'react-router-dom'

function CategoryCard({ name, icon, tint}) {
    const Icon = icon
    return (
        <Link
            to="/marketplace"
            className="flex flex-col items-center gap-3 rounded-2xl border border-brand-100 bg-white/70 p-5 text-center backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-night-card/60"
        >
            <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${tint}`}>
                <Icon size={24} />
            </span>
            <span className="text-sm font-semibold text-gray-900 dark:text-white">{name}</span>
        </Link>
    )
}

export default CategoryCard