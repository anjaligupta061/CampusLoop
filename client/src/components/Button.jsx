const styles = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700',
  secondary: 'bg-white text-brand-600 border border-brand-600 hover:bg-brand-50',
  danger: 'bg-red-600 text-white hover:bg-red-700',
}

function Button({ label, variant = 'primary' }) {
  return (
    <button className={`rounded-xl px-6 py-2 font-medium ${styles[variant]}`}>
      {label}
    </button>
  )
}

export default Button