import type { FavoriteProps } from "@/interfaces/favorite-character";
import { getNameLink, getUniqueNameTrannsition } from "@/utils";
import { createSignal, For } from "solid-js";

const getLocalStorageFavorites = (): FavoriteProps[] => {
  const favorites = localStorage.getItem("favoriteCharacters");
  return favorites ? JSON.parse(favorites) : [];
};

export const FavoriteList = () => {
  const [characters, setCharacters] = createSignal<FavoriteProps[]>(
    getLocalStorageFavorites()
  );

  const removeFavorite = (id: number) => {
    const updatedFavorites = characters().filter(
      (character) => character.id !== id
    );
    setCharacters(updatedFavorites);
    localStorage.setItem(
      "favoriteCharacters",
      JSON.stringify(updatedFavorites)
    );
  };

  return (
    <section
      aria-label="list of characters"
      class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-12"
    >
      <For each={characters()}>
        {(character) => (
          <div class="flex flex-col items-center">
            <a
              href={`/characters/${getNameLink(character.name)}`}
              title={character.name}
            >
              <img
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt={character.name}
                class="w-48 h-52 object-cover rounded-lg mb-2 mx-auto"
                style={`view-transition-name: ${getUniqueNameTrannsition(
                  character.name
                )}`}
              />
              <h2 class="uppercase text-center">{character.name}</h2>
            </a>
            <button
              class="text-red-500 hover:text-red-700 hover:scale-105 transition-transform hover:cursor-pointer"
              onClick={() => removeFavorite(character.id)}
            >
              <span>Remove favorite</span>
            </button>
          </div>
        )}
      </For>
    </section>
  );
};
