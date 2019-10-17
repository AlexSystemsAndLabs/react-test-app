import React from 'react';
import { connect } from 'react-redux';

import * as Selectors from '../store/reducer'
import * as Actions from "../store/actions";
import { getId } from '../functions'

class FullCard extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const id = getId()
        this.props.dispatch(Actions.fetchPic(id))
    }

     render(){
         if (!this.props.image) return <div>Loading...</div>;
        return(
                <div className="fullcard">
                    <p className="img-outer">
                        <img src={this.props.image['webformatURL']} alt="Не удалось загрузить изображение"/>
                    </p>
                    <div className="fullcard-info">
                        {
                            Object.keys(this.props.image).map((key) => {
                                return(
                                    <p key={`${key}11`}
                                       className={`full-card ${key}`}
                                    >
                                        <b>{key} : </b>
                                        {this.props.image[key]}
                                    </p>
                                )
                            })
                        }
                    </div>
                </div>
        )
    }
}

function mapStateToProps(state) {
    const changedItem = Selectors.getChangedItem(state)
    const image = Selectors.getOneImage(state)
console.log(getId())
    return {
     image : changedItem.id === image.id ? changedItem : image
    };
}

export default connect(mapStateToProps)(FullCard);