import { Card, CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';


const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

function Cards() {
  return (<div className='cards'>
    <ChakraProvider theme={theme}>
      <div className="Cards">
        <Card maxW='sm' width="calc(100% - 80px)" height="calc(100% - 30px)"  backgroundColor='blackAlpha.800'>
          <CardBody>
            <Image
              src='src/assets/66358-online-shopping.png'
              borderRadius='lg'
              width={100}
              height={100}
            />
            <Stack mt='4' spacing='3'>
              <Heading size='md' color={'white'}>Mini Shops</Heading>
              <Text fontSize='13px' color={'white'}>
                With Exponance&apos;s finance management software for showrooms and small stores, you can automate your financial processes. Take advantage of staff management, billing systems, inventory support, and thorough tracking of expenditures, bills, leases, and borrowing information. Financial operations can be optimized to unlock growth potential.
              </Text>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </ChakraProvider>
    <ChakraProvider theme={theme}>
      <div className="Cards">
        <Card maxW='sm' width="calc(100% - 80px)" height="calc(100% - 30px)"  backgroundColor='blackAlpha.800'>
          <CardBody>
            <Image
              src='src/assets/98827-shopweb-edit.png'
              borderRadius='lg'
              width={100}
              height={100}
            />
            <Stack mt='4' spacing='3'>
              <Heading size='md' color={'white'}>Micro Shops</Heading>
              <Text fontSize='13px' color={'white'}>
              Exponance provides a user-friendly finance management tool designed specifically for small businesses. Inventory management, billing, employee management, and expense tracking can streamline your operations. Improve productivity and simplify your finances for small businesses

              </Text>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </ChakraProvider> <ChakraProvider theme={theme}>
      <div className="Cards">
        <Card maxW='sm' width="calc(100% - 80px)" height="calc(100% - 30px)"  backgroundColor='blackAlpha.800'>
          <CardBody>
            <Image
              src='src/assets/49964-running-on-treadmill.png'
              borderRadius='lg'
              width={100}
              height={100}
            />
            <Stack mt='4' spacing='3'>
              <Heading size='md' color={'white'}>Fitness Sector</Heading>
              <Text fontSize='13px' color={'white'}>
              With Exponance, you can effortlessly manage your gym&apos;s finances. Our cloud-based platform offers staff management, inventory support, membership management, late payment management, advance payment management, overdue payment management, and full billing and monitoring features. To increase productivity, automate the financial operations of your gym.

              </Text>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </ChakraProvider> <ChakraProvider theme={theme}>
      <div className="Cards">
        <Card maxW='sm' width="calc(100% - 80px)" height="calc(100% - 30px)"  backgroundColor='blackAlpha.800'>
          <CardBody>
            <Image
              src='src/assets/Wavy Buddies Choosing Food.png'
              borderRadius='lg'
              width={100}
              height={100}
            />
            <Stack mt='2' spacing='3'>
              <Heading size='md' color={'white'}>Restaurants</Heading>
              <Text fontSize='13px' color={'white'}>
              Utilise Exponance to improve the financial administration of your restaurants. Our platform provides staff administration, inventory support for food and other items, urgent requirements, customer monitoring advance payments, and expiration tracking. For a seamless dining experience, streamline bills, rent management, and borrowing information.

              </Text>
            </Stack>
          </CardBody>
        </Card>
      </div>
    </ChakraProvider>
    </div>
  );
}

export default Cards;
