function Input ({label, id, type='text', placeholder, value, onChange}) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                {label}
            </label>
            <input
                id={id}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-4 py-2 text-gray-900 outline-none placeholder:text-gray-400 focus:border-brand-600 focus:ring-2 focus:ring-brand-100 dark:border-white/10 dark:bg-night-card dark:text-white dark:placeholder:text-gray-500 dark:focus:ring-brand-500/30"
            />
        </div>
    )
}

export default Input