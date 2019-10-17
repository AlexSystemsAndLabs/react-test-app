import React from 'react';

const Nav = (props) => {
    return(
        <div className="nav">
            <input className={'searchInput'}
                   autoFocus={true}
                   type="text"
                   placeholder={'Начните вводить теги'}
                   onKeyUp={ props.filterCards }
            />
            <button
                name = {'byLikes'}
                onClick = { e => props.sortList(e,'by_likes') }
            >Сортировать по лайкам</button>
            <button
                name = {'byComments'}
                onClick = { e => props.sortList(e,'by_comments') }
            >Сортировать по комментариям</button>
        </div>
    )
}

export default Nav