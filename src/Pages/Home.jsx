import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import { ConfigProvider, Pagination } from 'antd';
import { fetchOrganizations, fetchPhotos } from '../Data/Organizations';
import BusinessAd from '../components/registration/BusinessAd';
import { Resizer } from 'react-image-file-resizer';
function Home() {



  
  const [scrollDirection, setScrollDirection] = useState('');

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setScrollDirection(currentScrollPos > scrollPos ? 'down' : 'up');
    setScrollPos(currentScrollPos);
  };
 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [scrollPos, setScrollPos] = useState(0);


  // jancksnxansanx
  const navigate = useNavigate();
  const [organizations, setOrganizations] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchOrganizations();
        setOrganizations(data);
      } catch (error) {
        console.error('Error fetching organizations:', error);
      }
    };
  
    fetchData();
  }, []);
  


  
  useEffect(() => {
    const fetchCardPhotos = async () => {
      const updatedOrganizations = await Promise.all(
        organizations.map(async organization => {
          const photos = await fetchPhotos(organization.id);
          return { ...organization, imgUrl: photos[0] }; // Assuming photos is an array and you want to set the first photo as the imgUrl
        })
      );
      setOrganizations(updatedOrganizations);
    };

    fetchCardPhotos();
  }, [organizations]);

  const itemRender = (_, type, originalElement) => {
    if (type === 'prev') {
      return <a>Previous</a>;
    }
    if (type === 'next') {
      return <a>Next</a>;
    }
    return originalElement;
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
  };

  const cardsPerPage =12;

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentCards = organizations.slice(startIndex, endIndex);

  return (
    <>
   <div className='flex'>
      <div className="ml-20 mt-5 block md:before:ml-12  md:after:ml-13">
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {/* Render the cards */}
        {  console.log(currentCards)}
          {currentCards.map((organization, index) => (
           
            <Link to={`/card/${organization.organization.id}`} target="_blank" key={index}>
              <Card
                imgUrl={organization.base64Images[0]}
                title={organization.organization.name}
                location={organization.organization.city.name}
                rating={organization.organization.category.id}
              />
            </Link>
          ))}
          {console.log(organizations)}
        </div>

        {/* Render the Pagination component */}
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: 'rgb(232, 14, 94)',
            },
          }}
        >
          <Pagination
            total={organizations.length}
            itemRender={itemRender}
            showSizeChanger={false}
            onChange={handlePageChange}
            pageSize={cardsPerPage} // Specify the number of cards per page
            current={currentPage} // Specify the current active page
            style={{ marginTop: '30px', textAlign: 'center' }} // Add custom styles using inline styles
          />
        </ConfigProvider>

      
        <div>
         
    </div>
  
      </div>
     
      <div className='float top-[30%]  ml-[70%] fixed'>

<BusinessAd/>
       </div>
       </div>
    </>
  );
}

export default Home;
