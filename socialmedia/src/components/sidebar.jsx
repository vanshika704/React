import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Button,
    List,
    ListItem,
    ListIcon,
  } from '@chakra-ui/react';
  import { FaList } from 'react-icons/fa';
  import { MdCreate, MdViewList, MdExplore, MdAccountCircle } from 'react-icons/md'; // Icons for list items
  
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
          <FaList />
        </Button>
        <Drawer 
          placement={placement} 
          onClose={onClose} 
          isOpen={isOpen}
          size="xs" 
        >
          <DrawerOverlay />
          <DrawerContent bg="gray.800" color="white">
            <DrawerHeader borderBottomWidth='1px'>Hey User!</DrawerHeader>
            <DrawerBody>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={MdCreate} color="white" />
                  Create Post
                </ListItem>
                <ListItem>
                  <ListIcon as={MdViewList} color="white" />
                  View Posts
                </ListItem>
                <ListItem>
                  <ListIcon as={MdExplore} color="white" />
                  Explore
                </ListItem>
                <ListItem>
                  <ListIcon as={MdAccountCircle} color="white" />
                  Profile
                </ListItem>
              </List>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  
  export default Sidebar;
  