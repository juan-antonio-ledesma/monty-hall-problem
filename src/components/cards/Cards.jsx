import PropTypes from 'prop-types'
import cx from 'classnames'

const Cards = ({ children, isGameStarted, isResultShown }) => {
  const classes = cx('cards', {
    'is-gameStarted': isGameStarted,
    'is-resultShown': isResultShown,
  })

  return <div className={classes}>{children}</div>
}

Cards.propTypes = {
  children: PropTypes.node.isRequired,
  isGameStarted: PropTypes.bool,
  isResultShown: PropTypes.bool,
}

export default Cards
