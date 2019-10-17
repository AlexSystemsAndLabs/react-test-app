import pixabayService from '../services/pixabay'
import * as types from './actionTypes'

export function fetchData() {
    return async(dispatch) => {
        try {
            const hits = await pixabayService.getAllHits();
            dispatch({ type: types.GET_DATA, allHits : hits });
        } catch (error) {
            console.error(error);
        }
    };
}
export function fetchPic(id) {
    return async(dispatch) => {
        try {
            const hit = await pixabayService.getOneHit(id);
            dispatch({ type: types.GET_ONE_IMG, image : hit });
        } catch (error) {
            console.error(error);
        }
    };
}

export function changeSortType(sort_key){
    return (dispatch) => {
        dispatch({type : types.CHANGE_SORT_TYPE, sort_key : sort_key})
    }
}

export function filterCards(tagInput){
    return (dispatch) => {
        dispatch({type : types.FILTER_CARDS, tagInput : tagInput})
    }
}

export function updateChangedItem(item,tags){
    return (dispatch) => {
        const obj = {...item}
        if(tags === ''){
            obj.tags = 'Please enter tags'
        }
        else {
            obj.tags = tags
        }
        dispatch({type : types.UPDATE_CHANGED_ITEM, changedItem : obj})
    }
}

export function updateTags(id){
    return (dispatch) => {
        dispatch({type : types.UPDATE_TAGS, current_id : id})
    }
}