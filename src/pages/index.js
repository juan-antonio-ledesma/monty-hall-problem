import { useState } from 'react'

import Cards from '../components/cards/Cards'
import Card from '../components/cards/Card'
import Decision from '../components/decision/Decision'
import Stats from '../components/stats/Stats'

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false)
  const [stats, setStats] = useState({
    gamesPlayedCounter: 0,
    goatCounter: 0,
    carCounter: 0,
    keepCardCounter: 0,
    changeCardCounter: 0,
  })

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
    setStats({
      ...stats,
      gamesPlayedCounter: stats.gamesPlayedCounter++,
    })

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
    setStats({
      ...stats,
      keepCardCounter: stats.keepCardCounter++,
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
    setStats({
      ...stats,
      changeCardCounter: stats.changeCardCounter++,
    })
    resetGame()
  }

  const [result, setResult] = useState({
    resultValue: '',
    isResultShown: false,
  })

  const getResult = choice => {
    if (choice === 'car') {
      setStats({
        ...stats,
        carCounter: stats.carCounter++,
      })
    } else {
      setStats({
        ...stats,
        goatCounter: stats.goatCounter++,
      })
    }

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
      <Stats stats={stats} />
    </>
  )
}
