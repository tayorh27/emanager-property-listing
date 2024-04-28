// import React, { useState } from 'react'
// import styled from 'styled-components'
// import headerImage from '../../../assets/img/testAssets/headerimg.avif'
// import { IoSearchSharp } from "react-icons/io5";
// import { FaRegMap } from "react-icons/fa6";
// import {FormControl, InputLabel, Select, Button, Icon} from '@material-ui/core/'
// import { makeStyles } from '@material-ui/core/styles'
// import { FaPlus } from "react-icons/fa";
// import { Link } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 170,
//     backgroundColor : "#F3F5FA"
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   option : {
//     cursor : 'pointer'
//   },
//   button: {
//     margin: theme.spacing(1),
//   },
// }));

// const boxButtons = [
//   "Buy", "Rent", "Long Lease", "Land"
// ]
// const dropdownOptions = {
//   propertyType: [
//     "Apartment",
//     "House",
//     "Condo",
//     "Townhouse",
//     "Duplex"
//   ],
//   minPrice: [
//     "$100,000",
//     "$200,000",
//     "$300,000",
//     "$400,000",
//     "$500,000"
//   ],
//   maxPrice: [
//     "$500,000",
//     "$600,000",
//     "$700,000",
//     "$800,000",
//     "$900,000"
//   ]
// };

// const Header = ({filterModal}) => {
//   const classes = useStyles();
//   const [activeBtn, setActiveBtn] = useState(null)
//   const [state, setState] = React.useState({
//     propertyType: '',
//     minPrice: '',
//     maxPrice: '',
//   });

//   const handleChange = (event) => {
//     const name = event.target.name;
//     setState({
//       ...state,
//       [name]: event.target.value,
//     });
//   };

//   const HandleButtonClick = (btn) => {
//     setActiveBtn(btn)
//   }

//   return (
//     <HeaderStyle>
//       <div className="top w-[100%] h-[100%]">
//         <div className="one w-[65%] mb-3">
//           <h1 className='text-[4rem] font-[500]'>Simplifying Property Management for Owners and Tenants</h1>
//           <h4 className='text-[1.3rem] w-[80%] text-[grey]'>Streamline your property Management tasks and enhance tenant experiences with our all-in-one digital solution.</h4>
//         </div>
//       </div>
//       <div className="bottom relative">
//         <div className="box gap-[1.5rem] flex flex-col">
//           <div className="up flex gap-[6rem] items-center">
//             {
//               boxButtons.map((item) => (
//                 <span 
//                 className={`cursor-pointer ${activeBtn === item ? 'text-black' : 'text-[#9FA4A9]'} text-[14px] hover:text-black`}
//                 key={item}  onClick={() => HandleButtonClick(item)}>{item}</span>
//               ))
//             }
//           </div>
//           <div className="mid">
//             <div className='input gap-2 text-[#9FA4A9] flex items-center px-3 py-1 rounded-[5px] border'>
//               <IoSearchSharp/>
//               <input type="text" name="search" placeholder='Search location' id="" />
//             </div>
//             <button className='border rounded-[6px] font-[600] flex items-center gap-2 cursor-pointer px-3 py-2'>
//               <FaRegMap /> Map
//             </button>
//             <Link to='/search-filter' 
//               className='rounded-[6px] hover:bg-white hover:text-[#547CC9] hover:border-[#547CC9] hover:border flex items-center text-white px-2 py-2 bg-[#547CC9]'>
//               Search
//             </Link>
//           </div>
//           <div className="down relative flex items-center gap-[1rem] mt-[0.5rem]">
//             {Object.keys(dropdownOptions).map((item, index) => (
//               <FormControl variant='outlined' size='small' key={index} className={classes.formControl}>
//                 <InputLabel htmlFor="outlined-native-simple">{item}</InputLabel>
//                 <Select
//                   value={state[item]}
//                   onChange={handleChange}
//                   name={item}
//                   label={item}
//                   inputProps={{
//                     id: `'outlined-${item}-native-simple'`,
//                   }}
//                 >
//                   {dropdownOptions[item].map((option, index) => (
//                     <option className={classes.option} key={index} onClick={handleChange} value={option}>{option}</option>
//                   ))}
//                 </Select>
//               </FormControl>
//             ))}
//             <div className="btn cursor-pointer border mr-3 rounded-[8px] flex items-center justify-between px-2 py-2 w-[100%]">
//               <button className='text-[15px] text-grey' onClick={filterModal}>
//                 More Filters
//               </button>
//               <FaPlus/>
//             </div>
//           </div>
//         </div>
//       </div>
//     </HeaderStyle>
//   )
// }

// const HeaderStyle = styled.section`
//   width : 100vw;
//   height : 91vh;
//   background-color: #093C80;
//   display: grid;
//   grid-template-rows : 85% 15%;
//   overflow-y : hidden;
//   margin-top : 5rem;

//   .top{
//     background-image: linear-gradient(to right, rgba(242,242,246,1) 40%, rgba(0,0,0,0.1) 100%), url(${headerImage});
//     height : 100%;
//     background-size: cover;
//     background-repeat: no-repeat;
//     background-position: center center;
//     display : flex;
//     padding : 2rem 10%;

//     .one {
//       margin : auto 0;
//     }
//   }

//   .bottom {
//     width: 100%;
//     display : flex;
//     align-items : center;

//     .box{
//       background : white;
//       width : 70%;
//       margin : 0 auto;
//       box-shadow : 0 1.5rem 2rem rgba(26, 26, 54, 0.4);
//       height : 20rem;
//       padding : 2rem 7%;
//       z-index : 100;
//       border-top-right-radius : 1.5rem;
//       border-top-left-radius : 1.5rem;

//       .mid {
//         display : grid;
//         grid-template-columns : 65% 10% 15%;
//         gap : 1rem;
//         align-items : center;

//         .input svg{
//           cursor : pointer
//         }

//         .input input{
//           width : 90%;
//           padding : 0.2rem;
//           outline : none;
//           font-size : 1rem;
//           color : black;
//         }
//       }
//     }
//   }
// `

// export default Header