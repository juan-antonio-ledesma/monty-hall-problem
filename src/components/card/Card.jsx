import PropTypes from 'prop-types'

import Image from 'next/image'

import carImage from '../../public/images/car.png'
import goatImage from '../../public/images/goat.png'

const Card = ({ type }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <div className="card-interrogationBadge">?</div>
        </div>
        <div className="card-back">
          <Image
            src={type === 'goat' ? goatImage : carImage}
            alt={type}
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
}

export default Card
