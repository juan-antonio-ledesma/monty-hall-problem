import Image from 'next/image'

import PropTypes from 'prop-types'
import cx from 'classnames'

import carImage from '../../public/images/car.png'
import goatImage from '../../public/images/goat.png'

const Card = ({ type, onClick, isSelected, isRevealed }) => {
  const classes = cx('card', {
    'is-selected': isSelected,
    'is-revealed': isRevealed,
  })

  return (
    <div className={classes} onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">
          <div className="card-interrogationBadge">?</div>
        </div>
        <div className="card-back">
          <Image
            src={type === 'goat' ? goatImage : carImage}
            alt="hola"
            width={70}
            height={70}
          />
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSelected: PropTypes.bool,
  isRevealed: PropTypes.bool,
}

export default Card
