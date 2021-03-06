import { Flex } from '@chakra-ui/react';

import { TravelType } from './TravelType';

export function TravelTypes() {
  return (
    <Flex minH="145" align="center" justify="space-between" wrap="wrap">
      <TravelType image="/images/cocktail.svg" title="Vida noturna" />
      <TravelType image="/images/surf.svg" title="Praia" />
      <TravelType image="/images/building.svg" title="Moderno" />
      <TravelType image="/images/museum.svg" title="Clássico" />
      <TravelType image="/images/earth.svg" title="e mais..." />
    </Flex>
  );
}
