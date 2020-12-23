import { eventChannel } from 'redux-saga';
import { put, call, takeLatest, all, take } from 'redux-saga/effects';

import { databaseRef } from '../firebase/firebase'; 
import { authSuccess } from '../redux/Auth/auth.actions';
import { AUTH_SUCCESS } from '../redux/Auth/auth.types';
import { getCategories, startAddCategory, startDeleteCategory } from '../redux/Category/category.actions';
import { START_ADD_CATEGORY, START_DELETE_CATEGORY } from '../redux/Category/category.types';
import { Category } from '../types/category/category';

// export function* getCategoriesSaga(action: ReturnType<typeof startGetCategories>) {
//     const uid = action.payload.uid

//     try {
//         const categoriesRef = databaseRef.child(`users/${uid}/categories`)
      
//         const snapshot = yield call([categoriesRef, "once"], 'value');
//         const categories: Category[] = [] 
        
//         snapshot.forEach((childSnapshot: any) => { // вызываеться один раз для каждого child
//             categories.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log('get categories, response from database: ', categories)
    
//         yield put(getCategories(categories));
//     } catch (error) {
//         console.log('Get categories error: ', error)
//     }
// }

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
    
        // yield put(addCategory(category, response.key));
    } catch (error) {
        console.log('Add category error: ', error)
    }
}

export function* deleteCategorySaga(action: ReturnType<typeof startDeleteCategory>) {
    const { id, uid } = action.payload

    try {
        const categoryRef = databaseRef.child(`users/${uid}/categories/${id}`)
      
        yield call([categoryRef, "remove"]);
        
        // yield put(deleteCategory(id));
    } catch (error) {
        console.log('Remove category error: ', error)
    }
}

function createGetCategoriesChannel(uid: string) {
    return uid && eventChannel(emit => {
        const categoriesRef = databaseRef.child(`users/${uid}/categories`)
               
        categoriesRef.on('value', (snapshot) => {
            const categories:Category[] = [] 

            snapshot.forEach((childSnapshot: any) => { // вызываеться один раз для каждого child
                categories.push({
                    ...childSnapshot.val(),
                    id: childSnapshot.key,
                })
            })
            emit(categories)
        },  () => emit(false));
        
        return () => ({})
    })
}

function* getCategoriesSaga(action: ReturnType<typeof authSuccess>) {
    try {
        const { uid } = action.payload.user;
        
        if (!uid) return 
        
        const channel = yield call(createGetCategoriesChannel, uid);
        
        while (true) {
            const data: Category[] = yield take(channel);
            if (data) yield put(getCategories(data));
        }
    } catch (error) {
        console.log('Get notes error: ', error)
    }
}

export default function* () {
    // @ts-ignore
  yield all[
    (yield takeLatest(AUTH_SUCCESS, getCategoriesSaga),
    yield takeLatest(START_ADD_CATEGORY, addCategorySaga),
    yield takeLatest(START_DELETE_CATEGORY, deleteCategorySaga))
  ];
}
