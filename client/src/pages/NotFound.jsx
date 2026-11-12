import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="text-center">
      <h1 className="font-heading text-5xl font-bold text-brand-600">404</h1>
      <p className="mt-2 text-gray-600">Oops! Ye page exist nahi karta.</p>
      <Link to="/" className="mt-4 inline-block text-brand-600 hover:underline">
        Home pe wapas jao
      </Link>
    </div>
  )
}

export default NotFound