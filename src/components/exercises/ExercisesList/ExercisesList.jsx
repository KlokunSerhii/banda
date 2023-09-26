import { useCallback, useEffect, useState } from 'react';
import ExercisesItem from '../ExercisesItem';
import styles from './ExercisesList.module.css';
import { useDispatch } from 'react-redux';
import { exerciseCategories } from 'redux/exercises/operation';
import { useExercise } from 'hooks';
import { useParams, NavLink } from 'react-router-dom';
import { useMediaQuery } from '@uidotdev/usehooks';
import Loader from 'components/Loader/Loader';

import { register } from 'swiper/element/bundle';

register();

function ExercisesList() {
  const { categories, exercise, isLoading } = useExercise();
  const { list } = categories;

  const dispatch = useDispatch();
  const { category } = useParams();
  const page = exercise.page;

  // Media queries
  const tablet = useMediaQuery(
    'only screen and (min-width : 768px) and (max-width : 1439px)'
  );

  const [itemsPerPage, setItemsPerPage] = useState(tablet ? 9 : 10);

  useEffect(() => {
    setItemsPerPage(tablet ? 9 : 10);
  }, [tablet]);

  useEffect(() => {
    const params = `${category}?limit=1000&page=${page}`;
    dispatch(exerciseCategories(params));
  }, [dispatch, category, page]);

  useEffect(() => {
    const swiper = document.querySelector('#items-swiper');
    if (!swiper) return;
    const params = {
      // array with CSS styles
      injectStyles: [
        `
        .swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal, .swiper-pagination-custom, .swiper-pagination-fraction {
          bottom: var(--swiper-pagination-bottom,32px);
        }
        .swiper-pagination-bullet {
          background-color: var(--transparent-light-2);
          box-sizing: border-box;
          width: 14px;
          height: 14px;
          padding: 2px;
        }
        .swiper-pagination-bullet-active {
          background: var(--accent-bright-color);
          background-clip: content-box;
          border: 1px solid var(--accent-bright-color);
        }
        `,
      ],
    };

    Object.assign(swiper, params);

    swiper.initialize();
  });

  const getItemsToRender = useCallback(() => {
    const items = [...list];
    const pagesArray = [];
    while (items.length) {
      pagesArray.push(items.splice(0, itemsPerPage));
    }
    return pagesArray;
  }, [list, itemsPerPage]);

  if (isLoading) return <Loader className={styles.loader} />;

  return (
    <swiper-container
      id="items-swiper"
      init="false"
      space-between="100"
      pagination="true"
      pagination-clickable="true"
      className={styles.swiper}
    >
      {getItemsToRender().map((item, index) => {
        return (
          <swiper-slide key={index + item[0].title.name}>
            <ul className={styles.exercisesList}>
              {item.map(category => (
                <NavLink to={category.title.name} key={category.title._id}>
                  <ExercisesItem item={category.title} />
                </NavLink>
              ))}
            </ul>
          </swiper-slide>
        );
      })}
    </swiper-container>
  );
}

export default ExercisesList;
