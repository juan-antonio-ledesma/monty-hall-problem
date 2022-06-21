import PropTypes from 'prop-types'
import cx from 'classnames'

const Result = ({ finalResult, isVisible }) => {
  const classes = cx('result', {
    'is-visible': isVisible,
  })

  return (
    <p className={classes} aria-hidden={isVisible ? 'false' : 'true'}>
      {finalResult === 'win' ? (
        <span className="result-textWin">YOU WIN</span>
      ) : (
        <span className="result-textLose">YOU LOSE</span>
      )}
    </p>
  )
}

Result.propTypes = {
  finalResult: PropTypes.string,
  isVisible: PropTypes.bool,
}

export default Result
