import { useRouter } from "next/router";
import { Text, Input, Select, Box, Flex, Heading, ModalHeader, Stack, List, ListItem, ListIcon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { CheckCircleIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import Carousel from "../components/Carousel";
import Link from "next/link";

export default function RoomPage() {
  const router = useRouter();
  const {id} = router.query;

  const [room, setRoomDetails] = useState([])
  const {isOpen, onOpen, onClose} = useDisclosure();
  const [loadingState, setLoadingState] = useState(false)

  const getRoomDetails = async () => {
    try {
      const {data, error} = await supabase.from('room').select('*').eq('name', id)

      if(error){
        throw error;
      }

      setRoomDetails(data || [])
      setLoadingState(true)
    }catch (error) {
      router.push('/')
    }
  }

  useEffect(() => {
    if(id){
      getRoomDetails()
    }
  })

  return(
    <Flex pt="2vh" direction='column' alignItems='center'>
        {loadingState ? 
        <Stack spacing={4} w={{base: 'full', lg: '45%'}}>
          <Link href='/'>
            <Flex direction='row' alignItems='center' fontSize='3xl' fontWeight='500'>
              <ChevronLeftIcon />
              <Heading></Heading>{room[0].name}
            </Flex>
          </Link>
          <Box w='auto' overflow='hidden'>
            <Carousel custom_height='500px' urls={room[0].image_urls} />
          </Box>
          <Flex mb={4} justifyContent='space-between' direction={{base: 'column', lg: 'row'}} gap={{base: 8, lg: 4}} mt={4}>
            <Stack spacing={4} w={{base: '', lg: '50%'}}>
              <Heading size="md">Description</Heading>
              <Text>{room[0].description}</Text>
              <Heading fontSize="lg">Inclusions</Heading>
              <List spacing={2}>
                {room[0].inclusions.map((inclusion, key) => (
                  <ListItem key={key}>
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    {inclusion}
                  </ListItem>
                ))}
              </List>
            </Stack>
            <Stack spacing={4} w={{base: '', lg: '40%'}}>
              <Heading size="md">Your booking details</Heading>
              <Flex direction="row" alignItems="center" gap={2}>
                <Heading size="3xl">₱ {room[0].rate}</Heading>
                <Text fontSize="md">per night</Text>
              </Flex>
              <Text fontSize="sm" color='gray.500'>Maximum of {room[0].max_pax} person</Text>
              <Stack>
                <Heading size='sm' mb={2}>Select Date</Heading>
                <Input type='date' />
              </Stack>
              <Stack>
                <Heading size='sm' mb={2}>Stay</Heading>
                <Select>
                  <option>Just this night</option>
                  <option>2 Nights</option>
                  <option>3 Nights</option>
                </Select>
              </Stack>
              <Box 
                borderRadius='4px' 
                color='#fff' 
                padding={4} 
                textAlign='center'
                backgroundColor='#000'  
                onClick={onOpen}
              >Book Now</Box>
            </Stack>
          </Flex>
        </Stack>
      : <Stack><Spinner /></Stack>}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent >
          <ModalHeader>Complete Booking Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={6}>
            <Stack spacing={4}>
              <Flex direction="row" p={4} justifyContent="space-evenly" boxShadow="rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;">
                <Stack alignItems="center">
                  <Heading size="sm" mb={2}>Date and Time</Heading>
                  <Text>03/06/2024 05:01 PM</Text>
                </Stack>
                <Stack alignItems="center">
                  <Heading size="sm" mb={2}>Number of Stays</Heading>
                  <Text>1 Night</Text>
                </Stack>
              </Flex>
              <Stack spacing={4}>
                <Heading size="sm" >Fullname</Heading>
                <Input type="text" placeholder="Lastname, Firstname M.I"/>
              </Stack>

              <Stack>
                <Heading size="sm">Email</Heading>
                <Input type="email" placeholder="juandelacruz@gmail.com"/>
                <Text fontSize="sm">We will send the confirmation to this address</Text>
              </Stack>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  )
}

