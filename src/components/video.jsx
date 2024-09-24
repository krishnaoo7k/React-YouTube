import styles from "./Video.module.css";
import thumbnail01 from "../assets/thumbnails/thumbnail01.webp";
import thumbnail02 from "../assets/thumbnails/thumbnail02.webp";
import thumbnail03 from "../assets/thumbnails/thumbnail03.jpg";
import thumbnail04 from "../assets/thumbnails/thumbnail04.webp";
import thumbnail05 from "../assets/thumbnails/thumbnail05.webp";
import thumbnail06 from "../assets/thumbnails/thumbnail06.webp";
import thumbnail07 from "../assets/thumbnails/thumbnail07.webp";
import thumbnail1 from "../assets/thumbnails/thumbnail1.webp";
import thumbnail2 from "../assets/thumbnails/thumbnail2.webp";
import thumbnail3 from "../assets/thumbnails/thumbnail3.webp";
import thumbnail4 from "../assets/thumbnails/thumbnail4.webp";
import thumbnail5 from "../assets/thumbnails/thumbnail5.webp";
import thumbnail6 from "../assets/thumbnails/thumbnail6.webp";
import thumbnail7 from "../assets/thumbnails/thumbnail7.webp";
import thumbnail8 from "../assets/thumbnails/thumbnail8.webp";
import thumbnail9 from "../assets/thumbnails/thumbnail9.webp";

import channel01 from "../assets/channels/channel01.jpg";
import channel02 from "../assets/channels/channel02.jpg";
import channel03 from "../assets/channels/channel03.jpg";
import channel04 from "../assets/channels/channel04.jpg";
import channel05 from "../assets/channels/channel05.jpg";
import channel06 from "../assets/channels/channel06.jpg";
import channel07 from "../assets/channels/channel07.jpg";
import channel1 from "../assets/channels/channel1.jpeg";
import channel2 from "../assets/channels/channel2.jpeg";
import channel3 from "../assets/channels/channel3.jpeg";
import channel4 from "../assets/channels/channel4.jpeg";
import channel5 from "../assets/channels/channel5.jpeg";
import channel6 from "../assets/channels/channel6.jpeg";
import channel7 from "../assets/channels/channel7.jpeg";
import channel8 from "../assets/channels/channel8.jpeg";
import channel9 from "../assets/channels/channel9.jpeg";

const Video = () => {
  const videoList = [
    {
      title:
        "Namo Namo - Full Audio | Kedarnath | Sushant Rajput | Sara Ali Khan",
      author: "Zee Music Company",
      views: "120M",
      time: "5 years ago",
      videoDuration: "5:29",
      videoUrl: "https://www.youtube.com/watch?v=Z_-lSJg52NU",
      thumbnailUrl: thumbnail01,
      profilePicture: channel01,
    },
    {
      title: "Backend web development - a complete overview",
      author: "SuperSimpleDev",
      views: "2M",
      time: "2 years ago",
      videoDuration: "12:58",
      videoUrl: "https://www.youtube.com/watch?v=XBu54nfzxAQ&t=41s",
      thumbnailUrl: thumbnail02,
      profilePicture: channel02,
    },
    {
      title:
        "Best Data Structures & Algorithms (DSA) Course - Clear Any FAANG Interview!",
      author: "Kunal Kushwaha",
      views: "3M",
      time: "2 years ago",
      videoDuration: "16:19",
      videoUrl:
        "https://www.youtube.com/watch?v=rZ41y93P2Qo&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ",
      thumbnailUrl: thumbnail03,
      profilePicture: channel03,
    },
    {
      title:
        "Tom & Jerry | Tom & Jerry in Full Screen | Classic Cartoon Compilation | WB Kids",
      author: "WB Kids",
      views: "700M",
      time: "2 years ago",
      videoDuration: "21:38",
      videoUrl: "https://www.youtube.com/watch?v=t0Q2otsqC4I&t=165s",
      thumbnailUrl: thumbnail04,
      profilePicture: channel04,
    },
    {
      title: "Ed Sheeran - Perfect (Lyrics)",
      author: "7clouds",
      views: "132M",
      time: "5 years ago",
      videoDuration: "4:24",
      videoUrl: "https://www.youtube.com/watch?v=kPhpHvnnn0Q",
      thumbnailUrl: thumbnail05,
      profilePicture: channel05,
    },
    {
      title: "Alan Walker, Sabrina Carpenter & Farruko - On My Way",
      author: "Alan Walker",
      views: "590M",
      time: "5 years ago",
      videoDuration: "3:37",
      videoUrl: "https://www.youtube.com/watch?v=dhYOPzcsbGM",
      thumbnailUrl: thumbnail06,
      profilePicture: channel06,
    },
    {
      title: "The Riddle That Seems Impossible Even If You Know The Answer",
      author: "Veritasium",
      views: "15M",
      time: "3 years ago",
      videoDuration: "17:45",
      videoUrl: "https://www.youtube.com/watch?v=iSNsgj1OCLA",
      thumbnailUrl: thumbnail07,
      profilePicture: channel07,
    },
    {
      title: "Talking Tech and AI with Google CEO Sundar Pichai!",
      author: "Marques Brownlee",
      views: "3.4M",
      time: "6 months ago",
      videoDuration: "14:20",
      videoUrl: "https://youtu.be/n2RNcPRtAiY?feature=shared",
      thumbnailUrl: thumbnail1,
      profilePicture: channel1,
    },
    {
      title: "Try Not To Laugh Challenge #9",
      author: "Markiplier",
      views: "19M",
      time: "4 years ago",
      videoDuration: "8:22",
      videoUrl: "https://youtu.be/mP0RAo9SKZk?feature=shared",
      thumbnailUrl: thumbnail2,
      profilePicture: channel2,
    },
    {
      title: "Crazy Tik Toks Taken Moments Before DISASTER",
      author: "SSSniperWolf",
      views: "12M",
      time: "1 year ago",
      videoDuration: "9:13",
      videoUrl: "https://youtu.be/FgjPQQeTh1w?feature=shared",
      thumbnailUrl: thumbnail3,
      profilePicture: channel3,
    },
    {
      title: "The Simplest Math Problem No One Can Solve - Collatz Conjecture",
      author: "Veritasium",
      views: "18M",
      time: "1 year ago",
      videoDuration: "22:09",
      videoUrl: "https://youtu.be/094y1Z2wpJg?feature=shared",
      thumbnailUrl: thumbnail4,
      profilePicture: channel4,
    },
    {
      title: "Kadane's Algorithm to Maximum Sum Subarray Problem",
      author: "CS Dojo",
      views: "519K",
      time: "5 years ago",
      videoDuration: "11:17",
      videoUrl: "https://youtu.be/86CQq3pKSUw?feature=shared",
      thumbnailUrl: thumbnail5,
      profilePicture: channel5,
    },
    {
      title: "Anything You Can Fit In The Circle I'll Pay For",
      author: "MrBeast",
      views: "181M",
      time: "1 year ago",
      videoDuration: "19:59",
      videoUrl: "https://youtu.be/yXWw0_UfSFg?feature=shared",
      thumbnailUrl: thumbnail6,
      profilePicture: channel6,
    },
    {
      title: "Why Planes Don't Fly Over Tibet",
      author: "RealLifeLore",
      views: "6.6M",
      time: "2 years ago",
      videoDuration: "10:13",
      videoUrl: "https://youtu.be/fNVa1qMbF9Y?feature=shared",
      thumbnailUrl: thumbnail7,
      profilePicture: channel7,
    },
    {
      title: "Inside The World's Biggest Passenger Plane",
      author: "tech Vison",
      views: "3.7M",
      time: "11 years ago",
      videoDuration: "7:12",
      videoUrl: "https://youtu.be/lFm4EM1juls?feature=shared",
      thumbnailUrl: thumbnail8,
      profilePicture: channel8,
    },
    {
      title: "The SECRET to Super Human STRENGTH",
      author: "ThenX",
      views: "20M",
      time: "3 years ago",
      videoDuration: "13:17",
      videoUrl: "https://youtu.be/ixmxOlcrlUc?feature=shared",
      thumbnailUrl: thumbnail9,
      profilePicture: channel9,
    },
  ];

  return (
    <div className={styles.videoGrid}>
      {videoList.map((video, index) => (
        <div key={index} className={styles.videoPreview}>
          <a href={video.videoUrl}>
            <div className={styles.thumbnailRow}>
              <img className={styles.thumbnail} src={video.thumbnailUrl} />
              <div className={styles.videoTime}>{video.videoDuration}</div>
            </div>

            <div className={styles.videoInfoGrid}>
              <div className={styles.channelPicture}>
                <img
                  className={styles.profilePicture}
                  src={video.profilePicture}
                />
              </div>

              <div className={styles.videoInfo}>
                <p className={styles.videoTitle}>{video.title}</p>
                <p className={styles.videoAuthor}>{video.author}</p>
                <p className={styles.videoStats}>
                  {video.views} views &#183; {video.time}
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Video;
