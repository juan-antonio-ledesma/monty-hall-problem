import { useState } from 'react'

import Card from '../components/card/Card'

export default function Home() {
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * max) + min
  }

  const resetCards = () => {
    const defaultCard = { type: 'goat', isSelected: false }
    const cards = Array(3).fill({ ...defaultCard })
    cards[randomIntFromInterval(0, 2)] = { ...defaultCard, type: 'car' }

    return cards
  }

  const [cards, setCards] = useState(resetCards())

  const selectCard = indexSelectedCard => {
    setCards(previousCards => {
      return previousCards.map((cardObject, index) => {
        if (index === indexSelectedCard) {
          return { ...cardObject, isSelected: true }
        }
        return cardObject
      })
    })
  }

  return (
    <div className="cards">
      {cards.map((card, index) => {
        return (
          <Card
            key={`card-${index}`}
            type={card.type}
            isSelected={card.isSelected}
            onClick={() => selectCard(index)}
          />
        )
      })}
    </div>
  )
}
