import React, { useState, useEffect } from 'react';
import { Category } from '../types/category/category';
import { useSelector } from 'react-redux';
import { defaultState } from '../types/default-state';

type Props = {
  onCategorySelect: (category: string) => void;
  filterClass: string;
};

function CategoryFilter({ onCategorySelect, filterClass }: Props) {
  const categories = useSelector((state: defaultState) => state.categories);
  const [currentCategory, setCurrentCategory] = useState('all');

  useEffect(() => {
    if (onCategorySelect) {
      onCategorySelect(currentCategory);
    }
  }, [currentCategory, onCategorySelect]);

  const onCategoriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentCategory(e.target.value);
    if (onCategorySelect) {
      onCategorySelect(e.target.value);
    }
  };

  return (
    <select
      className={filterClass ? filterClass : ''}
      defaultValue="all"
      name={'Categories'}
      onChange={onCategoriesChange}
    >
      <option key="all" value="all">
        all
      </option>
      {categories.map((category: Category) => (
        <option key={category.name} value={category.name}>
          {category.name}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;
