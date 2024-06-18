import { Card, CardBody, Image, Stack, Heading, Text } from '@chakra-ui/react';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; 

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
});

function Cards() {
  const handleDragStart = (e) => e.preventDefault();

  const items = [
    {
      imageSrc: 'src/assets/66358-online-shopping.png',
      title: 'Mini Shops',
      description: ' With Exponance&apos;s finance management software for showrooms and small stores, you can automate your financial processes. Take advantage of staff management, billing systems, inventory support, and thorough tracking of expenditures, bills, leases, and borrowing information. Financial operations can be optimized to unlock growth potential.',
    },
    {
      imageSrc: 'src/assets/98827-shopweb-edit.png',
      title: 'Micro Shops',
      description: 'Exponance provides a user-friendly finance management tool designed specifically for small businesses. Inventory management, billing, employee management, and expense tracking can streamline your operations. Improve productivity and simplify your finances for small businesses',
    },
    {
      imageSrc: 'src/assets/49964-running-on-treadmill.png',
      title: 'Fitness Sector',
      description: ' With Exponance, you can effortlessly manage your gym&apos;s finances. Our cloud-based platform offers staff management, inventory support, membership management, late payment management, advance payment management, overdue payment management, and full billing and monitoring features. To increase productivity, automate the financial operations of your gym.',
    },
    {
      imageSrc: 'src/assets/Wavy Buddies Choosing Food.png',
      title: 'Restaurants',
      description: ' Utilise Exponance to improve the financial administration of your restaurants. Our platform provides staff administration, inventory support for food and other items, urgent requirements, customer monitoring advance payments, and expiration tracking. For a seamless dining experience, streamline bills, rent management, and borrowing information.',
    },
  ];

  return (
    <div className='cards'>
      <ChakraProvider theme={theme}>
        <AliceCarousel
          autoPlay
          autoPlayInterval={1000}
          mouseTracking
          disableDotsControls
          infinite
          disableButtonsControls
          items={items} 
          responsive={{
            0: { items: 1 },    
            768: { items: 2 }, 
            1024: { items: 3 },
          }}
        >
          {items.map((item, index) => (
            <div key={index} className="Cards">
              <Card maxW='sm' width="100%" height="100%" backgroundColor='blackAlpha.800'>
                <CardBody>
                  <Image
                    src={item.imageSrc}
                    borderRadius='lg'
                    width={100}
                    height={100}
                    onDragStart={handleDragStart}
                  />
                  <Stack mt='4' spacing='4'>
                    <Heading size='md' color={'white'}>{item.title}</Heading>
                    <Text fontSize='15px' color={'white'}>
                      {item.description}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            </div>
          ))}
        </AliceCarousel>
      </ChakraProvider>
    </div>
  );
}

export default Cards;
