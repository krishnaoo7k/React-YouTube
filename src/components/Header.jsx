import styles from "./Header.module.css";
import image1 from "../assets/icons/hamburgerMenu.svg";
import image2 from "../assets/icons/youtubeLogo.svg";
import image3 from "../assets/icons/search.svg";
import image4 from "../assets/icons/voiceSearchIcon.svg";
import image5 from "../assets/icons/upload.svg";
import image6 from "../assets/icons/notifications.svg";
import image7 from "../assets/icons/profilePhotoCrop.jpg";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.leftSelection}>
        <img className={styles.hamburgerMenu} src={image1} />
        <a href="https://www.youtube.com/">
          <img className={styles.youtubeLogo} src={image2} />
        </a>
      </div>
      <div className={styles.middleSelection}>
        <input className={styles.searchBar} type="text" placeholder="Search" />
        <button className={styles.searchButton}>
          <img className={styles.searchIcon} src={image3} />
        </button>
        <button className={styles.voiceSearchButton}>
          <img className={styles.voiceIcon} src={image4} />
        </button>
      </div>
      <div className={styles.rightSelection}>
        <img className={styles.uploadIcon} src={image5} />

        <div className={styles.notificationIcon}>
          <img className={styles.notificationIcon} src={image6} />
        </div>

        <a href="https://www.youtube.com/feed/you">
          <img className={styles.currentUserPicture} src={image7} />
        </a>
      </div>
    </div>
  );
};

export default Header;
