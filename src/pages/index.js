import { useState } from 'react'

import Cards from '../components/cards/Cards'
import Card from '../components/cards/Card'
import Decision from '../components/decision/Decision'

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false)

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * max) + min
  }

  const resetCards = () => {
    const cards = Array(3).fill({
      isRevealed: false,
      isSelected: false,
      type: 'goat',
    })
    cards[randomIntFromInterval(0, 2)] = { type: 'car' }

    return cards
  }

  const [cards, setCards] = useState(resetCards)

  const handleSelectCard = indexSelectedCard => {
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

  const resetGame = () => {
    setTimeout(() => {
      setCards(previousCards => {
        return previousCards.map(card => {
          return { ...card, isSelected: false, isRevealed: false }
        })
      })
    }, 1000)

    setTimeout(() => {
      setCards(resetCards)
      setResult({
        resultValue: '',
        isResultShown: false,
      })
      setGameStarted(false)
    }, 1400)
  }

  const handleKeepCard = () => {
    setCards(previousCards => {
      return previousCards.map(card => {
        if (card.isSelected) {
          setResult({ resultValue: getResult(card.type), isResultShown: true })
          return { ...card, isRevealed: true }
        }
        return card
      })
    })
    resetGame()
  }

  const handleChangeCard = () => {
    setCards(previousCards => {
      return previousCards.map(card => {
        if (!card.isSelected && !card.isRevealed) {
          setResult({ resultValue: getResult(card.type), isResultShown: true })
          return { ...card, isSelected: true, isRevealed: true }
        }
        return card
      })
    })
    resetGame()
  }

  const [result, setResult] = useState({
    resultValue: '',
    isResultShown: false,
  })

  const getResult = choice => {
    return choice === 'car' ? 'YOU WIN' : 'YOU LOSE'
  }

  return (
    <>
      <Cards isGameStarted={gameStarted} isResultShown={result.isResultShown}>
        {cards.map((card, index) => {
          return (
            <Card
              key={`card-${index}`}
              type={card.type}
              isSelected={card.isSelected}
              isRevealed={card.isRevealed}
              onClick={() => handleSelectCard(index)}
            />
          )
        })}
      </Cards>
      {gameStarted && !result.isResultShown ? (
        <Decision keepCard={handleKeepCard} changeCard={handleChangeCard} />
      ) : null}
      {result.isResultShown ? (
        <p style={{ textAlign: 'center' }}>{result.resultValue}</p>
      ) : null}
    </>
  )
}
