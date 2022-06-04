import PropTypes from 'prop-types'

const Stats = ({ stats }) => {
  const {
    gamesPlayedCounter,
    goatCounter,
    carCounter,
    keepCardCounter,
    changeCardCounter,
  } = stats

  return (
    <div className="stats">
      <p>Games Played counter: {gamesPlayedCounter}</p>
      <p>Goat counter: {goatCounter}</p>
      <p>Car counter: {carCounter}</p>
      <p>Keep card counter: {keepCardCounter}</p>
      <p>Change card counter: {changeCardCounter}</p>
    </div>
  )
}

Stats.propTypes = {
  stats: PropTypes.object,
}

export default Stats
