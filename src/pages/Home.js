import {Heading, Stack, SimpleGrid, Spinner, Flex } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { supabase } from './utils/supabase'
import Sidebar from './components/Sidebar'
import RoomCard from './components/RoomCard'

export default function Home() {
  const [dataSet, SetDataSet] = useState([])
  const [loading, setLoading] = useState(true)

  const getAllRoom = async () => {
    try{
      const {data, error} = await supabase.from('room').select('*');

      if(error){
        throw error;
      }

      SetDataSet(data || []);
      setLoading(false)
    }catch(error){
      console.error('Error fetching data from Supabase:', error.message);
    }

  }

  useEffect(() => {
    getAllRoom()
  }, [])

  return(
    <Flex direction={{base: 'column', lg: 'row'}} gap={4} mt={6} justifyContent='center'>
      <Flex display={{base: 'none', lg: 'flex'}} direction='column' gap={4} pr={4} w={{base: 'full', lg: '15%'}}>
        <Sidebar />
      </Flex>
      <Stack w={{base: 'full', lg: '50%'}} pb={4}>
        <Stack mb={4}>
          <Heading size="sm">{dataSet.length} Rooms Available</Heading>
        </Stack>
        <SimpleGrid columns={{base: 1, lg: 3}} spacing={6} >
          {loading && <Stack><Spinner size="lg" /></Stack>}
          {!loading && 
            dataSet.map((item, key) => (
              <RoomCard key={key} data={dataSet[key]} />
            ))
          }
        </SimpleGrid>
      </Stack>
    </Flex>
  )
}