import React, { useState, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CategoryFilterProps = {
  dispatch: PropTypes.func,
  categories: PropTypes.array,
  onCategorySelect: PropTypes.func,
  class: PropTypes.string,
};

function CategoryFilter(props) {
  const { categories, onCategorySelect } = props;
  const filterCategories = useMemo(() => categories, [categories]);
  const [currentCategory, setCurrentCategory] = useState('all');

  useEffect(() => {
    if (onCategorySelect) {
      onCategorySelect(currentCategory);
    }
  }, [currentCategory, onCategorySelect]);

  return (
    <>
      <select
        className={props.class ? props.class : ''}
        defaultValue="all"
        name={'Categories'}
        onChange={(e) => {
          setCurrentCategory(e.target.value);
          if (onCategorySelect) {
            onCategorySelect(e.target.value);
          }
        }}
      >
        <option key="all" value="all">
          all
        </option>
        {filterCategories.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

CategoryFilter.propTypes = CategoryFilterProps;

export default connect(mapStateToProps)(CategoryFilter);
