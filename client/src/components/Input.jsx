function Input ({label, id, type='text', placeholder}) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none focus:border-brand-600 focus:ring-2 focus:ring-brand-100"
            />
        </div>
    )
}

export default Input