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

      <p className="stats-secondaryTitle">Keep card</p>
      <div className="stats-row">
        <div className="stats-barWrapper">
          <div className="stats-bar" style={{ width: percentageKeepCardCar }}>
            <div className="stats-counterWrapper">
              Cars: {keepCardCarCounter}
            </div>
            <div className="stats-percentage">{percentageKeepCardCar}</div>
          </div>
        </div>

        <div className="stats-barWrapper">
          <div className="stats-bar" style={{ width: percentageKeepCardGoat }}>
            <div className="stats-counterWrapper">
              Goats: {keepCardGoatCounter}
            </div>
            <div className="stats-percentage">{percentageKeepCardGoat}</div>
          </div>
        </div>
      </div>

      <p className="stats-secondaryTitle">Change card</p>
      <div className="stats-row">
        <div className="stats-barWrapper">
          <div className="stats-bar" style={{ width: percentageChangeCardCar }}>
            <div className="stats-counterWrapper">
              Cars: {changeCardCarCounter}
            </div>
            <div className="stats-percentage">{percentageChangeCardCar}</div>
          </div>
        </div>

        <div className="stats-barWrapper">
          <div
            className="stats-bar"
            style={{ width: percentageChangeCardGoat }}
          >
            <div>Goats: {changeCardGoatCounter}</div>
            <div>{percentageChangeCardGoat}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

Stats.propTypes = {
  stats: PropTypes.object,
}

export default Stats
