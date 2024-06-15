import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
  } from '@chakra-ui/react';
import { FaList } from 'react-icons/fa';
  
  function Sidebar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const placement = 'left'; 
  
    return (
      <>
        <Button 
          onClick={onOpen} 
          backgroundColor="gray.800" 
          color="white"
          _hover={{ backgroundColor: 'gray.800' }} 
          _active={{ backgroundColor: 'gray.900' }} 
        >
       <FaList/>
        </Button>
        <Drawer 
          placement={placement} 
          onClose={onClose} 
          isOpen={isOpen}
          size="xs" 
        >
          <DrawerOverlay />
          <DrawerContent bg="gray.800" color="white">
            <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
            <DrawerBody>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  
  export default Sidebar;
  