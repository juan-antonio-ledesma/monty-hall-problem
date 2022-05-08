import Image from 'next/image'
import carImage from '../../public/images/car.png'
import goatImage from '../../public/images/goat.png'

const Card = () => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <div className="card-interrogationBadge">?</div>
        </div>
        <div className="card-back">
          <Image src={goatImage} alt="car" width={100} height={100} />
        </div>
      </div>
    </div>
  )
}

export default Card
