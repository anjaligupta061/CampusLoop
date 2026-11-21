import { useParams, Link } from 'react-router-dom'
import { listings } from '../data/listings'

function ResourceDetails() {
    const { id } = useParams()
    const listing = listings.find((item) => item.id === Number(id))
    if (!listing) {
    return (
        <div>
        <h1 className="font-heading text-3xl font-bold text-gray-900 dark:text-white">
            Listing not found
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
            This listing does not exist or may have been removed.
        </p>
        <Link to="/marketplace" className="mt-4 inline-block text-brand-600 hover:underline">
            Back to Marketplace
        </Link>
        </div>
        )
    }
    let priceText

    if (listing.price === 0) {
        priceText = 'Free'
    } else if (listing.price === undefined) {
        priceText = 'Price not set.'
    } else {
        priceText = `₹${listing.price}`
    }
    return (
        <div>
            <div>
                <Link to="/marketplace" className="text-sm font-medium text-brand-600 hover:underline">
                    ← Back to Marketplace
                </Link>

            <div className="mt-4 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-night-card">
                <div className="flex aspect-[16/9] items-center justify-center bg-gray-100 text-gray-400 dark:bg-white/5">
                No image
                </div>
            <div className="p-6">
            <span className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-700 dark:border-white/10 dark:text-gray-200">
                {listing.type}
            </span>
            <h1 className="mt-3 font-heading text-3xl font-bold text-gray-900 dark:text-white">
                {listing.title}
            </h1>
                <p className="mt-2 text-2xl font-semibold text-brand-600">{priceText}</p>
                <p className="mt-4 text-gray-600 dark:text-gray-300">Category: {listing.category}</p>
                <p className="text-gray-600 dark:text-gray-300">Condition: {listing.condition}</p>
                <p className="text-gray-600 dark:text-gray-300">Location: {listing.location}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ResourceDetails