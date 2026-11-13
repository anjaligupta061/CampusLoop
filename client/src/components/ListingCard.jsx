import SaveButton from './SaveButton'

function ListingCard({ title, price, type, condition, location }) {
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
      <div className="flex items-center justify-between">
        <span className="rounded-full dark:bg-white/10 dark:text-brand-100 px-3 py-1 text-xs font-medium">
          {type}
        </span>
        <SaveButton />
      </div>
      <h3 className="mt-3 font-heading text-lg font-semibold dark:text-white">{title}</h3>
      <p className="mt-1 text-brand-600">{priceText}</p>
      <p className="mt-1 text-sm dark:text-gray-400">{condition}</p>
      <p className="mt-1 text-sm dark:text-gray-400">{location}</p>
    </div>
  )
}

export default ListingCard