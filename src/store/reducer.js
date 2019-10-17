import * as types from './actionTypes'

const initialState = ({
    sort_key : 'default',
    allHits : [],
    changedItem : {},
    tagInput : '',
    image : {}
});

export default function mainReducer(state = initialState, action = {}) {
    switch (action.type) {
        case types.GET_DATA :
            return {
                ...state,
                allHits : action.allHits
    }
        case types.GET_ONE_IMG :
            return{
                ...state,
            image : action.image
            }
        case types.CHANGE_SORT_TYPE :
            return{
                ...state,
                sort_key: action.sort_key
            }
        case types.FILTER_CARDS :
            return{
                ...state,
                tagInput : action.tagInput
            }
        case types.UPDATE_CHANGED_ITEM :
            return{
                ...state,
                changedItem : action.changedItem
            }
        case types.UPDATE_TAGS :
            return{
                ...state,
                allHits : state.allHits.map(hit => hit.id === action.current_id ? state.changedItem : hit)
            }
        default:
            return state
    }
}

export function getData(state) {
    const newArray = [...state.allHits]
    if(state.sort_key === 'default') return newArray;
    else if(state.sort_key === 'by_likes') return newArray.sort((a, b) => a.likes > b.likes ? 1 : -1);
    else if(state.sort_key === 'by_comments') return newArray.sort((a, b) => a.comments > b.comments ? 1 : -1);
}

export function getOneImage(state) {
    const pic = state.image;
    return pic;
}


export function filterCards(state) {
    const tagInput = state.tagInput;
    return tagInput
}

export function getTagsTemp(state){
    const tagsTemp = state.tagsTemp
    return tagsTemp
}

export function getChangedItem(state){
    const getChangedItem = state.changedItem
    return getChangedItem
}
