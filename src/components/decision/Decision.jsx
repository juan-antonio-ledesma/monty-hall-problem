import PropTypes from 'prop-types'

const Decision = ({ changeCard, keepCard }) => {
  return (
    <div className="decision">
      <button onClick={changeCard}>Change Card</button>
      <button onClick={keepCard}>Keep Card</button>
    </div>
  )
}

Decision.propTypes = {
  changeCard: PropTypes.func,
  keepCard: PropTypes.func,
}

export default Decision
