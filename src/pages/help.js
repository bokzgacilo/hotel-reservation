import { Accordion, AccordionItem, AccordionButton, AccordionIcon, Box, Text, AccordionPanel, Heading, Stack, Button, Textarea, Input, Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PhoneIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { supabase } from "./utils/supabase";

export default function Help() {
  const [faqs, setFaqs] = useState([]);

  const getAllFaqs = async () => {
    try {
      const {data, error} = await supabase.from('faq').select('*')

      if(error){
        throw error;
      }

      setFaqs(data || []);

    }catch(error){
      throw error;
    }
  }

  useEffect(() => {
    getAllFaqs();
  }, [])

  return(
    <Flex direction='column' pb={4} mt={6} justifyContent='center' alignItems='center'>
      <Stack width={{base: 'full', lg: '35%'}} spacing={4}>
        <Heading size="md" mb={2}>Frequenty Asked Questions (FAQs)</Heading>
        <Accordion w="100%">
          {faqs.map(item => (
            <AccordionItem key={item.id} p={4}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <Text fontWeight="bold" fontSize="sm">{item.question}</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {item.answer}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
        <Heading size="md" mt={4}>Contact Us</Heading>
        <Stack direction={{base: 'column', lg: 'row'}} spacing={4}>
          <Button leftIcon={<PhoneIcon />}  variant='ghost'>09762220951</Button>
          <Button colorScheme="facebook" leftIcon={<FontAwesomeIcon icon={faFacebookF} />} >Facebook</Button>
          <Button colorScheme="twitter" leftIcon={<FontAwesomeIcon icon={faTwitter} />} >Facebook</Button>
          <Button 
            colorScheme="purple" 
            bgGradient="linear(to-r, purple.500, pink.500, orange.500)"
            _hover={{ bgGradient: "linear(to-r, purple.600, pink.600, orange.600)" }}
            _active={{ bgGradient: "linear(to-r, purple.700, pink.700, orange.700)" }}
            _focus={{ boxShadow: "outline" }}
            leftIcon={<FontAwesomeIcon icon={faInstagram} />} 
          >Instagram</Button>
        </Stack>
        <Heading size="md" mt={4}>Message Us</Heading>
        <Stack spacing={4} >
          <Input type="email" placeholder="Enter your email"></Input>
          <Textarea placeholder="Say something"></Textarea>
          <Button colorScheme="blue">Send Message</Button>
        </Stack>
      </Stack>
      
    </Flex>
  )
}