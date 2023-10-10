import React, { useState } from 'react'
import './CategoriesBar.css'

const CategoriesBar = () => {
  const list = [
    'All',
    'React',
    'JavaScript',
    'React Native',
    'Java',
    'Python',
    'PHP',
    'Laravel',
    'HTML',
    'CSS',
    'Bootstrap',
    'Redux',
    'Firebase',
    'Google Map',
    'Trending',
    'Updates',
    'New Modules',
  ];
  const [activeValue, setactiveValue] = useState('All')
  const handleClick = (val) => {
    setactiveValue(val)
    console.log(val);
  }
  return (
    <div className='app__categories'>
      {
        list.map((val, index) => (
          <span className={activeValue === val ? ' span active' : 'span'} key={index} onClick={() => handleClick(val)} >{val}</span>
        ))
      }
    </div>
  )
}

export default CategoriesBar