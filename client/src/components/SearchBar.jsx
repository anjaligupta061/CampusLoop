import { useState } from 'react'
import { Search } from 'lucide-react'

function SearchBar() {
  const [query, setQuery] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-6 flex items-center gap-2 rounded-2xl border border-brand-100 bg-white p-2 shadow-sm dark:border-white/10 dark:bg-night-card"
    >
      <Search size={20} className="ml-2 shrink-0 text-gray-400" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search books, electronics, or anything..."
        aria-label="Search resources"
        className="min-w-0 flex-1 bg-transparent px-2 py-2 text-gray-900 outline-none placeholder:text-gray-400 dark:text-white"
      />
      <button
        type="submit"
        aria-label="Search"
        className="rounded-xl bg-brand-600 p-2.5 text-white hover:bg-brand-700"
      >
        <Search size={18} />
      </button>
    </form>
  )
}

export default SearchBar