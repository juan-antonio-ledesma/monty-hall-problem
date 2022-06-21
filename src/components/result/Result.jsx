import PropTypes from 'prop-types'
import cx from 'classnames'

const Result = ({ finalResult, isVisible }) => {
  const classes = cx('result', {
    'is-visible': isVisible,
  })

  return (
    <p className={classes} aria-hidden={isVisible ? 'false' : 'true'}>
      {finalResult === 'win' ? 'YOU WIN' : 'YOU LOSE'}
    </p>
  )
}

Result.propTypes = {
  text: PropTypes.string,
  isVisible: PropTypes.bool,
}

export default Result
