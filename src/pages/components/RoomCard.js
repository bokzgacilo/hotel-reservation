import { CheckCircleIcon } from '@chakra-ui/icons'
import {Heading, Stack, Text, List, ListItem, ListIcon, Flex, Box } from '@chakra-ui/react'
import Carousel from './Carousel';
import { useRouter } from 'next/router';

function RoomCard (props) {
  const router = useRouter();
  const {data} = props;

  const handleBookNow = (room) => {
    router.push(`/room/${room}`)
  }

  return(
    <Stack 
      className='custom-card' 
      spacing={4}
    >
      <Stack className='card-image' position='relative'>
        <Flex zIndex={3} w='100%' position='absolute' top='2%' justifyContent='space-between'>
          <Box pt={2} pb={2} pe={6} ps={6} color='#fff' backgroundColor='#000'>{data.type}</Box>
          <Box pt={2} pb={2} pe={6} ps={6} color='#fff' backgroundColor='#000' >PHP {data.rate} / night</Box>
        </Flex>
        <Carousel custom_height='250px' urls={data.image_urls} />
      </Stack>
      <Stack>
        <Heading size='lg'>{data.name}</Heading>
        <Text color="gray.600" mb={2} fontSize="sm" noOfLines={3}>{data.description}</Text>
        <Heading size="sm">Inclusions</Heading>
        <List spacing={2} mb={2}>
          {data.inclusions.map((inclusion, subItem) => (
            <ListItem key={subItem} fontSize="sm">
              <ListIcon as={CheckCircleIcon} color="green.500" />
              {inclusion}
            </ListItem>
          ))}
        </List>
        <Box
          borderRadius='4px' 
          color='#fff' 
          padding={4} 
          textAlign='center'
          backgroundColor='#000' 
          onClick={() => handleBookNow(data.name)}
        >Book Now</Box>
      </Stack>
    </Stack>
  )
}

export default RoomCard;