import { useState } from 'react'
import { categories } from '../data/categories'

const emptyForm = {
  title: '',
  type: 'Sell',
  category: '',
  price: '',
  condition: '',
  location: '',
}

function CreateListing() {
  const [form, setForm] = useState(emptyForm)

  const [errors, setErrors] = useState({})

  const [success, setSuccess] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })

    if (name === 'type') {
        setErrors({ ...errors, type: '', price: '' })
    } else {
        setErrors({ ...errors, [name]: '' })
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSuccess(false)

    const newErrors = {}
    if (form.title.trim() === '') {
        newErrors.title = 'Title is required'
    }
    if (form.category === '') {
        newErrors.category = 'Please select a category'
    }
    if (form.condition === '') {
        newErrors.condition = 'Please select a condition'
    }
    if (form.location.trim() === '') {
        newErrors.location = 'Location is required'
    }
    if (form.type === 'Sell' || form.type === 'Rent') {
        if (form.price === '' || Number(form.price) <= 0) {
        newErrors.price = 'Enter a price greater than 0'
        }
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
        const listing = {
            ...form,
            price: form.type === 'Sell' || form.type === 'Rent' ? Number(form.price) : 0,
        }
        console.log(listing)
        setSuccess(true)
        setForm(emptyForm)
     }
   }

  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-gray-900 dark:text-white">
        Create Listing
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        Share something with your campus.
      </p>
      <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Listing title"
        className="mt-6 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-brand-500 dark:border-white/10 dark:bg-night-card dark:text-white md:max-w-md"
      />

      {errors.title && (
        <p className="mt-1 text-sm text-red-600">{errors.title}</p>
      )}

      <select
        name="type"
        value={form.type}
        onChange={handleChange}
        className="mt-4 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 dark:border-white/10 dark:bg-night-card dark:text-white md:max-w-md"
      >
        <option value="Sell">Sell</option>
        <option value="Rent">Rent</option>
        <option value="Lend">Lend</option>
        <option value="Giveaway">Giveaway</option>
      </select>

      <select
        name="category"
        value={form.category}
        onChange={handleChange}
        className="mt-4 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 dark:border-white/10 dark:bg-night-card dark:text-white md:max-w-md"
      >
        <option value="">Select category</option>
        {categories.map((c) => (
          <option key={c.name} value={c.name}>{c.name}</option>
        ))}
      </select>

      {errors.category && (
        <p className="mt-1 text-sm text-red-600">{errors.category}</p>
      )}

      {(form.type === 'Sell' || form.type === 'Rent') && (
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder={form.type === 'Rent' ? 'Price per day (₹)' : 'Price (₹)'}
          className="mt-4 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-brand-500 dark:border-white/10 dark:bg-night-card dark:text-white md:max-w-md"
        />
      )}

      {errors.price && (
        <p className="mt-1 text-sm text-red-600">{errors.price}</p>
      )}

      <select
        name="condition"
        value={form.condition}
        onChange={handleChange}
        className="mt-4 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 dark:border-white/10 dark:bg-night-card dark:text-white md:max-w-md"
      >
        <option value="">Select condition</option>
        <option value="Like new">Like new</option>
        <option value="Excellent">Excellent</option>
        <option value="Good">Good</option>
        <option value="Fair">Fair</option>
      </select>

      {errors.condition && (
        <p className="mt-1 text-sm text-red-600">{errors.condition}</p>
      )}

      <input
        type="text"
        name="location"
        value={form.location}
        onChange={handleChange}
        placeholder="Location (e.g. Hostel A)"
        className="mt-4 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none focus:border-brand-500 dark:border-white/10 dark:bg-night-card dark:text-white md:max-w-md"
      />

      {errors.location && (
        <p className="mt-1 text-sm text-red-600">{errors.location}</p>
      )}
        <button
            type="submit"
            className="mt-6 rounded-full bg-brand-600 px-6 py-3 font-medium text-white hover:bg-brand-700"
            >
            Publish listing
        </button>

        {success && (
        <p className="mt-4 text-sm text-green-600 dark:text-green-400">
            Form submitted! (Demo only. Nothing is saved until we build the backend.)
        </p>
        )}
        </form>
    </div>
  )
}

export default CreateListing