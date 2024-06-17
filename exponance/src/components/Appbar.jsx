import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
   
  } from '@chakra-ui/react'
function Appbar (){
return (<>
<Breadcrumb spacing='8px' separator={' '} color={'white'} >
  <BreadcrumbItem>
    <BreadcrumbLink href='#'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    <BreadcrumbLink href='#'>About</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
    <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb></>)
}
export default Appbar;