import ListingCard from "../components/ListingCard";
import listings from "../data/listings";
import { useState } from "react";

function Marketplace() {
  const [searchText, setSearchText] = useState('')
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-brand-600">Marketplace</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Browse resources shared by students on campus.</p>

      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search listings..."
        className="mt-4 w-full rounded-full border border-gray-200 bg-white px-5 py-3 text-gray-900 outline-none focus:border-brand-500 dark:border-white/10 dark:bg-night-card dark:text-white md:max-w-md"
      />
      <p className="mt-2 text-sm text-gray-500">Typing: {searchText}</p>
      <div>
        {listings.map((item) => (
          <ListingCard key = {item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Marketplace