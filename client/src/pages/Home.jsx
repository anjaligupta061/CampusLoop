import { categories } from '../data/categories'
import CategoryCard from '../components/CategoryCard'
import ListingCard from '../components/ListingCard'
import heroImg from '../assets/hero-light.png'
import SearchBar from '../components/SearchBar'
import { Tag, CalendarClock, Handshake, Gift, ShieldCheck, MessageCircle, Sparkles, Leaf } from 'lucide-react'
import ActionCard from '../components/ActionCard'
import FeatureItem from '../components/FeatureItem'
import { listings } from '../data/listings'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { isDraft } from '@reduxjs/toolkit'
import heroDarkImg from '../assets/hero_dark.png'

const actions = [
  { title: 'Sell', subtitle: 'List your item', icon: Tag, tint: 'bg-violet-100 text-violet-600 dark:bg-violet-500/20 dark:text-violet-300' },
  { title: 'Rent', subtitle: 'Rent for a period', icon: CalendarClock, tint: 'bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-300' },
  { title: 'Lend', subtitle: 'Share for free', icon: Handshake, tint: 'bg-sky-100 text-sky-600 dark:bg-sky-500/20 dark:text-sky-300' },
  { title: 'Give Away', subtitle: 'Pass it on', icon: Gift, tint: 'bg-pink-100 text-pink-600 dark:bg-pink-500/20 dark:text-pink-300' },
]

const features = [
  { title: 'Secure & Trusted', subtitle: 'Built for your campus community', icon: ShieldCheck },
  { title: 'Real-Time Chat', subtitle: 'Talk directly with owners', icon: MessageCircle },
  { title: 'SmartMatch', subtitle: 'Find what you need, faster', icon: Sparkles },
  { title: 'Campus Impact', subtitle: 'Share more, waste less', icon: Leaf },
]

function Home() {

  const { isDark } = useContext(ThemeContext)
  console.log(isDark)
  
  return (
    
    <div>
      <section className="relative overflow-hidden rounded-3xl">
        <div className="pointer-events-none absolute inset-0 hidden bg-linear-to-r from-white/80 via-white/40 dark:from-night/80 dark:via-night/40 to-transparent md:block" />
        <div className="p-6 md:absolute md:inset-0 md:flex md:items-center md:p-12">
          <div className="max-w-md">
            <h1 className="font-heading text-4xl font-bold leading-tight text-gray-900 md:text-5xl dark:text-white">
              Your Campus. Your Resources. Your Loop.
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Buy, sell, rent, lend or give away resources with your fellow students.
            </p>
            <SearchBar />
          </div>
        </div>
        <img
          src={isDark ? heroDarkImg : heroImg}
          alt="Student working on a laptop on campus steps"
          className="h-full min-h-[280px] w-full object-cover"
        />
      </section>
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {actions.map((item) => (
          <ActionCard key={item.title} {...item} />
        ))}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item) => (
          <FeatureItem key={item.title} {...item} />
        ))}
      </div>

      <section className="mt-10">
        <h2 className="font-heading text-xl font-semibold text-gray-900 dark:text-white">
          Popular Categories
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((item) => (
            <CategoryCard key={item.name} {...item} />
          ))}
        </div>
      </section>
      
      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-xl font-semibold text-gray-900 dark:text-white">
            Featured Listings
          </h2>
          <Link to="/marketplace" className="text-sm font-medium text-brand-600 hover:underline">
            View all
          </Link>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {listings.slice(0, 4).map((item) => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
      </section>
  
    </div>
  )
}

export default Home