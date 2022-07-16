import PropTypes from 'prop-types'
import cx from 'classnames'

const Decision = ({ changeCard, keepCard, isVisible }) => {
  const classes = cx('decision', {
    'is-visible': isVisible,
  })

  return (
    <div className={classes} aria-hidden={isVisible ? 'false' : 'true'}>
      <button
        className="decision-button"
        onClick={keepCard}
        tabIndex={isVisible ? 0 : -1}
      >
        Keep Card
      </button>
      <button
        className="decision-button"
        onClick={changeCard}
        tabIndex={isVisible ? 0 : -1}
      >
        Change Card
      </button>
    </div>
  )
}

Decision.propTypes = {
  changeCard: PropTypes.func,
  keepCard: PropTypes.func,
  isVisible: PropTypes.bool,
}

export default Decision
