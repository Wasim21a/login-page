import React, { useEffect, useState } from 'react'

const Card = () => {

    const [token, setToken] = useState('');
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const fetchToken = async () => {
        try {
          const formData = new FormData();
          formData.append('username', 'test1122@gmail.com');
          formData.append('password', 'Pakistan@123');
  
          const response = await fetch('https://eservices.dhai-r.com.pk/api/login', {
            method: 'POST',
            body: formData,
          });
  
          const data = await response.json();
        //   console.log("data",data);
        //   console.log("data",data.data_array.token);
          const fetchedToken = data.data_array.token; 
  
          if (fetchedToken) {
            setToken(fetchedToken);
          // console.log("fetchedToken",fetchedToken);
          }
        } catch (error) {
          console.error('Error fetching token:', error);
        }
      };
  
      fetchToken();
    }, []);

    
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/sos/sos_list', {
            headers: {
              Authorization: `Bearer ${token}`,
              // Add any other headers required for the data API
            },
          });
    
          const data = await response.json();
          // Process the data as needed
    
          setData(data.data_array);
          setIsLoading(false);

          console.log('Fetched Data:', data);
          console.log('Fetched Data:', data.data_array[0].id);

        } catch (error) {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        }
      };
    
      if (token) {
        fetchData();
      }
    }, [token]);
    
  

  return (
    <div>
        <div className='flex flex-col justify-center items-center h-16'> 
            <h1 className='text-black text-center text-4xl font-bold absolute z-40 '>Fetched Data</h1>
        </div>
        <div>
            <div className="my-8 px-5 md:px-10 lg:px-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {data.map(item => (
                  <div key={item.id} className="mt-3 w-full h-auto border-t-8 border-blue-300 shadow-2xl md:transition-transform duration-300 hover:scale-105 relative">
                      <div className="-mt-8 absolute top-0 left-1/2 transform -translate-x-1/2">
                          <div className="bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center">
                              <h2 className="text-lg font-semibold">{item.id}</h2>
                          </div>
                      </div>
                      
                      <div className="mt-16 p-4 text-center flex flex-col justify-center">
                          <h5 className="text-lg font-bold">{item.name}</h5>
                          <p className="mt-2">{item.status}</p>
                          <a href={item.url} className="mt-2 text-xl font-bold text-blue-500 underline underline-offset-4">MORE</a>
                      </div>
                  </div>
              ))}
          </div>
        </div>        
    </div>
  )
}

export default Card
