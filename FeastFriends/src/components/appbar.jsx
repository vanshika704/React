
import "../index.css";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box, Flex, useBreakpointValue } from '@chakra-ui/react';

function AppBar() {
  // Control the display based on the screen size
  const breadcrumbSpacing = useBreakpointValue({ base: "5px", md: "10px" });
  const navPadding = useBreakpointValue({ base: "10px", md: "20px" });

  return (
    <Box as="nav" bg="black" color="white" width="100vw" maxWidth="100%" padding={navPadding}>
      <Flex justify="space-between" align="center" className="container-fluid">
        {/* Responsive brand name */}
        <Box className="FeastFriends" fontSize={useBreakpointValue({ base: "20px", md: "28px" })} fontWeight="bold">
          Feast Friends
        </Box>
        {/* Breadcrumb menu */}
        <Breadcrumb spacing={breadcrumbSpacing} separator=" " className="breadcrumb-container">
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Explore</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Partner</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">About</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Contact</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Flex>
    </Box>
  );
}

export default AppBar;
