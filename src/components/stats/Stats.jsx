import PropTypes from 'prop-types'

const Stats = ({ stats }) => {
  const {
    gamesPlayedCounter,
    keepCardCarCounter,
    keepCardGoatCounter,
    changeCardCarCounter,
    changeCardGoatCounter,
  } = stats

  return (
    <div className="stats">
      <p>Games Played Counter: {gamesPlayedCounter}</p>
      <p>Keep Card Car Counter: {keepCardCarCounter}</p>
      <p>Keep Card Goat Counter: {keepCardGoatCounter}</p>
      <p>Change Card Car Counter: {changeCardCarCounter}</p>
      <p>Change Card Goat Counter: {changeCardGoatCounter}</p>
    </div>
  )
}

Stats.propTypes = {
  stats: PropTypes.object,
}

export default Stats
