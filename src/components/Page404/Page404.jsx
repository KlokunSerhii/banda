import { useNavigate } from 'react-router-dom';
import styles from './Page404.module.css';
import { useEffect } from 'react';

const Page404 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearTimeout(timerId);
  }, [navigate]);

  return (
    <section className={styles.section}>
      <div className={styles.container404}>
        <div className={styles.content}>
          <h3 className={styles.title}>404</h3>
          <p className={styles.text}>
            Sorry, you have reached a page that we could not find. It seems that
            you are lost among the numbers and letters of our virtual space.
            Perhaps this page went on vacation or decided to disappear into
            another dimension. We apologize for this inconvenience.
          </p>
          <button className={styles.goHome} onClick={handleClick}>
            Go Home
          </button>
        </div>
      </div>
    </section>
  );
};

export default Page404;
