// api.js
export const fetchOrganizations = async () => {
  try {
    const response = await fetch('http://localhost:8080/Organizations/getAllOrganizations');
    if (!response.ok) {
      throw new Error('Error fetching organizations');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching organizations:', error);
    throw error;
  }
};
export const fetchOrganizationname = async ({name}) => {
  try {
    const response = await fetch(`http://localhost:8080/Organizations/getOrgnization?name=${name}`);
    if (!response.ok) {
      throw new Error('Error fetching organizations');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching organizations:', error);
    throw error;
  }
};

  
//  http://localhost:8080/Upload/GetImages?id=${id}
  export const fetchPhotos = (id) => {
    return fetch(`http://localhost:8080/Upload/GetImages?id=${id}`)
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching organizations:', error);
      });
  };
  
  export const Category = () => {
    return fetch("http://localhost:8080/Category/getCategories")
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching organizations:', error);
      });
  };
  
  
  
  