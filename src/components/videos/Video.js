import React, { useState, useEffect } from "react";
import { AiFillEye } from "react-icons/ai";
import "./Video.css";
import moment from "moment";
import numeral from "numeral";
import request from "../../Api";

const Video = ({ video }) => {
  console.log(video);
  const {
    id,
    snippet: {
      channelId,
      channelTitle,
      title,
      thumbnails: { medium },
      publishedAt
    },
  } = video;

  const [duartion, setDuartion] = useState(null)
  const [view, setView] = useState(null)
  const [chennalIcon, setChennalIcon] = useState(null)

  const duation_sec = moment.duration(duartion).asSeconds();
  const duration_val = moment.utc(duation_sec * 1000).format("mm:ss");
  const video_id = id?.videoId || id;
  useEffect(() => {
    const getVideoDetails = async () => {
      // console.log(id)
      const { data:{ items } } = await request('/videos', {
        params: {
          part: "contentDetails,statistics",
          id: video_id
        }
      })
      setDuartion(items[0].contentDetails.duartion)
      setView(items[0].statistics.viewCount)
      // console.log("item -->", items)
    }
    getVideoDetails()
  }, [video_id])

  useEffect(() => {
    const getChannelDetails = async () => {
      const { data: {items} } = await request('/channels', {
        params: {
          part: "snippet",
          id: channelId
        }
      })
      setChennalIcon(items[0].snippet.thumbnails.default.url)
      // console.log("channels -->", items)
    }
    getChannelDetails()
  }, [channelId])
  
  return video ? (
    <div className="app__video">
      <div className="video_top">
        <img
          className="video_img"
          src={medium.url}
          alt=""
        />
        <span className="video_top_span">{duration_val}</span>
      </div>
      <div className="video_title">
       {title}
      </div>
      <div className="video_details">
        <span>
          <AiFillEye />{numeral(view).format("0.a")} Views{" "}
        </span>
        <span className="video_details_span">{moment(publishedAt).fromNow()}</span>
      </div>
      <div className="video_chennal">
        <img
          src={chennalIcon}
          alt="chennalIcon"
        />
        <p>{channelTitle}</p>
      </div>
    </div>
  ) : (
    <div className="app__video">
      <div className="video_top">
        <img
          className="video_img"
          src="https://i.ytimg.com/vi/YysDQieIkIo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCdOqd_WsBCuXqr2GO88-_rX3w-8Q"
          alt=""
        />
        <span className="video_top_span">05:16</span>
      </div>
      <div className="video_title">
        Exclusive Clip | 😋 &#128512; Loki that multiverse concept based gem
        series list
      </div>
      <div className="video_details">
        <span>
          <AiFillEye /> 16m Views{" "}
        </span>
        <span className="video_details_span">6 days age</span>
      </div>
      <div className="video_chennal">
        <img
          src="https://yt3.ggpht.com/5YiK22wiL_PmOjfZa2JqylsgLDHHdwD-aeoh11znaqc8BMbQVAauJwlgeeNTAaS4ykLNAIGpWA=s68-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p>Marvel</p>
      </div>
    </div>
  );
};

export default Video;
