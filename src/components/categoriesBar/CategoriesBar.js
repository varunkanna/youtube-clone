import React, { useState } from 'react'
import './CategoriesBar.css'
import request from '../../Api';
import { useDispatch, useSelector } from 'react-redux';
import { addCategoryVideos } from '../../redux/VideoSlice';

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
    // console.log(val);
    categorySearch(val);
  }

  const videoData = useSelector((state) => state.video.videoData);
  const dispatch = useDispatch();
  // console.log("video data --> ",videoData)
  // const categorySearch = async (keyword) => {
  //   // console.log("key -->", keyword)
  //   const res = await request('/search',{
  //     params:{
  //       part:"snippet",
  //       maxResults: 20,
  //       pageToken: videoData?.nextPageToken,
  //       q:keyword,
  //       type:'video'
  //     }
  //   })
  //   // res?.then((res) => {
  //     if (res?.data !== null) {
  //       dispatch(addCategoryVideos(res.data))
  //       console.log("cat videos API success -->", res.data);
  //     } else {
  //       console.log("cat video api error");
  //     }
  //   // });
  // }
  const categorySearch = async (keyword) => {
    try {
      const res = await request('/search', {
        params: {
          part: "snippet",
          maxResults: 20,
          pageToken: videoData?.nextPageToken,
          q: keyword,
          type: 'video'
        }
      });
  
      dispatch(addCategoryVideos(res.data));
      console.log("cat videos API success -->", res.data);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Response error:', error.response.data);
        console.error('Status code:', error.response.status);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error setting up the request:', error.message);
      }
  
      console.error('Config:', error.config);
  
      // Add any additional handling here if needed
    }
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