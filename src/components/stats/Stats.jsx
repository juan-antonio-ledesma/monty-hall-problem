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
    if (amount === 0 && total === 0) return '0.00%'
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
      <p className="stats-mainTitle">STATS</p>

      <p className="stats-secondaryTitle">Games played: {gamesPlayedCounter}</p>

      <p className="stats-secondaryTitle has-borderbottom">Keep card</p>
      <div className="stats-barContainer">
        <div
          className="stats-bar"
          style={{ width: percentageKeepCardCar }}
          aria-hidden="true"
        />
        {percentageKeepCardCar} | {keepCardCarCounter}
      </div>

      <div className="stats-barContainer">
        <div
          className="stats-bar"
          style={{ width: percentageKeepCardGoat }}
          aria-hidden="true"
        />
        {percentageKeepCardGoat} | {keepCardGoatCounter}
      </div>

      <p className="stats-secondaryTitle has-borderbottom">Change card</p>
      <div className="stats-barContainer">
        <div
          className="stats-bar"
          style={{ width: percentageChangeCardCar }}
          aria-hidden="true"
        />
        {percentageChangeCardCar} | {changeCardCarCounter}
      </div>

      <div className="stats-barContainer">
        <div
          className="stats-bar"
          style={{ width: percentageChangeCardGoat }}
          aria-hidden="true"
        />
        {percentageChangeCardGoat} | {changeCardGoatCounter}
      </div>
    </div>
  )
}

Stats.propTypes = {
  stats: PropTypes.object,
}

export default Stats
