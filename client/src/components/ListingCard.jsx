import SaveButton from './SaveButton'
import { Image as ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

function ListingCard({ id, title, price, type, condition, location, image }) {
  let priceText

  if (price === 0) {
    priceText = 'Free'
  } else if (price === undefined) {
    priceText = 'Price not set.'
  } else {
    priceText = `₹${price}`
  }

  return (
    <div className="rounded-2xl border border-brand-100 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-night-card">
    <div className="mb-3 aspect-[4/3] overflow-hidden rounded-xl bg-brand-100 dark:bg-white/5">
        {image ? (
          <img src={image} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-brand-500/60">
            <ImageIcon size={36} />
          </div>
        )}
      </div>
      <div className="flex items-center justify-between">
        <span className="rounded-full dark:bg-white/10 dark:text-brand-100 px-3 py-1 text-xs font-medium">
          {type}
        </span>
        <SaveButton />
      </div>
      <h3 className="mt-3 font-heading text-lg font-semibold dark:text-white">
        <Link to={`/marketplace/${id}`} className="hover:text-brand-600">{title}</Link>
      </h3>
      <p className="mt-1 text-brand-600">{priceText}</p>
      <p className="mt-1 text-sm dark:text-gray-400">{condition}</p>
      <p className="mt-1 text-sm dark:text-gray-400">{location}</p>
    </div>
  )
}

export default ListingCard