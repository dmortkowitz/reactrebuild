import React from 'react';
import NewBookList from './NewBookList';
import NewBookControl from './NewBookControl';
import Error404 from './Error404';
import Moment from 'moment';
import ListingManager from './ListingManager';
import { v4 } from 'uuid';

class Marketplace extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBookList: {},
      selectedBook: null
    };
    this.handleAddingNewBookToList = this.handleAddingNewBookToList.bind(this);
    this.handleChangingSelectedBook = this.handleChangingSelectedBook.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateBookElapsedWaitTime(),
    5000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateBookElapsedWaitTime() {
    var newMasterBookList = Object.assign({}, this.state.masterBookList); Object.keys(newMasterBookList).forEach(ticketId => { newMasterBookList[ticketId].formattedWaitTime = (newMasterBookList[ticketId].timeOpen).fromNow(true);
    });
    this.setState({masterBookList: newMasterBookList});
  }

  handleAddingNewBookToList(newBook){
    var newBookId = v4();
    var newMasterBookList = Object.assign({}, this.state.masterBookList, {
      [newBookId]: newBook
    });
    newMasterBookList[newBookId].formattedWaitTime = newMasterBookList[newBookId].timeOpen.fromNow(true);
    this.setState({masterBookList: newMasterBookList});
  }

  handleChangingSelectedBook(ticketId){
    this.setState({selectedBook: ticketId});
  }

  render(){
    console.log(this.state.masterBookList);
    return (
      <div>
        <NewBookList />
      </div>
    );
  }
}

export default Marketplace;
