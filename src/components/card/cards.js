const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const setCards = () => {
  const cards = Array(3).fill('goat')
  cards[randomIntFromInterval(0, 2)] = 'car'

  return cards
}
