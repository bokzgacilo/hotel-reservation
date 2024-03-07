import { SearchIcon } from "@chakra-ui/icons"
import { Stack, InputGroup, InputLeftElement, Input, Heading, Divider, CheckboxGroup, Checkbox} from "@chakra-ui/react"

export default function Sidebar() {
  return (
    <>
      <Stack>
        <Heading size='sm' mb={2}>Search Room Name: </Heading>
        <InputGroup>
          <InputLeftElement pointerEvents="none" >
            <SearchIcon color='gray.300' />
          </InputLeftElement>
          <Input tyle="search" placeholder="Search room e.g. Mint" />
        </InputGroup>
      </Stack>
      <Divider />
      <Stack>
        <Heading size='sm' mb={2}>Type of Room</Heading>
        <CheckboxGroup>
          <Stack pl={4} direction="column">
            <Checkbox>Standard</Checkbox>
            <Checkbox>Deluxe</Checkbox>
            <Checkbox>Suite</Checkbox>
            <Checkbox>Thematic</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Stack>
      <Divider />
      <Stack>
        <Heading size='sm' mb={2}>Amenities</Heading>
        <CheckboxGroup>
          <Stack pl={4} direction="column">
            <Checkbox>Wifi</Checkbox>
            <Checkbox>Pool</Checkbox>
            <Checkbox>Smart TV</Checkbox>
            <Checkbox>Videoke</Checkbox>
            <Checkbox>Mini Ref</Checkbox>
            <Checkbox>Jacuzzi</Checkbox>
            <Checkbox>Bath Tub</Checkbox>
          </Stack>
        </CheckboxGroup>
      </Stack>
    </>
  )
}