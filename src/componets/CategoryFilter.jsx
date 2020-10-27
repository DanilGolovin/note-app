import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Container from '../componets/Container.module.css';
import PropTypes from 'prop-types';

function CategoryFilter(props) {
  const [categories, setCategories] = useState(props.categories);
  const [currentCategory, setCurrentCategory] = useState({ name: 'all' });

  useEffect(() => {
    if (props.onCategorySelect) {
      props.onCategorySelect(currentCategory);
    }
  }, [currentCategory]);
  return (
    <div className={Container.center}>
      <select
        defaultValue={'all'}
        name={'Categories'}
        onChange={(e) => {
          setCurrentCategory(e.target.value);
          if (props.onCategorySelect) {
            props.onCategorySelect(e.target.value);
            console.log(categories);
          }
        }}
      >
        {categories ? (
          categories.map((category) => (
            <option key={category.name} value={category.name}>
              {category.name}
            </option>
          ))
        ) : (
          <option key={'all'} value={'all'}>{`all`}</option>
        )}
      </select>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

CategoryFilter.propTypes = {
  dispatch: PropTypes.func,
  categories: PropTypes.array,
  onCategorySelect: PropTypes.func,
};

export default connect(mapStateToProps)(CategoryFilter);
