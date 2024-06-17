import { Card,  CardBody,  Image,Stack, Heading,Text, } from '@chakra-ui/react'
function Cards(){
    return(<><div className="Cards">
        <Card maxW='sm'>
  <CardBody>
    <Image
      src='src/assets/66358-online-shopping.png'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Mini Shops</Heading>
      <Text>
      With Exponance&apos;s finance management software for showrooms and small stores, you can automate your financial processes. Take advantage of staff management, billing systems, inventory support, and thorough tracking of expenditures, bills, leases, and borrowing information. Financial operations can be optimised to unlock growth potential.
      </Text>
      
    </Stack>
  </CardBody>
  
 
</Card></div></>)
}
export default Cards;