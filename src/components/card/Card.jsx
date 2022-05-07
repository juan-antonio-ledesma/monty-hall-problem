import Image from 'next/image'
import car from '../../public/images/car.png'

const Card = () => {
  return (
    // <div className="card">
    //   <div className="card-inner">
    //     <div className="card-front">
    //       <div className="card-interrogationBadge">?</div>
    //     </div>
    //     <div className="card-back">
    //       <Image src={car} alt="car" width={180} height={180} />
    //     </div>
    //   </div>
    // </div>

    <div className="flipcards">
      <div className="flipcard flipcard--red">
        <div className="flipcard__inner">
          <div className="__front"></div>
          <div className="__back">
            <p>⚔️</p>
          </div>
        </div>
      </div>
      <div className="flipcard flipcard--blue">
        <div className="flipcard__inner">
          <div className="__front"></div>
          <div className="__back">
            <p>👑</p>
          </div>
        </div>
      </div>
      <div className="flipcard flipcard--yellow">
        <div className="flipcard__inner">
          <div className="__front"></div>
          <div className="__back">
            <p>❤️</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
