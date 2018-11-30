import React from 'react';
import MainNavBar from './MainNavBar';
import NewBookList from './NewBookList';
import NewBookControl from './NewBookControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import ListingManager from './ListingManager';
import { v4 } from 'uuid';

class App extends React.Component {

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
  var newMasterBookList = Object.assign({}, this.state.masterBookList); Object.keys(newMasterBookList).forEach(bookId => { newMasterBookList[bookId].formattedWaitTime = (newMasterBookList[bookId].timeOpen).fromNow(true);
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
  
  handleChangingSelectedBook(BookId){
    this.setState({selectedBook: bookId});
  }

  render(){
  console.log(this.state.masterBookList);
    return (
      <div>
        <MainNavBar/>
        <Switch>
          <Route exact path='/' component={Mainpage} />
          <Route exact path='/marketplace' render={()=><NewBookList bookList={this.state.masterBookList} />} />
          <Route path='/newbook' render={()=><NewBookControl onNewBookCreation={this.handleAddingNewBookToList} />} />
          <Route path='/listingmanager' render={(props)=><ListingManager bookList={this.state.masterBookList} currentRouterPath={props.location.pathname} onBookSelection={this.handleChangingSelectedBook}selectedBook={this.state.selectedBook}/>} />        
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;