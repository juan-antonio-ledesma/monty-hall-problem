/* eslint-disable @next/next/no-img-element */

import PropTypes from 'prop-types'
import cx from 'classnames'

import carImage from '../../public/images/car.jpg'
import goatImage from '../../public/images/goat.jpg'

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
          <img
            src={type === 'goat' ? goatImage.src : carImage.src}
            alt={type === 'goat' ? 'Goat' : 'Car'}
            width={180}
            height={180}
            loading="lazy"
            className="card-image"
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
