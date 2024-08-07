import { useEffect, useState } from 'react';
import { Avatar, Spacer, Flex, Box, Input, Button, Card, Image, Stack, CardBody, Heading, CardFooter, Badge, Spinner } from '@chakra-ui/react';
import axios from 'axios';
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoHome } from "react-icons/io5";
const unsplashAccessKey = '-SXu-p1sLlhOb9e6jqiKCfP46WmqjCl3DeGLt_L2-tw'; // key for unsplash api 
const itemApiUrl = 'https://shiv-fast-food-backend-wuq9.onrender.com/api/v1/menu/get-item'; // this is the backend used for collection of data

function Page1() {
  const [data, setData] = useState([]); // state to store the data 
  const [loading, setLoading] = useState(true); // state for loading spinner
  const [counts, setCounts] = useState({}); // state to store the count for each item

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

        Promise.all(fetchImagesPromises)
          .then(fetchedData => {
            setData(fetchedData);
            setLoading(false); // set loading to false when data is fetched
          });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // set loading to false even if there is an error
      });
  }, []);

  const handleAddToCart = (itemId) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: (prevCounts[itemId] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (itemId) => {
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      if (newCounts[itemId] > 0) {
        newCounts[itemId] -= 1;
      }
      return newCounts;
    });
  };

  return (
    <div>
      <Flex alignItems="center" padding="10px" backgroundColor="teal" boxShadow="sm" opacity={9}>
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
        {loading ? (
          <Flex justifyContent="center" alignItems="center" height="80vh">
            <Stack direction='row' spacing={4}>
              <Spinner size='xs' />
              <Spinner size='sm' />
              <Spinner size='md' />
              <Spinner size='lg' />
              <Spinner size='xl' />
            </Stack>
          </Flex>
        ) : (
          data.map((item, index) => (
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
                  <Badge colorScheme={item.isVeg ? 'green' : 'red'}>{item.isVeg ? 'Veg' : 'Non-Veg'}</Badge><br></br>
                  {counts[item.id] ? (
                    <Flex marginTop={10} alignItems="center">
                      <Button 
                        colorScheme='teal' 
                        variant='outline' 
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        -
                      </Button>
                      <Box marginX={2}>{counts[item.id]}</Box>
                      <Button 
                        colorScheme='teal' 
                        variant='outline' 
                        onClick={() => handleAddToCart(item.id)}
                      >
                        +
                      </Button>
                    </Flex>
                  ) : (
                    <Button 
                      colorScheme='teal' 
                      variant='outline' 
                      marginTop={10} 
                      marginLeft={500}
                      onClick={() => handleAddToCart(item.id)}
                    >
                      Add to Cart
                    </Button>
                  )}
                </CardBody>
                <CardFooter>
                  <Button variant='solid' colorScheme='blue'>
                    Order {item.name}
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          ))
        )}
      </div>
      <nav className="navbar fixed-bottom bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><IoHome /></a>
        </div>
      </nav>
    </div>
  );
}

export default Page1;
