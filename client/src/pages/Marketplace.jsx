import ListingCard from "../components/ListingCard";
import listings from "../data/listings";

function Marketplace() {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-brand-600">Marketplace</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Browse resources shared by students on campus.</p>

      <div>
        {listings.map((item) => (
          <ListingCard key = {item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Marketplace