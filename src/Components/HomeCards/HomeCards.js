import styles from './homecard.module.css'
import browserImg from "../../assets/3968608.jpg";
import supportImg from "../../assets/20943941.jpg";
import moneyBack from '../../assets/3588982.jpg'

const HomeCards = () => {
  return (
    <div className={styles.cardswrapper}>
      {/* shipping */}
      <div className={styles.shipping}>
        <div className={styles.circles}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.shippingimg}>
          <img src={browserImg} alt="browser" />
        </div>
        <h3>Fast and Free Delivery</h3>
      </div>
    {/* end of shipping */}
    {/* support */}
      <div className={styles.support}>
      <div className={styles.circles}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.supportimg}>
          <img src={supportImg} alt="browser" />
        </div>
        <h3>24/7 Support</h3>
      </div>
      {/* end of support */}
      {/* money back */}
      <div className={styles.moneyback}>
      <div className={styles.circles}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
        </div>
        <div className={styles.moneybackimg}>
          <img src={moneyBack} alt="browser" />
        </div>
        <h3>Money Back Guarantee</h3>
      </div>
      {/* end of money back */}
    </div>
  );
};

export default HomeCards;
