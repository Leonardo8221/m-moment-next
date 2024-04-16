import Image from "next/image";
import styles from "./discover.module.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DiscoverSection = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
   
    responsive: [
      
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ]
  };

  return (
    <div className={styles.discoverSection}>
      <h1>Discover more from MessageMoment</h1>
      <div className={styles.discovers}>
      <Slider {...settings}>
      <div className={styles.discover_item}>
          <Image
            width={80}
            height={80}
            src="/img/icons/secture.svg"
            alt="image"
          />
          <span>Secure</span>
        </div>
      <div className={styles.discover_item}>
          <Image
            width={80}
            height={80}
            src="/img/icons/private.svg"
            alt="image"
          />
          <span>Secure</span>
        </div>
      <div className={styles.discover_item}>
          <Image
            width={80}
            height={80}
            src="/img/icons/browser.svg"
            alt="image"
          />
          <span>Browser Based</span>
        </div>
      <div className={styles.discover_item}>
          <Image
            width={80}
            height={80}
            src="/img/icons/project.svg"
            alt="image"
          />
          <span>Project Mode</span>
          <div className={styles.discover_item_icon}>
            <span>+</span>
            <Image
              width={80}
              height={80}
              src="/img/icons/gpt.svg"
              alt="image"
            />
          </div>
        </div>
      </Slider>
        
       
        
        
      </div>
      <h2>Use MessageMoment on any device via Browser1</h2>
      <div className={styles.devices}>
        <div className={styles.device_item}>
          <Image
            width={48}
            height={91}
            src="/img/icons/phone.svg"
            alt="image"
          />
        </div>
        <div className={styles.device_item}>
          <Image
            width={63}
            height={91}
            src="/img/icons/desktop.svg"
            alt="image"
          />
        </div>
        <div className={styles.device_item}>
          <Image
            width={54}
            height={91}
            src="/img/icons/tablet.svg"
            alt="image"
          />
        </div>
        <div className={styles.device_item}>
          <Image width={72} height={91} src="/img/icons/tv.svg" alt="image" />
        </div>
        <div className={styles.device_item}>
          <Image
            width={72}
            height={91}
            src="/img/icons/console.svg"
            alt="image"
          />
        </div>
      </div>
      <p>
        <sup>1</sup>Disclaimer: Compatibility may vary across different devices
        and operating systems.
      </p>
    </div>
  );
};

export default DiscoverSection;
