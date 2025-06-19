import type { CharactersListResponse } from "@/interfaces/characters-list.response";

export const getCharactersList = async (
  limit: number = 8 * 10
): Promise<CharactersListResponse> => {
  const res = await fetch(
    `https://gateway.marvel.com/v1/public/characters?apikey=57503e6cedd86cba4f5b9ead0742f1bc&limit=${limit}&ts=1234567890&hash=f3c394e961e1d44855a75f3dd46491db`
  );
  const data = (await res.json()) as CharactersListResponse;

  return data;
};
