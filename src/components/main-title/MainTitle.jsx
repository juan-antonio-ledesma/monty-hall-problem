import PropTypes from 'prop-types'

const MainTitle = ({ text }) => {
  return (
    <h1 className="mainTitle">
      <span aria-hidden="true" className="mainTitle-ornament" />
      {text}
      <span aria-hidden="true" className="mainTitle-ornament" />
    </h1>
  )
}

MainTitle.propTypes = {
  text: PropTypes.string,
}

export default MainTitle
