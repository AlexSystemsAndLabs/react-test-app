import React from 'react';
import {Link} from 'react-router-dom'

const Card = React.memo((props) => {
        return(
            <div className="card flex-child"
                 key={props.id}>
                <p className="img-outer">
                    <Link to={`/:${props.id}`}>
                        <img src={props.webformatURL} alt="Не удалось загрузить изображение"/>
                    </Link>
                </p>
                <div className="tags"
                     onDoubleClick={ props.onDoubleClick }
                >
                    <input
                        autoFocus={true}
                        placeholder={'Введите теги через запятую и нажмите Enter'}
                        className={'tagsInput'}
                        type="text"
                        onKeyUp={ props.updateTags }
                    />
                    {props.tags.split(', ').map((tag,i) => {
                        return(
                            <span key={i} className={'active'}>{tag} </span>
                        )
                    })}
                </div>
                <p className="likes">
                    <b>Likes : </b> {props.likes}
                </p>
                <p className="comments">
                    <b>Comments : </b>{props.comments}
                </p>
            </div>
        )
})

export default React.memo(Card);