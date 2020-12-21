import React, { useState } from 'react';
import { Category } from '../types/category/category';

type Props = {
  categories: Category[];
  onCategorySelect: (filterCategory: Category) => void;
  filterClass: string;
};

export const defaultCategory: Category = {
  name: 'all',
  id: 'all',
}

function CategoryFilter({ categories, onCategorySelect, filterClass }: Props) {
  const [currentCategory, setCurrentCategory] = useState(defaultCategory);

  const onCategoriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const category = categories.find(category => category.id === e.currentTarget.value)
      console.log(' onCategoriesChange : ', e)
      if (!category) return
      setCurrentCategory(category);
      onCategorySelect(category);  
  };

  return (
    <select
      className={filterClass ? filterClass : ''}
      name={'Categories'}
      value={currentCategory.id}
      onChange={onCategoriesChange}
    >
      <option key="all" value="all">
        all
      </option>
      {categories.map((category: Category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
}

export default CategoryFilter;
