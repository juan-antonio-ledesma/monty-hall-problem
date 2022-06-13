import PropTypes from 'prop-types'

const Decision = ({ changeCard, keepCard }) => {
  return (
    <div className="decision">
      <button className="decision-button" onClick={keepCard}>
        Keep Card
      </button>
      <button className="decision-button" onClick={changeCard}>
        Change Card
      </button>
    </div>
  )
}

Decision.propTypes = {
  changeCard: PropTypes.func,
  keepCard: PropTypes.func,
}

export default Decision
