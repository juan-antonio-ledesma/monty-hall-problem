import { useState } from 'react'

import Card from '../components/card/Card'

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false)

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * max) + min
  }

  const resetCards = () => {
    const cards = Array(3).fill({ type: 'goat' })
    cards[randomIntFromInterval(0, 2)] = { type: 'car' }

    return cards
  }

  const [cards, setCards] = useState(resetCards())

  const selectCard = indexSelectedCard => {
    if (!gameStarted) {
      setGameStarted(true)

      setCards(previousCards => {
        return previousCards.reduce((cards, currentCard, index) => {
          const cardAlreadyRevealed = cards.some(
            card => card.isRevealed === true,
          )

          if (index === indexSelectedCard) {
            cards.push({ ...currentCard, isSelected: true })
          } else if (
            index !== indexSelectedCard &&
            currentCard.type !== 'car' &&
            !cardAlreadyRevealed
          ) {
            cards.push({ ...currentCard, isRevealed: true })
          } else {
            cards.push(currentCard)
          }

          return cards
        }, [])
      })
    }
  }

  return (
    <div className="cards">
      {cards.map((card, index) => {
        return (
          <Card
            key={`card-${index}`}
            type={card.type}
            isSelected={card.isSelected}
            isRevealed={card.isRevealed}
            onClick={() => selectCard(index)}
          />
        )
      })}
    </div>
  )
}
