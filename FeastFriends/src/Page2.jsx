
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

function Home() {
  return (
    <Breadcrumb spacing='8px'>
      <BreadcrumbItem>
        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href='#'>About</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
}

export default Home;
