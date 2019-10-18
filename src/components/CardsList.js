import React from 'react';
import { connect } from 'react-redux';
import * as Selectors from '../store/reducer'
import * as Actions from '../store/actions';
import { debounce, toggleClass } from '../functions'

import Nav from './Nav'
import Card from './Card'

class CardsList extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.filterCards = debounce(this.filterCards.bind(this), 300)
        this.props.dispatch(Actions.fetchData());
    }

    getImage = (id) => {
        this.props.dispatch(Actions.fetchPic(id))
    }

    filterCards(e){
            this.props.dispatch(Actions.filterCards(e.target.value))
        }

    sortList = (e,sort_key) => {
        e.preventDefault()
        switch(sort_key){
            case 'by_likes' :
                this.props.dispatch(Actions.changeSortType('by_likes'))
                return
            case 'by_comments' :
                this.props.dispatch(Actions.changeSortType('by_comments'))
                return
            default :
                this.props.dispatch(Actions.changeSortType('default'))
        }
    }

    doubleClickHandler = (e) => {
        e.preventDefault()
        toggleClass(e.target.firstChild, 'active')
        toggleClass(e.target.querySelectorAll('span'), 'active')
    }

    updateTags = (e,id) => {
        const item = this.props.filteredArray.find(hit => hit.id === id)
        this.props.dispatch(Actions.updateChangedItem(item,e.target.value))
        if(e.keyCode === 13){
            this.props.dispatch(Actions.updateTags(id))
            toggleClass(e.target, 'active')
        }
    }

    render(){
        return(
            <div className={'cardsList'}>
                <Nav
                    sortList = {this.sortList}
                    filterCards = { e => this.filterCards(e) }
                />
                <div className="cards flex-parent">
                    {
                        this.props.filteredArray.map(card => {
                            return(
                                <Card
                                    id = {card.id}
                                    key = {card.id}
                                    webformatURL = {card.webformatURL}
                                    tags = { card.tags }
                                    likes = {card.likes}
                                    comments = {card.comments}
                                    getImage = { e => this.getImage(card.id) }
                                    onDoubleClick = { e => this.doubleClickHandler(e) }
                                    updateTags = { e => this.updateTags(e,card.id) }
                                />
                            )
                        })}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        tagsTemp : Selectors.getTagsTemp(state),
        changedItem : Selectors.getChangedItem(state),
        filteredArray :  Selectors.getData(state).filter(hit => hit.tags.includes(Selectors.filterCards(state)))
    };
}

export default connect(mapStateToProps)(CardsList);