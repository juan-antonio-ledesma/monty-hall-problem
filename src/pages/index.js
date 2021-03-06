import Head from 'next/head'

import { useState } from 'react'

import MainTitle from '../components/main-title/MainTitle'
import Subtitle from '../components/subtitle/Subtitle'
import Cards from '../components/cards/Cards'
import Card from '../components/cards/Card'
import Decision from '../components/decision/Decision'
import Result from '../components/result/Result'
import Stats from '../components/stats/Stats'

export default function Home() {
  const [gameStarted, setGameStarted] = useState(false)
  const [stats, setStats] = useState({
    gamesPlayedCounter: 0,
    keepCardCarCounter: 0,
    keepCardGoatCounter: 0,
    changeCardCarCounter: 0,
    changeCardGoatCounter: 0,
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
    cards[randomIntFromInterval(0, 3)] = { type: 'car' }

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

    setStats(stats)

    setTimeout(() => {
      setCards(previousCards => {
        return previousCards.map(card => {
          return { ...card, isSelected: false, isRevealed: false }
        })
      })
    }, 1000)

    setTimeout(() => {
      setCards(resetCards)
      setResult(previousResult => {
        return {
          resultValue: previousResult.resultValue,
          isResultShown: false,
        }
      })
      setGameStarted(false)
    }, 1400)
  }

  const handleKeepCard = () => {
    setCards(previousCards => {
      return previousCards.map(card => {
        if (card.isSelected) {
          const result = getResult(card.type)

          setResult({ resultValue: result, isResultShown: true })

          setStats(previousStats => {
            return result === 'win'
              ? {
                  ...previousStats,
                  keepCardCarCounter: previousStats.keepCardCarCounter++,
                }
              : {
                  ...previousStats,
                  keepCardGoatCounter: previousStats.keepCardGoatCounter++,
                }
          })
          resetGame()

          return { ...card, isRevealed: true }
        }
        return card
      })
    })
  }

  const handleChangeCard = () => {
    setCards(previousCards => {
      return previousCards.map(card => {
        if (!card.isSelected && !card.isRevealed) {
          const result = getResult(card.type)

          setResult({ resultValue: result, isResultShown: true })

          setStats(previousStats => {
            return result === 'win'
              ? {
                  ...previousStats,
                  changeCardCarCounter: previousStats.changeCardCarCounter++,
                }
              : {
                  ...previousStats,
                  changeCardGoatCounter: previousStats.changeCardGoatCounter++,
                }
          })
          resetGame()

          return { ...card, isSelected: true, isRevealed: true }
        }
        return card
      })
    })
  }

  const [result, setResult] = useState({
    resultValue: '',
    isResultShown: false,
  })

  const getResult = choice => (choice === 'car' ? 'win' : 'lose')

  return (
    <>
      <Head>
        <title>Monty Hall Problem</title>
        <meta name="description" content="Try to get the car!"></meta>
      </Head>

      <header>
        <MainTitle text="Monty Hall Problem" />
      </header>

      <main>
        <Subtitle text="SELECT A CARD" isGameStarted={gameStarted} />

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

        <Result
          finalResult={result.resultValue}
          isVisible={result.isResultShown}
        />

        <Decision
          keepCard={handleKeepCard}
          changeCard={handleChangeCard}
          isVisible={gameStarted && !result.isResultShown}
        />

        <Stats stats={stats} />
      </main>
    </>
  )
}
