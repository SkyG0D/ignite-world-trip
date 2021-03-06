import { Box, Button, Center, Image } from '@chakra-ui/react';
import Link from 'next/link';
import Router from 'next/router';

interface HeaderProps {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Box as="header" pos="relative" maxW={1200} mx="auto">
      {showBackButton && (
        <Button
          pos="absolute"
          top="50%"
          transform="translateY(-50%)"
          left="1rem"
          variant="unstyled"
          onClick={Router.back}
          textAlign="center"
        >
          <Center>
            <Image src="/images/back.svg" width="12px" />
          </Center>
        </Button>
      )}

      <Center h={100}>
        <Link href="/">
          <a>
            <Image
              src="/images/logo.svg"
              alt="Nome World Trip com avião voando na ponta"
              width={{ base: '150px', md: '184px' }}
            />
          </a>
        </Link>
      </Center>
    </Box>
  );
}
