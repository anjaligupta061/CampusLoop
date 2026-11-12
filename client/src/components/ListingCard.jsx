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
    <div className="rounded-2xl border border-brand-100 bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-medium text-brand-700">
          {type}
        </span>
        <SaveButton />
      </div>
      <h3 className="mt-3 font-heading text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-1 text-brand-600">{priceText}</p>
      <p className="mt-1 text-sm text-gray-500">{condition} condition</p>
      <p className="mt-1 text-sm text-gray-500">{location}</p>
    </div>
  )
}

export default ListingCard