import { put, call, takeLatest, all } from 'redux-saga/effects';

import { databaseRef } from '../firebase/firebase'; 
import { addCategory, deleteCategory, getCategories, startAddCategory, startDeleteCategory, startGetCategories } from '../redux/Category/category.actions';
import { START_ADD_CATEGORY, START_DELETE_CATEGORY, START_GET_CATEGORIES } from '../redux/Category/category.types';
import { Category } from '../types/category/category';

export function* getCategoriesSaga(action: ReturnType<typeof startGetCategories>) {
    const uid = action.payload.uid

    try {
        const categoriesRef = databaseRef.child(`users/${uid}/categories`)
      
        const snapshot = yield call([categoriesRef, "once"], 'value');
        const categories: Category[] = [] 
        
        snapshot.forEach((childSnapshot: any) => { // вызываеться один раз для каждого child
            categories.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            })
        })
        console.log('get categories, response from database: ', categories)
    
        yield put(getCategories(categories));
    } catch (error) {
        console.log('Get categories error: ', error)
    }
}

export function* addCategorySaga(action: ReturnType<typeof startAddCategory>) {
    const { category, uid } = action.payload

    try {
        const categoriesRef = databaseRef.child(`users/${uid}/categories`)
      
        const response = yield call([categoriesRef, "push"], 
        {
            name: category.name,
        }
        );
    
        console.log('created category, response from database: ', response)
    
        yield put(addCategory(category, response.key));
    } catch (error) {
        console.log('Add category error: ', error)
    }
}

export function* deleteCategorySaga(action: ReturnType<typeof startDeleteCategory>) {
    const { id, uid } = action.payload

    try {
        const categoriesRef = databaseRef.child(`users/${uid}/categories/${id}`)
      
        yield call([categoriesRef, "remove"]);
        
        yield put(deleteCategory(id));
    } catch (error) {
        console.log('Remove category error: ', error)
    }
}

export default function* () {
    // @ts-ignore
  yield all[
    (yield takeLatest(START_GET_CATEGORIES, getCategoriesSaga),
    yield takeLatest(START_ADD_CATEGORY, addCategorySaga),
    yield takeLatest(START_DELETE_CATEGORY, deleteCategorySaga))
  ];
}
