import Card from '../components/card/Card'
import { setCards } from '../components/card/cards'

export default function Home() {
  const cards = setCards()

  return (
    <div className="cards">
      {cards.map((cardType, index) => {
        return <Card key={`card-${index}`} type={cardType} />
      })}
    </div>
  )
}
