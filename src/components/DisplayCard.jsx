import React, { useEffect, useState } from 'react';
import { fetchOrganizationname, fetchOrganizations, fetchPhotos } from '../Data/Organizations';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import CardDetails from './CardDetails';

function DisplayCard() {
  const [organizations, setOrganizations] = useState([]);
  const [images, setImages] = useState([]);
 const [unik,setunik]=useState([])
  const { id } = useParams(); // Get the 'id' parameter from the URL

  useEffect(() => {
    fetchOrganizations()
      .then(data => {
        setOrganizations(data);
        // console.log(data[id].base64Images);
       
        setunik(data[id].organization.uniqueName)
        //  console.log(unik)
      })
      .catch(error => {
        console.error('Error fetching organizations:', error);
      });
  }, [id]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchOrganizationname({unik});
        // Assuming the data contains an array of image URLs
        const base64Images = data.base64Images.map(image => `data:image/jpeg;base64,${image}`);
        setImages(base64Images);
        console.log(images)
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchData();
  }, []);
  // Find the organization with the specified 'id'
  const organization = organizations.find(org => org.organization.id === Number(id));

  return (
    <div>
      {/* {console.log(id)} */}
      {organization && (
        <CardDetails
        index={id}
        img={images}
          title={organization.organization.name}
          Rating={organization.organization.category.id}
          PWD={organization.organization.pwdadapted}
          Parking={organization.organization.open24}
          pay={organization.organization.pay}
          loc={organization.organization.city.name}
          Pet={organization.organization.petFriendly}
          tel={organization.organization.tel}
          start={organization.organization.startTime}
          end={organization.organization.endTime}
         
        />
      )}
      
    </div>
  );
}

export default DisplayCard;
