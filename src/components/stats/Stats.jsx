import PropTypes from 'prop-types'

const Stats = ({ stats }) => {
  return (
    <div className="stats">
      <p>Games Played counter: {stats.gamesPlayedCounter}</p>
      <p>Goat counter: {stats.goatCounter}</p>
      <p>Car counter: {stats.carCounter}</p>
      <p>Keep card counter: {stats.keepCardCounter}</p>
      <p>Change card counter: {stats.changeCardCounter}</p>
    </div>
  )
}

Stats.propTypes = {
  stats: PropTypes.object,
}

export default Stats
