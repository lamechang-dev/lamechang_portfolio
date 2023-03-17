import { gql } from "@apollo/client";

export const GET_ALL_POKEMONS = gql`
  query GetAllPokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
    }
  }
`;
