import { Button, IconButton } from '@chakra-ui/button'
import { Box, Stack, Text } from '@chakra-ui/layout'
import { useState } from 'react'
import { AiOutlineDoubleLeft } from 'react-icons/ai'
import { AiOutlineDoubleRight } from 'react-icons/ai'
import { cards } from '../data'
import Link from 'next/link'

export default function Home() {
  const [count, setCount] = useState(0)
  const increment = () =>
    setCount((c) => {
      if (count < cards.length - 1) return c + 1
      return 0
    })
  const decrement = () =>
    setCount((c) => {
      if (count > 0) return c - 1
      return 0
    })
  const data = cards[count]
  return (
    <>
      <Stack
        fontFamily="mono"
        minH="100vh"
        bg="gray.100"
        justify="center"
        align="center"
        spacing="5"
        color="gray.500"
      >
        <Link href={`/cardswipe`} passHref>
          <Button>Swipe Page</Button>
        </Link>
        <Stack
          boxShadow="lg"
          boxSize={{ md: 'sm', base: 'xs' }}
          bg="gray.50"
          borderRadius="xl"
          p="5"
          align="center"
        >
          <Box bg="gray.300" w="100%" h="70%" borderRadius="lg"></Box>
          <Text fontSize="18px" fontWeight="bold">
            {data.title}
          </Text>
          <Text>{data.content}</Text>
        </Stack>
        <Stack direction="row" justify="center" align="center" spacing="5">
          <IconButton
            aria-label="left"
            bg="pink.300"
            color="white"
            size="lg"
            borderRadius="full"
            _hover={{ bg: 'pink.400' }}
            _focus={{ boxShadow: 'none' }}
            icon={<AiOutlineDoubleLeft />}
            boxShadow="lg"
            onClick={increment}
          />
          <IconButton
            aria-label="right"
            bg="teal.300"
            size="lg"
            color="white"
            borderRadius="full"
            _hover={{ bg: 'teal.400' }}
            _focus={{ boxShadow: 'none' }}
            icon={<AiOutlineDoubleRight />}
            boxShadow="lg"
            onClick={decrement}
          />
        </Stack>
      </Stack>
    </>
  )
}
