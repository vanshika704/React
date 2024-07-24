import { useEffect, useState } from 'react';
import { Avatar, Spacer, Flex, Box, Input, Button, Card, Image, Stack, CardBody, Heading,  CardFooter, Badge } from '@chakra-ui/react';
import axios from 'axios';
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const unsplashAccessKey = '-SXu-p1sLlhOb9e6jqiKCfP46WmqjCl3DeGLt_L2-tw'; // Replace with your Unsplash Access Key
const itemApiUrl = 'https://shiv-fast-food-backend-wuq9.onrender.com/api/v1/menu/get-item'; // Replace with your original API endpoint

function Page1() {
  const [data, setData] = useState([]);

  useEffect(() => {
  
    axios.get(itemApiUrl)
      .then(response => {
        const items = response.data;

      
        const fetchImagesPromises = items.map(item => {
          return axios.get(`https://api.unsplash.com/search/photos`, {
            params: {
              query: item.name,
              client_id: unsplashAccessKey,
              per_page: 1,
            },
          })
          .then(imageResponse => {
            const imageUrl = imageResponse.data.results[0]?.urls.small || '';
            return {
              ...item,
              image: imageUrl,
            };
          });
        });

        // Wait for all image fetches to complete
        Promise.all(fetchImagesPromises)
          .then(fetchedData => {
            setData(fetchedData);
          });
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Flex alignItems="center" padding="10px" backgroundColor="white" boxShadow="sm">
        <Avatar name='Dan Abrahmov' src='src/assets/image.png' height={50} width={50} />
        <Box marginLeft="10px">
          <div className='Welcome'>
            <div className='ubuntu-regular'>Welcome</div>
            <div className='ubuntu-medium'>Shiv Dhaba Restaurant</div>
          </div>
        </Box>
        <Spacer />
        <Box as="form" display="flex" alignItems="center">
          <Input className="form-control" type="search" placeholder="Search" aria-label="Search" marginRight="10px" />
          <Button className="btn btn-outline-success" width={100} type="submit" marginRight="10px">Search</Button>
        </Box>
        <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' height={50} width={50} marginLeft="10px" />
      </Flex>
      <div className='List'>
        {data.map((item, index) => (
          <Card key={index} direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '200px' }}
              src={item.image}
              alt={item.name}
            />
            <Stack>
              <CardBody>
                <Heading size='md'>{item.name}</Heading>
                <Badge colorScheme={item.isVeg ? 'green' : 'red'}>{item.isVeg ? 'Veg' : 'Non-Veg'}</Badge>
              </CardBody>
              <CardFooter>
                <Button variant='solid' colorScheme='blue'>
                  Order {item.name}
                </Button>
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Page1;
