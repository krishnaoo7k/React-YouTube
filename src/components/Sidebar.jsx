import styles from "./Sidebar.module.css";
import image1 from "../assets/icons/home.svg";
import image2 from "../assets/icons/originals.svg";
import image3 from "../assets/icons/subscriptions.svg";
import image4 from "../assets/icons/youtubeMusic.svg";
import image5 from "../assets/icons/library.svg";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <a href="https://www.youtube.com/">
        <div className={styles.sidebarLink}>
          <img className={styles.homeIcon} src={image1} />
          <div>Home</div>
        </div>
      </a>

      <a href="https://www.youtube.com/shorts/">
        <div className={styles.sidebarLink}>
          <img className={styles.originalsIcon} src={image2} />
          <div>Shorts</div>
        </div>
      </a>

      <a href="https://www.youtube.com/feed/subscriptions">
        <div className={styles.sidebarLink}>
          <img className={styles.subscriptionsIcon} src={image3} />
          <div>Subscriptions</div>
        </div>
      </a>

      <a href="https://music.youtube.com/">
        <div className={styles.sidebarLink}>
          <img className={styles.youtubeMusicIcon} src={image4} />
          <div>YT Music</div>
        </div>
      </a>

      <a href="https://www.youtube.com/feed/you">
        <div className={styles.sidebarLink}>
          <img className={styles.libraryIcon} src={image5} />
          <div>You</div>
        </div>
      </a>
    </div>
  );
};

export default Sidebar;
