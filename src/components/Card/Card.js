import styles from './Card.module.scss';

const Card = ({ attributes: userAttributes, image: userImage, isLoading = false }) => {
  const isEmpty = !userAttributes && !userImage && !isLoading;

  const image = userImage || {};


  return (
    <div className={styles.card} data-is-empty={isEmpty}>
      <span className={styles.cardImage} data-is-loading={isLoading}>
          {image?.url && <img src={image.url} />}
        </span>
      
    </div>
  );
};

export default Card;