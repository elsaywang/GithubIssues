import "isomorphic-fetch";
import { getNewDeckAPI, drawCard } from '../utils/api';

export const getNewDeckFromAPI = async () => {
  try {
    const newDeckRes = await fetch(getNewDeckAPI);

    const { ok } = newDeckRes;
    if (ok) {
      return newDeckRes.json();
    }
  } catch (e) {
    throw Error(`failed to get correct response due the reason ${e}`);
  }
};

export const drawCardFromAPI = async (deck_id) => {
  try {
    const cardRes = await fetch(drawCard(deck_id));

    const { ok } = cardRes;
    if (ok) {
      return cardRes.json();
    }
  } catch (e) {
    throw Error(`failed to get correct response due the reason ${e}`);
  }
}