import PropTypes from 'prop-types'

const InfoGame = ({ text }) => {
  return <p className="infoGame">{text}</p>
}

InfoGame.propTypes = {
  text: PropTypes.string,
}

export default InfoGame
