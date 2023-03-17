import { NextPage } from "next";
import HeaderMenuBar from "src/components/ui/HeaderMenu";
import PageContainer from "src/components/ui/PageContainer";
import ContentSection from "src/components/ui/ContentSection";
import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMONS } from "src/queries/pokemon";

const PokemonPageComponent: NextPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {
    variables: { first: 10 },
  });

  return (
    <PageContainer>
      <HeaderMenuBar className={"mb-2"} />

      <ContentSection
        className={"p-4"}
        title="BIO"
        content={
          <div>
            {data &&
              data.pokemons.map((pokemon) => (
                <div key={pokemon.id}>
                  <p>{pokemon.name}</p>
                  <img src={pokemon.image} alt={pokemon.name} />
                </div>
              ))}
          </div>
        }
      />
    </PageContainer>
  );
};

export default PokemonPageComponent;
