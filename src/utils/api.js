export const baseUrl = `https://deckofcardsapi.com/api`;
export const getDecksOfCard = (count = 1) => `${baseUrl}/deck/new/shuffle/?deck_count=${count}`;

export const getNewDeckAPI =`${baseUrl}/deck/new/`;

export const drawCard = (deck_id, count=1) => `${baseUrl}/deck/${deck_id}/draw/?count=${count}`;