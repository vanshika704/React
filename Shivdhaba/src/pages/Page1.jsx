import { Avatar, Spacer, Flex, Box, Input, Button } from '@chakra-ui/react';
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Page1() {
  return (
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
  );
}

export default Page1;
