
import { Rate } from 'antd';

import { IconContext } from 'react-icons';
import { FaHeart } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';


function Card({ id, imgUrl,  title, location, rating }) {

 
 
  return (
    <div className="Card w-[300px] h-[200px] relative"  >
      <div className="Rectangle12 w-[300px] h-[200px] left-0 top-0 absolute bg-white rounded-lg shadow border border border border border-stone-400 border-opacity-60" />
      {imgUrl ? (
  <img
    className="Rectangle13 w-[300px] h-[140px] left-0 top-0 absolute rounded-tl-lg rounded-tr-lg shadow"
    src={`data:image/jpeg;base64,${imgUrl}`}
    alt="Image"
  />
) : (
  <img
    className="Rectangle13 w-[300px] h-[140px] left-0 top-0 absolute rounded-tl-lg rounded-tr-lg shadow"
    src="https://www.gmt-sales.com/wp-content/uploads/2015/10/no-image-found.jpg"
    alt="Alternative Image"
  />
)}

      <div className="Rates w-[140px] h-5 left-[130px] top-[152px] absolute justify-center items-start gap-0.5 inline-flex">
        <Rate disabled value={rating} />
      </div>
      <div className="Info w-[90px] h-[39px] left-[11px] top-[149px] absolute">
        <div className="Location w-[100px] h-[17px] left-0 top-[22px] absolute">
        <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
<path d="M11.7188 13.125H8.8207C9.30753 12.6903 9.76663 12.2255 10.1953 11.7334C11.8037 9.88359 12.6562 7.93359 12.6562 6.09375C12.6562 4.72623 12.113 3.41472 11.146 2.44773C10.179 1.48075 8.86752 0.9375 7.5 0.9375C6.13248 0.9375 4.82097 1.48075 3.85398 2.44773C2.887 3.41472 2.34375 4.72623 2.34375 6.09375C2.34375 7.93359 3.19395 9.88359 4.80469 11.7334C5.23337 12.2255 5.69247 12.6903 6.1793 13.125H3.28125C3.15693 13.125 3.0377 13.1744 2.94979 13.2623C2.86189 13.3502 2.8125 13.4694 2.8125 13.5938C2.8125 13.7181 2.86189 13.8373 2.94979 13.9252C3.0377 14.0131 3.15693 14.0625 3.28125 14.0625H11.7188C11.8431 14.0625 11.9623 14.0131 12.0502 13.9252C12.1381 13.8373 12.1875 13.7181 12.1875 13.5938C12.1875 13.4694 12.1381 13.3502 12.0502 13.2623C11.9623 13.1744 11.8431 13.125 11.7188 13.125ZM3.28125 6.09375C3.28125 4.97487 3.72572 3.90181 4.51689 3.11064C5.30806 2.31947 6.38112 1.875 7.5 1.875C8.61888 1.875 9.69194 2.31947 10.4831 3.11064C11.2743 3.90181 11.7188 4.97487 11.7188 6.09375C11.7188 9.44707 8.46855 12.2461 7.5 13.0078C6.53145 12.2461 3.28125 9.44707 3.28125 6.09375ZM9.84375 6.09375C9.84375 5.6302 9.70629 5.17706 9.44876 4.79163C9.19122 4.4062 8.82518 4.1058 8.39691 3.92841C7.96865 3.75101 7.4974 3.7046 7.04276 3.79503C6.58811 3.88547 6.1705 4.10869 5.84272 4.43647C5.51494 4.76425 5.29172 5.18186 5.20128 5.63651C5.11085 6.09115 5.15726 6.5624 5.33466 6.99066C5.51205 7.41893 5.81245 7.78497 6.19788 8.04251C6.58331 8.30004 7.03645 8.4375 7.5 8.4375C8.1216 8.4375 8.71774 8.19057 9.15728 7.75103C9.59682 7.31149 9.84375 6.71535 9.84375 6.09375ZM6.09375 6.09375C6.09375 5.81562 6.17623 5.54374 6.33075 5.31248C6.48527 5.08122 6.70489 4.90098 6.96185 4.79454C7.21881 4.68811 7.50156 4.66026 7.77435 4.71452C8.04713 4.76878 8.2977 4.90271 8.49437 5.09938C8.69104 5.29605 8.82497 5.54662 8.87923 5.8194C8.93349 6.09219 8.90564 6.37494 8.79921 6.6319C8.69277 6.88886 8.51253 7.10848 8.28127 7.263C8.05001 7.41752 7.77813 7.5 7.5 7.5C7.12704 7.5 6.76935 7.35184 6.50563 7.08812C6.24191 6.8244 6.09375 6.46671 6.09375 6.09375Z" fill="#DC1A60"/>
</svg>

          <div className="Tbilisi left-[15px] top-0 absolute text-black text-[14px]  font-normal">{location}</div>
        </div>
        <div className="CafeVere left-0 top-0 absolute text-black text-[14px] font-bold">{title}</div>
      </div>
      {/* if it is favourite  */}
      <IconContext.Provider
value={{ color:'#7D3B52', size: '25px' }}
>
      <div div className="Heartstraight w-8 h-8 left-[254px] top-[10px] absolute" >
     
      
          <AiOutlineHeart />

   </div>
 </IconContext.Provider>
 {/* if it is not  */}
  {/* if it is favourite  */}
  <IconContext.Provider
value={{ color:'#7D3B52', size: '25px' }}
>
      <div div className="Heartstraight w-8 h-8 left-[254px] top-[10px] absolute" >
     
          <FaHeart  />
          

   </div>
 </IconContext.Provider>
    </div>
  );
}

export default Card
