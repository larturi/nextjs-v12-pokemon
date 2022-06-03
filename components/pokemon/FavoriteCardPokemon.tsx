import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid } from '@nextui-org/react';

interface Props {
    pokemonId: number;
}

export const FavoriteCardPokemon: FC<Props> = ({pokemonId}) => {

   const router = useRouter();

   const onFavoriteClicked = () => {
     router.push(`/pokemon/id/${pokemonId}`);
   } 

   return (
      <Grid key={pokemonId} xs={6} sm={3} md={2} xl={1}>
         <Card
            hoverable
            clickable
            onClick={onFavoriteClicked}
            css={{
               padding: 10,
            }}
         >
            <Card.Body>
               <Card.Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                  alt='pokemon'
                  width={'100%'}
                  height={140}
               />
            </Card.Body>
         </Card>
      </Grid>
   );
};
