import React from 'react'
import styled from 'styled-components'
import { MdOutlineHomeWork, MdOutlineGroups  } from "react-icons/md";
import { Link } from 'react-router-dom';

type CommonObj = {
  icon: React.ReactNode;
  value: number;
  label : string;
};

type SpecialObj = {
  label: string;
  status : string,
  buttonText : string
};

type ArrayItemType = CommonObj | SpecialObj;

const Dashboard = () => {
  const data : ArrayItemType[] = [
    {
      icon : <MdOutlineHomeWork/>,
      value : 0,
      label : 'Total Listings'
    },
    {
      label : 'Subscription Status',
      status : 'Free membership',
      buttonText : "View Plans"
    },
    {
      icon : <MdOutlineGroups/>,
      value : 0,
      label : 'Property Requests'
    },
    {
      icon : <MdOutlineHomeWork/>,
      value : 0,
      label : 'Most visited listings'
    },
    {
      icon : <MdOutlineHomeWork/>,
      value : 0,
      label : 'Published listings'
    },
    {
      icon : <MdOutlineGroups/>,
      value : 0,
      label : 'Featured Properties'
    },
  ]

  return (
    <DashStyles className='h-[100%] w-inherit flex flex-col items-start px-10 py-5 gap-[3rem] mt-[2rem]'>
      <div className="top flex w-[100%] flex-row items-center justify-between">
        <span>Welcome James</span>
        <button className='px-6 py-2 bg-[#294B8C] text-white text-sm cursor-pointer rounded-[8px]'>post a listing</button>
      </div>
      <GridComponent dataArray={data}/>
    </DashStyles>
  )
}

const GridComponent : React.FC<{ dataArray : ArrayItemType[] }> = ({dataArray}) => {
  return (
    <GridComponentStyle className='container w-full h-full '>
      {dataArray.map((item, index) => (
        <div className="grid-item rounded-[8px]" key={index}>
          {index !== 1 && (
            <CommonDiv item={item as CommonObj}/>
          )}
          {index === 1 && <SpecialDiv item={item as SpecialObj}/>}
        </div>
      ))}
    </GridComponentStyle>
  )
}

const SpecialDiv = ({item} : {item : SpecialObj}) => {
  return (
    <div className="special">
      <div className="top">
        <span>{item.label}</span>
        <span className='text-[green]'>{item.status}</span>
      </div>
      <Link to='subscription'>
      <button>{item.buttonText}</button>
      </Link>
    </div>
  )
}

const CommonDiv = ({item} : {item : CommonObj}) => {
  return (
    <div className="common">
      <span className='icon'>{item.icon}</span>
      <div className="bottom">
        <h3 className='value'>{item.value}</h3>
        <span>{item.label}</span>
      </div>
    </div>
  )
}

const DashStyles = styled.div`
  .top {
    display : flex;
  }
`

const GridComponentStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  font-size : 0.85rem;

  .grid-item {
    border: 1px solid #ccc;
    padding: 1rem;
    text-align: center;
    cursor : pointer;
    transition : all 0.5s ease-in-out;
  }

  .special {
    background-color: #fff;
    padding: 1rem;
    display : flex;
    flex-direction : column;
    gap : 2rem;
  }

  .common {
    background-color: #fff;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .icon {
      margin-bottom: 1rem;
      font-size : 1.5rem;
      color : #294B8C;
    }

    .value {
      font-size : 1.5rem;
      font-weight : 500;
    }
  }

  .top {
    display: flex;
    flex-direction : column;
    justify-content: space-between;
    align-items: center;
  }

  button {
    background-color: #ffff;
    color: black;
    border: 0.5px solid #294B8C ;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export default Dashboard