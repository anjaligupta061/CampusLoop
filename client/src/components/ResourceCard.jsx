

function ResourceCard(props) {
  return (
    <div className="resource-card">
      <span className={`listing-badge ${props.listingType.toLowerCase()}`}>
        {props.listingType}
      </span>

      <h3>{props.name}</h3>

      <p>{props.category}</p>

      <h4>
        {props.price === 0 ? 'FREE' : `₹${props.price}`}
      </h4>
    </div>
  )
}

export default ResourceCard