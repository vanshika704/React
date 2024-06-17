import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react';

function Appbar() {
  return (
    <div className='Appbarcontainer'>
      <img src="src/assets/image (1) 1.png" alt="Appbar Image"  width={200}/>
      <Breadcrumb spacing='8px' separator=' ' color='white' style={{ paddingTop: '10px' }}>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Softwares</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Industries</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem >
          <BreadcrumbLink href='#'>Contact Us</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Carrers</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <div className='signin'>
        <button className='btn-transparent'>Signin</button>
        <button className='btn-white'>Create free Account</button>
        <button className='btn-image'>
          <img src="src/assets/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13 1.png" alt="Google Logo" className="btn-image-logo" />
        </button>
      </div>
    </div>
  );
}

export default Appbar;
