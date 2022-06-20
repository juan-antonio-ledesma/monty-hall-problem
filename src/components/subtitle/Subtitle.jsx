import PropTypes from 'prop-types'
import cx from 'classnames'

const Subtitle = ({ text, isGameStarted }) => {
  const classes = cx('subtitle', {
    'is-gameStarted': isGameStarted,
  })

  return (
    <p className={classes}>
      <span className="subtitle-text">{text}</span>
    </p>
  )
}

Subtitle.propTypes = {
  text: PropTypes.string,
  isGameStarted: PropTypes.bool,
}

export default Subtitle
