import Button from '../components/Button'
import ListingCard from '../components/ListingCard'
import Input from '../components/Input'

function Home() {
  return (
    <div>
      <h1 className="font-heading text-3xl font-bold text-brand-600">Home</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Landing page yahan banega.</p>
      <div className="mt-4 flex gap-3">
        <Button label= "Sell" variant='primary'/>
        <Button label= "Rent" variant='secondary'/>
        <Button label= "Lend" />
        <Button label= "Give Away" />
        <Button label="Delete" variant="danger" />
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ListingCard title="DBMS Notes" price={150} type="Lend" condition="Good" location="Hostel A" />
          <ListingCard title="Casio Calculator" price={300} type="Sell" condition="Excellent" location="Hostel B" />
          <ListingCard title="Sony Headphones" price={2500} type="Rent" condition="Like new" location="Hostel C" />
          <ListingCard title="Java Book" price={0} type="Sell" condition="Somewhat old" location="Hostel D"/>
          <ListingCard title="Study Table" type="GiveAway" condition="Good" location="Hostel E"/>
        </div>

      <div className="mt-8 max-w-sm space-y-4">
        <Input label="Name" id="name" placeholder="Apna naam likho" />
        <Input label="Email" id="email" type="email" placeholder="you@college.edu" />
        <Input label="Password" id="password" type="password" />
      </div>
    </div>
  )
}

export default Home