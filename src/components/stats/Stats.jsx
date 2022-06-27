import PropTypes from 'prop-types'

const Stats = ({ stats }) => {
  const {
    gamesPlayedCounter,
    keepCardCarCounter,
    keepCardGoatCounter,
    changeCardCarCounter,
    changeCardGoatCounter,
  } = stats

  const getPercentage = (amount, total) => {
    return `${((amount * 100) / total).toFixed(2)}%`
  }

  const totalKeepCard = keepCardCarCounter + keepCardGoatCounter
  const percentageKeepCardCar = getPercentage(keepCardCarCounter, totalKeepCard)
  const percentageKeepCardGoat = getPercentage(
    keepCardGoatCounter,
    totalKeepCard,
  )

  const totalChangeCard = changeCardCarCounter + changeCardGoatCounter
  const percentageChangeCardCar = getPercentage(
    changeCardCarCounter,
    totalChangeCard,
  )
  const percentageChangeCardGoat = getPercentage(
    changeCardGoatCounter,
    totalChangeCard,
  )

  return (
    <div className="stats">
      <p>Games Played Counter: {gamesPlayedCounter}</p>
      <p>Keep Card Car Counter: {keepCardCarCounter}</p>
      <p>Keep Card Goat Counter: {keepCardGoatCounter}</p>
      <p>Change Card Car Counter: {changeCardCarCounter}</p>
      <p>Change Card Goat Counter: {changeCardGoatCounter}</p>

      <p>Keep card</p>
      <div className="stats-bar">{percentageKeepCardCar}</div>
      <div className="stats-bar">{percentageKeepCardGoat}</div>

      <p>Change card</p>
      <div className="stats-bar">{percentageChangeCardCar}</div>
      <div className="stats-bar">{percentageChangeCardGoat}</div>
    </div>
  )
}

Stats.propTypes = {
  stats: PropTypes.object,
}

export default Stats
