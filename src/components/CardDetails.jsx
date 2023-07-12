import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, ConfigProvider, Rate } from 'antd';
import MapSection from '../components/Google/Map'
import MainCar from './Carousel';
function CardDetails({index,img,clicked,title,Rating,PWD,Parking,pay,loc,Pet,tel,start,end,pic}) {
  const navigate=useNavigate();
  const location = {
    address: 'Georgia',
    lat: 41.716667,
    lng: 44.783333,
  } // our location object from earlier
 
  return (
    <div className='all flex'>
      <div className='lpart'>
      <div className="Rectangle22 w-[1050px] h-[470px] bg-zinc-200 shadow m-10" >
<div className='p-2'>

<MainCar images={img} />  </div>
        </div>
<div className='inf flex'>
<div className="Info w-[500px] h-[142px] relative ml-14">
  <div className="Frame11 w-[200px] h-[104px] left-0 top-[32px] absolute flex-col justify-start items-start gap-2 inline-flex">
    <div className="Rates m-2 w-[150px] h-5 justify-center items-start gap-0.5 inline-flex">
    <Rate disabled defaultValue={Rating} />
    </div>
    <div className="Location h-5 relative">
    <div className="Mappinline w-5 h-5 relative flex-col justify-start items-start inline-flex" >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M15.625 17.5H11.7609C12.41 16.9204 13.0222 16.3007 13.5938 15.6445C15.7383 13.1781 16.875 10.5781 16.875 8.125C16.875 6.30164 16.1507 4.55295 14.8614 3.26364C13.572 1.97433 11.8234 1.25 10 1.25C8.17664 1.25 6.42795 1.97433 5.13864 3.26364C3.84933 4.55295 3.125 6.30164 3.125 8.125C3.125 10.5781 4.25859 13.1781 6.40625 15.6445C6.97782 16.3007 7.58996 16.9204 8.23906 17.5H4.375C4.20924 17.5 4.05027 17.5658 3.93306 17.6831C3.81585 17.8003 3.75 17.9592 3.75 18.125C3.75 18.2908 3.81585 18.4497 3.93306 18.5669C4.05027 18.6842 4.20924 18.75 4.375 18.75H15.625C15.7908 18.75 15.9497 18.6842 16.0669 18.5669C16.1842 18.4497 16.25 18.2908 16.25 18.125C16.25 17.9592 16.1842 17.8003 16.0669 17.6831C15.9497 17.5658 15.7908 17.5 15.625 17.5ZM4.375 8.125C4.375 6.63316 4.96763 5.20242 6.02252 4.14752C7.07742 3.09263 8.50816 2.5 10 2.5C11.4918 2.5 12.9226 3.09263 13.9775 4.14752C15.0324 5.20242 15.625 6.63316 15.625 8.125C15.625 12.5961 11.2914 16.3281 10 17.3438C8.70859 16.3281 4.375 12.5961 4.375 8.125ZM13.125 8.125C13.125 7.50693 12.9417 6.90275 12.5983 6.38884C12.255 5.87494 11.7669 5.4744 11.1959 5.23788C10.6249 5.00135 9.99653 4.93947 9.39034 5.06005C8.78415 5.18062 8.22733 5.47825 7.79029 5.91529C7.35325 6.35233 7.05562 6.90915 6.93505 7.51534C6.81447 8.12153 6.87635 8.74987 7.11288 9.32089C7.3494 9.8919 7.74994 10.38 8.26384 10.7233C8.77775 11.0667 9.38193 11.25 10 11.25C10.8288 11.25 11.6237 10.9208 12.2097 10.3347C12.7958 9.74866 13.125 8.9538 13.125 8.125ZM8.125 8.125C8.125 7.75416 8.23497 7.39165 8.44099 7.08331C8.64702 6.77496 8.93986 6.53464 9.28247 6.39273C9.62508 6.25081 10.0021 6.21368 10.3658 6.28603C10.7295 6.35837 11.0636 6.53695 11.3258 6.79917C11.588 7.0614 11.7666 7.39549 11.839 7.75921C11.9113 8.12292 11.8742 8.49992 11.7323 8.84253C11.5904 9.18514 11.35 9.47798 11.0417 9.68401C10.7334 9.89003 10.3708 10 10 10C9.50272 10 9.02581 9.80246 8.67417 9.45083C8.32254 9.09919 8.125 8.62228 8.125 8.125Z" fill="#DC1A60"/>
</svg></div> 
      <div className="Tbilisi left-[25px] top-[1px] absolute text-black text-[16px] font-normal">{loc}</div>
    </div>
    <div className="Time h-5 relative">
      <div className="002300 left-[25px] top-[1px] absolute text-black text-[16px] w-[300px] flex font-normal">{start}<p>-</p>{end}</div>
      <div className="Clock w-5 h-5 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM10 16.875C8.64026 16.875 7.31105 16.4718 6.18046 15.7164C5.04987 14.9609 4.16868 13.8872 3.64833 12.6309C3.12798 11.3747 2.99183 9.99237 3.2571 8.65875C3.52238 7.32513 4.17716 6.10013 5.13864 5.13864C6.10013 4.17716 7.32514 3.52237 8.65876 3.2571C9.99238 2.99183 11.3747 3.12798 12.631 3.64833C13.8872 4.16868 14.9609 5.04987 15.7164 6.18045C16.4718 7.31104 16.875 8.64025 16.875 10C16.8729 11.8227 16.1479 13.5702 14.8591 14.8591C13.5702 16.1479 11.8227 16.8729 10 16.875ZM15 10C15 10.1658 14.9342 10.3247 14.8169 10.4419C14.6997 10.5592 14.5408 10.625 14.375 10.625H10C9.83424 10.625 9.67527 10.5592 9.55806 10.4419C9.44085 10.3247 9.375 10.1658 9.375 10V5.625C9.375 5.45924 9.44085 5.30027 9.55806 5.18306C9.67527 5.06585 9.83424 5 10 5C10.1658 5 10.3247 5.06585 10.4419 5.18306C10.5592 5.30027 10.625 5.45924 10.625 5.625V9.375H14.375C14.5408 9.375 14.6997 9.44085 14.8169 9.55806C14.9342 9.67527 15 9.83424 15 10Z" fill="#DC1A60"/>
</svg></div>
    </div>
    <div className="Phone h-5 relative">
      <div className="Phone w-5 h-5 left-0 top-0 absolute flex-col justify-start items-start inline-flex" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M17.3727 12.3797L13.6922 10.7304L13.682 10.7257C13.491 10.644 13.2825 10.6112 13.0756 10.6303C12.8687 10.6494 12.6698 10.7198 12.4969 10.8351C12.4765 10.8486 12.457 10.8632 12.4383 10.8789L10.5367 12.5C9.33204 11.9148 8.08829 10.6804 7.50313 9.49137L9.12657 7.5609C9.14219 7.54137 9.15704 7.52184 9.1711 7.50075C9.28394 7.32833 9.35239 7.13068 9.37039 6.92541C9.38838 6.72014 9.35534 6.5136 9.27423 6.32418V6.31481L7.62032 2.62809C7.51309 2.38064 7.3287 2.17451 7.09468 2.04046C6.86067 1.90642 6.58958 1.85165 6.32188 1.88434C5.26326 2.02364 4.29155 2.54353 3.58824 3.34691C2.88492 4.15029 2.49809 5.18222 2.50001 6.24996C2.50001 12.4531 7.54688 17.5 13.75 17.5C14.8177 17.5019 15.8497 17.1151 16.6531 16.4117C17.4564 15.7084 17.9763 14.7367 18.1156 13.6781C18.1484 13.4105 18.0937 13.1395 17.9598 12.9055C17.8259 12.6715 17.62 12.487 17.3727 12.3797ZM13.75 16.25C11.0987 16.2471 8.55687 15.1926 6.68214 13.3178C4.8074 11.4431 3.7529 8.90124 3.75001 6.24996C3.74707 5.48706 4.02192 4.74918 4.52324 4.17411C5.02456 3.59904 5.71806 3.22611 6.47423 3.12496C6.47392 3.12808 6.47392 3.13122 6.47423 3.13434L8.11485 6.80621L6.50001 8.73903C6.48362 8.75789 6.46873 8.778 6.45548 8.79918C6.33791 8.97959 6.26894 9.1873 6.25525 9.4022C6.24157 9.61709 6.28362 9.83188 6.37735 10.0257C7.08516 11.4734 8.54376 12.9211 10.007 13.6281C10.2023 13.7209 10.4184 13.7615 10.634 13.7459C10.8497 13.7303 11.0576 13.659 11.2375 13.539C11.2576 13.5255 11.2769 13.5109 11.2953 13.4953L13.1945 11.875L16.8664 13.5195C16.8664 13.5195 16.8727 13.5195 16.875 13.5195C16.7751 14.2767 16.4027 14.9716 15.8275 15.4742C15.2524 15.9767 14.5138 16.2525 13.75 16.25Z" fill="#DC1A60"/>
</svg></div>
      <div className="995591101010 left-[25px] top-[10px] w-[200px] absolute w-15 text-black text-[16px] font-normal">{tel}</div>
    </div>
  </div>
  <div className="Extrainfo w-[131px] h-[110px] pb-1.5 left-[421px] top-[32px] absolute flex-col justify-start items-start gap-2 inline-flex">
    <div className="Pwd self-stretch h-5 relative">
      <div className="Wheelchair w-[100px] h-5 left-0 top-0 absolute flex-col justify-start items-start inline-flex" >
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M19.9681 14.8023C19.9421 14.7244 19.9011 14.6524 19.8473 14.5904C19.7935 14.5284 19.7281 14.4776 19.6546 14.4409C19.5812 14.4042 19.5013 14.3823 19.4194 14.3765C19.3375 14.3707 19.2553 14.381 19.1775 14.407L17.8165 14.8609L15.5587 10.3453C15.5068 10.2416 15.4271 10.1543 15.3284 10.0933C15.2298 10.0324 15.1161 10 15.0001 9.99996H8.75011V8.12496H13.1251C13.2909 8.12496 13.4498 8.05911 13.5671 7.9419C13.6843 7.82469 13.7501 7.66572 13.7501 7.49996C13.7501 7.3342 13.6843 7.17523 13.5671 7.05802C13.4498 6.94081 13.2909 6.87496 13.1251 6.87496H8.75011V6.17184C9.33927 6.01971 9.85273 5.65794 10.1942 5.15433C10.5357 4.65072 10.6819 4.03984 10.6052 3.43621C10.5285 2.83258 10.2343 2.27763 9.77776 1.87538C9.32119 1.47314 8.73359 1.25122 8.12511 1.25122C7.51663 1.25122 6.92903 1.47314 6.47246 1.87538C6.0159 2.27763 5.72171 2.83258 5.64504 3.43621C5.56836 4.03984 5.71448 4.65072 6.05598 5.15433C6.39749 5.65794 6.91095 6.01971 7.50011 6.17184V7.01637C6.1525 7.32437 4.9655 8.11783 4.16565 9.24529C3.36581 10.3727 3.00913 11.7553 3.16371 13.1289C3.31828 14.5026 3.97328 15.7713 5.00369 16.6928C6.03409 17.6143 7.36775 18.1241 8.75011 18.125C11.3689 18.125 13.7259 16.3507 14.3556 13.9062C14.3761 13.8267 14.3808 13.7439 14.3693 13.6626C14.3578 13.5813 14.3304 13.503 14.2887 13.4323C14.247 13.3616 14.1918 13.2998 14.1262 13.2504C14.0606 13.201 13.9859 13.165 13.9064 13.1445C13.8268 13.124 13.7441 13.1193 13.6628 13.1308C13.5815 13.1423 13.5032 13.1696 13.4325 13.2113C13.3617 13.2531 13.2999 13.3083 13.2505 13.3739C13.2011 13.4395 13.1652 13.5142 13.1446 13.5937C12.6634 15.4687 10.7743 16.875 8.75011 16.875C7.69948 16.8746 6.68407 16.4962 5.88946 15.8089C5.09485 15.1215 4.57411 14.1712 4.42242 13.1316C4.27074 12.092 4.49823 11.0325 5.06333 10.1468C5.62843 9.26108 6.49338 8.60831 7.50011 8.30777V10.625C7.50011 10.7907 7.56596 10.9497 7.68317 11.0669C7.80038 11.1841 7.95935 11.25 8.12511 11.25H14.6134L16.9407 15.9046C17.0082 16.0391 17.1219 16.1448 17.2609 16.2022C17.4 16.2596 17.5551 16.2649 17.6978 16.2171L19.5728 15.5921C19.7299 15.5397 19.8597 15.4271 19.9338 15.279C20.008 15.1309 20.0203 14.9595 19.9681 14.8023ZM6.87511 3.74996C6.87511 3.50273 6.94842 3.26106 7.08577 3.0555C7.22312 2.84994 7.41835 2.68972 7.64676 2.59511C7.87516 2.5005 8.1265 2.47575 8.36897 2.52398C8.61145 2.57221 8.83418 2.69126 9.00899 2.86608C9.18381 3.04089 9.30286 3.26362 9.35109 3.5061C9.39932 3.74857 9.37457 3.99991 9.27996 4.22831C9.18535 4.45672 9.02513 4.65195 8.81957 4.7893C8.61401 4.92665 8.37234 4.99996 8.12511 4.99996C7.79359 4.99996 7.47565 4.86826 7.24123 4.63384C7.00681 4.39942 6.87511 4.08148 6.87511 3.74996Z" fill="#DC1A60"/>
</svg></div>
      <div className="PwdAdapted  w-[150px] h-[13px] left-[25px] top-[4px] absolute text-black text-[16px] font-normal">{PWD ? <p>pwd adapted</p> : <p>not pwd adapted</p>} </div>
    </div>
    <div className="Petfrinedly h-5 relative">
      <div className="PetFriendly w-[150px] h-[13px] left-[25px] top-[4px] absolute text-black text-[16px] font-normal">
      {Pet ? <p>Pet fiendly</p> : <p>not pet friendly</p>}
         </div>
      <div className="Pawprint w-5 h-5 left-0 top-0 absolute flex-col justify-start items-start inline-flex" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M16.5625 6.25C16.1299 6.25 15.7069 6.3783 15.3472 6.61866C14.9875 6.85903 14.7071 7.20067 14.5415 7.60038C14.3759 8.00009 14.3326 8.43993 14.417 8.86426C14.5014 9.28859 14.7098 9.67837 15.0157 9.9843C15.3216 10.2902 15.7114 10.4986 16.1357 10.583C16.5601 10.6674 16.9999 10.6241 17.3996 10.4585C17.7993 10.2929 18.141 10.0125 18.3813 9.65281C18.6217 9.29308 18.75 8.87015 18.75 8.4375C18.75 7.85734 18.5195 7.30094 18.1093 6.89071C17.6991 6.48047 17.1427 6.25 16.5625 6.25ZM16.5625 9.375C16.3771 9.375 16.1958 9.32002 16.0417 9.217C15.8875 9.11399 15.7673 8.96757 15.6964 8.79627C15.6254 8.62496 15.6068 8.43646 15.643 8.2546C15.6792 8.07275 15.7685 7.9057 15.8996 7.77459C16.0307 7.64348 16.1977 7.55419 16.3796 7.51801C16.5615 7.48184 16.75 7.50041 16.9213 7.57136C17.0926 7.64232 17.239 7.76248 17.342 7.91665C17.445 8.07082 17.5 8.25208 17.5 8.4375C17.5 8.68614 17.4012 8.9246 17.2254 9.10041C17.0496 9.27623 16.8111 9.375 16.5625 9.375ZM5.625 8.4375C5.625 8.00485 5.49671 7.58192 5.25634 7.22219C5.01598 6.86246 4.67433 6.58208 4.27462 6.41651C3.87491 6.25095 3.43507 6.20763 3.01074 6.29203C2.58641 6.37644 2.19663 6.58478 1.8907 6.89071C1.58478 7.19663 1.37644 7.58641 1.29203 8.01074C1.20763 8.43507 1.25095 8.87491 1.41651 9.27462C1.58208 9.67433 1.86246 10.016 2.22219 10.2563C2.58192 10.4967 3.00485 10.625 3.4375 10.625C4.01766 10.625 4.57406 10.3945 4.9843 9.9843C5.39453 9.57406 5.625 9.01766 5.625 8.4375ZM3.4375 9.375C3.25208 9.375 3.07082 9.32002 2.91665 9.217C2.76248 9.11399 2.64232 8.96757 2.57136 8.79627C2.50041 8.62496 2.48184 8.43646 2.51801 8.2546C2.55419 8.07275 2.64348 7.9057 2.77459 7.77459C2.9057 7.64348 3.07275 7.55419 3.2546 7.51801C3.43646 7.48184 3.62496 7.50041 3.79627 7.57136C3.96757 7.64232 4.11399 7.76248 4.217 7.91665C4.32002 8.07082 4.375 8.25208 4.375 8.4375C4.375 8.68614 4.27623 8.9246 4.10041 9.10041C3.9246 9.27623 3.68614 9.375 3.4375 9.375ZM7.1875 6.875C7.62015 6.875 8.04308 6.74671 8.40281 6.50634C8.76254 6.26598 9.04292 5.92433 9.20849 5.52462C9.37405 5.12491 9.41737 4.68507 9.33297 4.26074C9.24856 3.83641 9.04022 3.44663 8.7343 3.1407C8.42837 2.83478 8.03859 2.62644 7.61426 2.54203C7.18993 2.45763 6.75009 2.50095 6.35038 2.66651C5.95067 2.83208 5.60903 3.11246 5.36866 3.47219C5.1283 3.83192 5 4.25485 5 4.6875C5 5.26766 5.23047 5.82406 5.64071 6.2343C6.05094 6.64453 6.60734 6.875 7.1875 6.875ZM7.1875 3.75C7.37292 3.75 7.55418 3.80498 7.70835 3.908C7.86252 4.01101 7.98268 4.15743 8.05364 4.32874C8.1246 4.50004 8.14316 4.68854 8.10699 4.8704C8.07081 5.05226 7.98153 5.2193 7.85041 5.35041C7.7193 5.48153 7.55226 5.57081 7.3704 5.60699C7.18854 5.64316 7.00004 5.6246 6.82874 5.55364C6.65743 5.48268 6.51101 5.36252 6.408 5.20835C6.30498 5.05418 6.25 4.87292 6.25 4.6875C6.25 4.43886 6.34877 4.2004 6.52459 4.02459C6.7004 3.84877 6.93886 3.75 7.1875 3.75ZM12.8125 6.875C13.2451 6.875 13.6681 6.74671 14.0278 6.50634C14.3875 6.26598 14.6679 5.92433 14.8335 5.52462C14.9991 5.12491 15.0424 4.68507 14.958 4.26074C14.8736 3.83641 14.6652 3.44663 14.3593 3.1407C14.0534 2.83478 13.6636 2.62644 13.2393 2.54203C12.8149 2.45763 12.3751 2.50095 11.9754 2.66651C11.5757 2.83208 11.234 3.11246 10.9937 3.47219C10.7533 3.83192 10.625 4.25485 10.625 4.6875C10.625 5.26766 10.8555 5.82406 11.2657 6.2343C11.6759 6.64453 12.2323 6.875 12.8125 6.875ZM12.8125 3.75C12.9979 3.75 13.1792 3.80498 13.3333 3.908C13.4875 4.01101 13.6077 4.15743 13.6786 4.32874C13.7496 4.50004 13.7682 4.68854 13.732 4.8704C13.6958 5.05226 13.6065 5.2193 13.4754 5.35041C13.3443 5.48153 13.1773 5.57081 12.9954 5.60699C12.8135 5.64316 12.625 5.6246 12.4537 5.55364C12.2824 5.48268 12.136 5.36252 12.033 5.20835C11.93 5.05418 11.875 4.87292 11.875 4.6875C11.875 4.43886 11.9738 4.2004 12.1496 4.02459C12.3254 3.84877 12.5639 3.75 12.8125 3.75ZM14.6188 11.6297C14.3013 11.4546 14.0215 11.2185 13.7953 10.9351C13.5692 10.6517 13.4011 10.3265 13.3008 9.97813C13.093 9.26348 12.6588 8.63557 12.0636 8.18878C11.4684 7.74199 10.7443 7.50044 10 7.50044C9.25575 7.50044 8.5316 7.74199 7.93638 8.18878C7.34116 8.63557 6.90703 9.26348 6.69922 9.97813C6.49848 10.6792 6.02787 11.272 5.39063 11.6266C4.77931 11.9573 4.29573 12.4825 4.01635 13.1189C3.73698 13.7554 3.67776 14.4668 3.84807 15.1407C4.01837 15.8146 4.40848 16.4124 4.9567 16.8397C5.50491 17.267 6.17993 17.4994 6.875 17.5C7.29153 17.5012 7.70399 17.418 8.0875 17.2555C9.31021 16.7512 10.6828 16.7512 11.9055 17.2555C12.6461 17.5776 13.4826 17.6004 14.2397 17.3193C14.9968 17.0382 15.6156 16.4749 15.9665 15.7475C16.3173 15.0201 16.373 14.1851 16.1217 13.4175C15.8705 12.65 15.3318 12.0096 14.6188 11.6305V11.6297ZM13.125 16.25C12.8712 16.2502 12.6201 16.1989 12.3867 16.0992C10.856 15.4669 9.13702 15.4669 7.60625 16.0992C7.16141 16.2908 6.6597 16.3027 6.20623 16.1326C5.75275 15.9625 5.38269 15.6235 5.17356 15.1867C4.96442 14.7499 4.93244 14.249 5.08431 13.7891C5.23619 13.3292 5.56013 12.9459 5.98828 12.7195C6.44863 12.4653 6.85434 12.1228 7.18224 11.7117C7.51013 11.3005 7.75377 10.8288 7.89922 10.3234C8.0313 9.86843 8.30753 9.46861 8.68638 9.18409C9.06523 8.89958 9.52621 8.74575 10 8.74575C10.4738 8.74575 10.9348 8.89958 11.3136 9.18409C11.6925 9.46861 11.9687 9.86843 12.1008 10.3234C12.2467 10.8297 12.4911 11.3023 12.8199 11.714C13.1488 12.1257 13.5556 12.4685 14.0172 12.7227C14.3858 12.9204 14.6777 13.2356 14.8465 13.6184C15.0153 14.0011 15.0513 14.4293 14.9487 14.8348C14.8462 15.2403 14.6109 15.5999 14.2805 15.8563C13.95 16.1128 13.5433 16.2513 13.125 16.25Z" fill="#DC1A60"/>
</svg></div>
    </div>
    <div className="Parking h-5 relative">
      <div className="Car w-5 h-5 left-0 top-0 absolute flex-col justify-start items-start inline-flex" ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<path d="M18.75 8.75H17.9062L15.7359 3.86719C15.6377 3.64627 15.4775 3.45858 15.2748 3.32685C15.0721 3.19512 14.8355 3.125 14.5938 3.125H5.40625C5.16448 3.125 4.92791 3.19512 4.72518 3.32685C4.52245 3.45858 4.36228 3.64627 4.26406 3.86719L2.09375 8.75H1.25C1.08424 8.75 0.925268 8.81585 0.808058 8.93306C0.690848 9.05027 0.625 9.20924 0.625 9.375C0.625 9.54076 0.690848 9.69973 0.808058 9.81694C0.925268 9.93415 1.08424 10 1.25 10H1.875V16.25C1.875 16.5815 2.0067 16.8995 2.24112 17.1339C2.47554 17.3683 2.79348 17.5 3.125 17.5H5C5.33152 17.5 5.64946 17.3683 5.88388 17.1339C6.1183 16.8995 6.25 16.5815 6.25 16.25V15H13.75V16.25C13.75 16.5815 13.8817 16.8995 14.1161 17.1339C14.3505 17.3683 14.6685 17.5 15 17.5H16.875C17.2065 17.5 17.5245 17.3683 17.7589 17.1339C17.9933 16.8995 18.125 16.5815 18.125 16.25V10H18.75C18.9158 10 19.0747 9.93415 19.1919 9.81694C19.3092 9.69973 19.375 9.54076 19.375 9.375C19.375 9.20924 19.3092 9.05027 19.1919 8.93306C19.0747 8.81585 18.9158 8.75 18.75 8.75ZM5.40625 4.375H14.5938L16.5383 8.75H3.46172L5.40625 4.375ZM5 16.25H3.125V15H5V16.25ZM15 16.25V15H16.875V16.25H15ZM16.875 13.75H3.125V10H16.875V13.75ZM4.375 11.875C4.375 11.7092 4.44085 11.5503 4.55806 11.4331C4.67527 11.3158 4.83424 11.25 5 11.25H6.25C6.41576 11.25 6.57473 11.3158 6.69194 11.4331C6.80915 11.5503 6.875 11.7092 6.875 11.875C6.875 12.0408 6.80915 12.1997 6.69194 12.3169C6.57473 12.4342 6.41576 12.5 6.25 12.5H5C4.83424 12.5 4.67527 12.4342 4.55806 12.3169C4.44085 12.1997 4.375 12.0408 4.375 11.875ZM13.125 11.875C13.125 11.7092 13.1908 11.5503 13.3081 11.4331C13.4253 11.3158 13.5842 11.25 13.75 11.25H15C15.1658 11.25 15.3247 11.3158 15.4419 11.4331C15.5592 11.5503 15.625 11.7092 15.625 11.875C15.625 12.0408 15.5592 12.1997 15.4419 12.3169C15.3247 12.4342 15.1658 12.5 15 12.5H13.75C13.5842 12.5 13.4253 12.4342 13.3081 12.3169C13.1908 12.1997 13.125 12.0408 13.125 11.875Z" fill="#DC1A60"/>
</svg></div>
      <div className="ParkingZone w-[150px] h-3.5 left-[25px] top-[3px] absolute text-black text-[16px] font-normal">
      {Parking ? <p>have parking zone</p> : <p> not have parking zone</p>}
         </div>
    </div>
    <div className="Paymentmethods self-stretch h-5 relative">
      <div className="Handcoins w-5 h-5 left-0 top-0 absolute flex-col justify-start items-start inline-flex">

      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
<g clip-path="url(#clip0_11_1971)">
<path d="M17.9945 11.0203C17.762 10.8414 17.4913 10.7185 17.2035 10.6612C16.9157 10.6038 16.6185 10.6137 16.3352 10.6898L13.0664 11.4414C13.1425 11.1202 13.1448 10.7858 13.0733 10.4636C13.0017 10.1413 12.8582 9.83934 12.6534 9.58041C12.4486 9.32149 12.1878 9.11228 11.8907 8.96847C11.5935 8.82465 11.2676 8.74997 10.9375 8.75H7.02656C6.69812 8.74918 6.37278 8.81345 6.06932 8.93909C5.76587 9.06474 5.49032 9.24927 5.25859 9.48203L3.49141 11.25H1.25C0.918479 11.25 0.600537 11.3817 0.366117 11.6161C0.131696 11.8505 0 12.1685 0 12.5L0 15.625C0 15.9565 0.131696 16.2745 0.366117 16.5089C0.600537 16.7433 0.918479 16.875 1.25 16.875H9.375C9.4261 16.875 9.47701 16.8687 9.52656 16.8563L14.5266 15.6063C14.5584 15.5987 14.5895 15.5882 14.6195 15.575L17.6562 14.2828L17.6906 14.2672C17.9825 14.1214 18.2324 13.9036 18.4168 13.6345C18.6013 13.3654 18.7142 13.0537 18.7449 12.7289C18.7756 12.4041 18.7231 12.0768 18.5924 11.7779C18.4617 11.479 18.257 11.2183 17.9977 11.0203H17.9945ZM1.25 12.5H3.125V15.625H1.25V12.5ZM17.143 13.1414L14.1742 14.4055L9.29688 15.625H4.375V12.1336L6.14297 10.3664C6.25862 10.2498 6.39629 10.1574 6.54798 10.0945C6.69967 10.0316 6.86235 9.99948 7.02656 10H10.9375C11.1861 10 11.4246 10.0988 11.6004 10.2746C11.7762 10.4504 11.875 10.6889 11.875 10.9375C11.875 11.1861 11.7762 11.4246 11.6004 11.6004C11.4246 11.7762 11.1861 11.875 10.9375 11.875H8.75C8.58424 11.875 8.42527 11.9408 8.30806 12.0581C8.19085 12.1753 8.125 12.3342 8.125 12.5C8.125 12.6658 8.19085 12.8247 8.30806 12.9419C8.42527 13.0592 8.58424 13.125 8.75 13.125H11.25C11.297 13.1249 11.3439 13.1196 11.3898 13.1094L16.6242 11.9055L16.6484 11.8992C16.8082 11.8549 16.9788 11.8712 17.1273 11.945C17.2758 12.0188 17.3917 12.1449 17.4528 12.2991C17.5139 12.4533 17.5158 12.6246 17.4582 12.7801C17.4005 12.9356 17.2874 13.0643 17.1406 13.1414H17.143ZM12.8125 7.5C12.9669 7.50018 13.1211 7.48763 13.2734 7.4625C13.4448 7.97152 13.7583 8.42083 14.177 8.7573C14.5956 9.09378 15.1018 9.30335 15.6358 9.36123C16.1698 9.41912 16.7091 9.32291 17.1901 9.08397C17.6712 8.84503 18.0737 8.47336 18.3502 8.01289C18.6267 7.55243 18.7655 7.02242 18.7503 6.48555C18.7351 5.94867 18.5665 5.42737 18.2644 4.98328C17.9624 4.53919 17.5394 4.19088 17.0457 3.97953C16.5519 3.76818 16.008 3.70263 15.4781 3.79063C15.3131 3.30019 15.016 2.86479 14.6195 2.53233C14.223 2.19987 13.7424 1.98324 13.2307 1.90628C12.7191 1.82932 12.196 1.89502 11.7193 2.09615C11.2425 2.29727 10.8305 2.62602 10.5285 3.04622C10.2266 3.46642 10.0464 3.96179 10.0078 4.47779C9.96921 4.9938 10.0737 5.51045 10.3098 5.97089C10.546 6.43132 10.9045 6.81769 11.3461 7.08748C11.7876 7.35726 12.2951 7.50001 12.8125 7.5ZM17.5 6.5625C17.5 6.87153 17.4084 7.17363 17.2367 7.43058C17.065 7.68753 16.821 7.8878 16.5354 8.00606C16.2499 8.12433 15.9358 8.15527 15.6327 8.09498C15.3296 8.03469 15.0512 7.88588 14.8326 7.66736C14.6141 7.44884 14.4653 7.17043 14.405 6.86733C14.3447 6.56423 14.3757 6.25007 14.4939 5.96456C14.6122 5.67905 14.8125 5.43502 15.0694 5.26333C15.3264 5.09164 15.6285 5 15.9375 5C16.3519 5 16.7493 5.16462 17.0424 5.45765C17.3354 5.75067 17.5 6.1481 17.5 6.5625ZM12.8125 3.125C13.1534 3.12517 13.4848 3.2368 13.7563 3.44287C14.0279 3.64895 14.2245 3.93816 14.3164 4.26641C13.9963 4.49164 13.7267 4.7812 13.5249 5.11658C13.3232 5.45195 13.1936 5.82575 13.1445 6.21406C13.0354 6.23763 12.9241 6.24967 12.8125 6.25C12.3981 6.25 12.0007 6.08538 11.7076 5.79236C11.4146 5.49933 11.25 5.1019 11.25 4.6875C11.25 4.2731 11.4146 3.87567 11.7076 3.58265C12.0007 3.28962 12.3981 3.125 12.8125 3.125Z" fill="#DC1A60"/>
</g>
<defs>
<clipPath id="clip0_11_1971">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
        </div>
      <div className="CashCards left-[25px] top-[1px] absolute text-black text-[16px] font-normal">{pay}</div>
    </div>
  </div>
  <div className="CafeVere left-0 top-0 absolute text-black text-[20px] font-bold">{title}</div>
</div>

<div className='relative  ml-[150px] mt-7' >


    <MapSection  location={location} zoomLevel={17} /> {/* include it here */}


<ConfigProvider
    theme={{
      token: {
        colorPrimary:'#DC1A60',
      },
    }}
  >
<Link to={'/rez'}>
        <Button  className="mt-2 w-[300px] h-10 text-white bg-[#B56A85] rounded-lg" >
          Book now
        </Button></Link>
      </ConfigProvider>
</div>
</div>
      </div>
      <div className='rpart'>
      <div className="Rightside w-[300px] h-[1033px] relative">


    </div>
      </div>
    </div>
    
  );
  }

export default CardDetails;
