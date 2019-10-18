import React from 'react';
import { connect } from 'react-redux';

import * as Selectors from '../store/reducer'
import * as Actions from "../store/actions";
import { getId } from '../functions'

class FullCard extends React.Component {

    constructor(props) {
        super(props);
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
    return {
        image : Selectors.getOneImage(state)
    };
}

export default connect(mapStateToProps)(FullCard);