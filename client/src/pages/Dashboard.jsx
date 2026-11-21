import StatCard from '../components/StatCard'
import { listings } from '../data/listings'
import { Package, Gift } from 'lucide-react'
import ListingCard from '../components/ListingCard'

function Dashboard() {
    return (
        <div>
            <h1 className="font-heading text-3xl font-bold text-gray-900 dark:text-white">
                Dashboard
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
                Welcome back! Here is a quick look at your campus activity.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="Listings on campus" value={listings.length} icon={Package} />
            <StatCard label="Free items" value={listings.filter((item) => item.price === 0).length} icon={Gift} />
            </div>
            <section className="mt-10">
                <h2 className="font-heading text-xl font-semibold text-gray-900 dark:text-white">
                    Explore listings
                </h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {listings.slice(0, 3).map((item) => (
                    <ListingCard key={item.id} {...item} />
                    ))}
                </div>
            </section>
            <section className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-night-card">
                <h2 className="font-heading text-lg font-semibold text-gray-900 dark:text-white">
                Upcoming returns
                </h2>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                Nothing to return right now.
                </p>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-night-card">
                <h2 className="font-heading text-lg font-semibold text-gray-900 dark:text-white">
                Recent activity
                </h2>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                No activity yet.
                </p>
            </div>
        </section>
        </div>
    )
}

export default Dashboard