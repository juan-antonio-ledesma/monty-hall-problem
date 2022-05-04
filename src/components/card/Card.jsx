const Card = ({ children }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <div className="card-interrogationBadge">?</div>
        </div>
        <div className="card-back">{children}</div>
      </div>
    </div>
  )
}

export default Card
