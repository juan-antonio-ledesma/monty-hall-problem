import PropTypes from 'prop-types'
import cx from 'classnames'

const Cards = ({ children, isGameStarted }) => {
  const classes = cx('cards', {
    'is-gameStarted': isGameStarted,
  })

  return <div className={classes}>{children}</div>
}

Cards.propTypes = {
  children: PropTypes.node.isRequired,
  isGameStarted: PropTypes.bool,
}

export default Cards
