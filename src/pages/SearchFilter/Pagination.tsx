// import React, { useState, useEffect } from 'react'
// import {PaginationData } from '../../Lib/PaginationData'
// import styled from 'styled-components'
// import ReusableCard from '../../UI/ReusableCard'

// const Pagination = () => {
//   const [currentPage, setCurrentPage] = useState<number>(1)
//   const [postsPerPage, setPostsPerPage] = useState<number>(12)
//   const [showPages , setShowPages] = useState(false)

//   const landPostIndex : number = currentPage * postsPerPage;
//   const firstPostIndex : number = landPostIndex - postsPerPage;
//   const currentPosts : any[] = PaginationData.slice(firstPostIndex, landPostIndex)
//   const totalPosts = PaginationData.length
  
//   return (
//     <PaginationStyle>
//       <PaginationList data={currentPosts}/>
//       <div className="load w-100% flex justify-center">
//         {
//           !showPages ? 
//           <button onClick={() => setShowPages((prev) => !prev)} className='bg-[#547CC9] p-3 rounded-[6px] text-white hover:bg-slate-100 hover:text-[#547CC9] hover:transition-all duration-200'>Load more listings</button>
//           : <div></div>
//         }
//       </div>
//       <div className="pagination-pages mt-5">
//         <Pages totalPosts={totalPosts} postsPerPage={postsPerPage}/>
//       </div>
//     </PaginationStyle>
//   )
// }

// const PaginationList = ({data}) => {

//   return (
//     <div className='cards'>
//       {data.map((item : any) => (
//         <ReusableCard key={item} card={item}/>
//       ))}
//     </div>
//   )
// }

// const Pages = ({totalPosts, postsPerPage}) => {
//   let pages : number[] = []

//   //calculate the number of pages per posts displayed on each page
//   for (let i = 1; i <= Math.ceil(totalPosts/ postsPerPage); i++ ){
//     pages.push(i)
//   }

//   return (
//     <div></div>
//   )
// }

// const PaginationStyle = styled.section`
//   width : 100%;
//   height : 100%;
//   display : flex;
//   flex-direction : column;
//   gap : 2rem;

//   .cards {
//     display: grid;
//     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
//     grid-template-rows: repeat(4, 1fr); /* 4 rows */
//     gap: 2rem; /* Gap between cards */
//   }
// `

// export default Pagination