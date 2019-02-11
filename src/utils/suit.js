export const suitMap = {
  HEARTS: '♥',
  SPADES: '♠',
  DIAMONDS: '♦',
  CLUBS: '♣',
}
export const SUITS = { 'S': 'SPADES', 'D': 'DIAMONDS', 'H': 'HEARTS', 'C': 'CLUBS' }
export const getSuitShapeByCode = (code) => {
  const suit = code.slice(1);
  return SUITS[suit];
}

export const getSuitStrengthByCode = (code) => {
  const first = code.slice(0, 1);
  if (first === 'A') {
    return 1
  } else if (['J', 'Q', 'K', '0'].includes(first)) {
    return 10;
  }
  else return Number(first);
}