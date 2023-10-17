import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from "../../components/videos/Video";
import "./HomeScreens.css";
import { useDispatch, useSelector } from "react-redux";
import request from "../../Api";
import { addVideos } from "../../redux/VideoSlice";
import InfiniteScroll from "react-infinite-scroll-component";

const HomeScreens = () => {
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.video.videoData);
  console.log("video rdx -->", videoData);
  const count = videoData?.videos.length > 0 ? videoData?.videos.length : 0;
  const videoList = () => {
    const res = request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        chart: "mostPopular",
        regionCode: "IN",
        maxResults: 20,
        pageToken: "",
      },
    });
    res?.then((res) => {
      if (res?.data !== null) {
        dispatch(addVideos(res.data));
        console.log("videos API success -->", res.data);
      } else {
        console.log("video api error");
      }
    });
  };
  useEffect(() => {
    videoList();
  }, [dispatch]);

  const fetchData = () => {
    console.log("more data")
  }

  return (
    <Container fluid className="app__home-screen">
      <CategoriesBar />
      <Row>
      {/* <InfiniteScroll
        dataLength={count}
        next={fetchData}
        hasMore={true}
        loader={
          <div className="spinner-border text-danger d-block mx-auto"></div>
        }
      > */}
        {videoData?.videos && videoData.videos.length > 0
          ? videoData.videos.map((video) => {
              return (
                <Col lg={3} md={4}>
                  <Video video={video} key={video.id} />
                </Col>
              );
            })
          : [...new Array(20)].map(() => <Col lg={3} md={4}></Col>)}
      {/* </InfiniteScroll> */}
      </Row>
    </Container>
  );
};

export default HomeScreens;
