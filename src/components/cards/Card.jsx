import Image from 'next/image'

import PropTypes from 'prop-types'
import cx from 'classnames'

import { useMediaQuery } from 'react-responsive'

import carImage from '../../public/images/car.jpg'
import goatImage from '../../public/images/goat.jpg'

const Card = ({ type, onClick, isSelected, isRevealed }) => {
  const classes = cx('card', {
    'is-selected': isSelected,
    'is-revealed': isRevealed,
  })

  const isLapAndUp = useMediaQuery({
    query: 'only screen and (min-width: 600px)',
  })

  const imageSize = isLapAndUp ? 70 : 54

  return (
    <div className={classes} onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">
          <div className="card-interrogationBadge">?</div>
        </div>
        <div className="card-back">
          <Image
            src={type === 'goat' ? goatImage : carImage}
            alt={type === 'goat' ? 'Goat' : 'Car'}
            width={imageSize}
            height={imageSize}
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
