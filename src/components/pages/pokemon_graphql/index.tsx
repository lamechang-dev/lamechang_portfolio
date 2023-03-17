import { NextPage } from "next";
import HeaderMenuBar from "src/components/ui/HeaderMenu";
import PageContainer from "src/components/ui/PageContainer";
import ContentSection from "src/components/ui/ContentSection";
import { useQuery } from "@apollo/client";
import { GET_ALL_POKEMONS } from "src/queries/pokemon";
import { Typography } from "src/components/ui/Typography";
import { useGlobalValue } from "../../../context/hooks/index";
import { muiThemeType } from "src/context/ui/theme";
import clsx from "clsx";

const PokemonPageComponent: NextPage = () => {
  const { loading, error, data } = useQuery(GET_ALL_POKEMONS, {
    variables: { first: 10 },
  });
  const themeType = useGlobalValue(muiThemeType);

  return (
    <PageContainer>
      <HeaderMenuBar className={"mb-2"} />

      <ContentSection
        className={"p-4"}
        title="Pokemons"
        content={
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
              {data &&
                (
                  data.pokemons as Array<{
                    id: string;
                    name: string;
                    image: string;
                  }>
                ).map((pokemon) => (
                  <div
                    key={pokemon.id}
                    className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
                  >
                    <img
                      src={pokemon.image}
                      alt={pokemon.name}
                      className="w-32 h-32 mb-4"
                    />
                    <Typography
                      className={clsx(
                        "font-semibold",
                        "text-sm",
                        themeType === "light"
                          ? "text-lightPrimaryMain"
                          : "text-darkDefault"
                      )}
                    >
                      {pokemon.name}
                    </Typography>
                  </div>
                ))}
            </div>
          </div>
        }
      />
    </PageContainer>
  );
};

export default PokemonPageComponent;
