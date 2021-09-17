import { BsPlayFill } from 'react-icons/bs';
import styles from './styles.module.scss';
import './styles.module.scss';

export function ProjectCard({ name, imgBanner, desc, onClick }: any) {

  return (
    <button className={styles.card_container} onClick={onClick}>
      <div className={styles.image_box}>
        <img src={imgBanner} alt={name} />
      </div>
      <div className={styles.wrapper_box}>
        <div className={styles.title_box}>
          <h2 className={styles.cardTitle}>{name}</h2> 
        </div>
        <div className={styles.description_box}>
          <div className={styles.left}>
            <h3 className={styles.description}>{desc}</h3>
          </div>
          <div className={styles.right}>
            <BsPlayFill className={styles.playBtn} />
          </div>
          
        </div>
      </div>
    </button>
  )
}