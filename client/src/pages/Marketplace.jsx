import ListingCard from "../components/ListingCard";
import listings from "../data/listings";
import { useState } from "react";
import { categories } from '../data/categories'

function Marketplace() {
  const [searchText, setSearchText] = useState('')
  const [selectedType, setSelectedType] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const types = ['All', 'Sell', 'Rent', 'Lend', 'Giveaway']

  const filteredListings = listings.filter((item) =>
    item.title.toLowerCase().includes(searchText.toLowerCase()) &&
    (selectedType === 'All' || item.type === selectedType) &&
    (selectedCategory === 'All' || item.category === selectedCategory)
  )
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

      <div className="mt-4 flex flex-wrap gap-2">
        {types.map((t) => (
          <button
            key={t}
            onClick={() => setSelectedType(t)}
            className={
              selectedType === t
                ? 'rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white'
                : 'rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 dark:border-white/10 dark:bg-night-card dark:text-gray-200'
            }
          >
            {t}
          </button>
        ))}
      </div>

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="mt-4 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 dark:border-white/10 dark:bg-night-card dark:text-gray-200"
      >
        <option value="All">All Categories</option>
        {categories.map((c) => (
          <option key={c.name} value={c.name}>{c.name}</option>
        ))}
      </select>
      
      {filteredListings.length === 0 && (
        <p className="mt-6 text-gray-600 dark:text-gray-300">
          No listings found. Try a different search.
        </p>
      )}
      
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filteredListings.map((item) => (
          <ListingCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Marketplace