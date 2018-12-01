import React from 'react';
import MainToolbar from './MainToolbar';
import MainLogobar from './MainLogobar';
import MainNavbar from './MainNavbar';
import MainCarousel from './MainCarousel';
import NewBookList from './NewBookList';
import NewBookControl from './NewBookControl';
import ListingManager from './ListingManager';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
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
    var newMasterBookList = Object.assign({}, this.state.masterBookList); Object.keys(newMasterBookList).forEach(newBookId => { newMasterBookList[newBookId].formattedWaitTime = (newMasterBookList[newBookId].timeOpen).fromNow(true);
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

  handleChangingSelectedBook(newBookId){
    this.setState({selectedBook: newBookId});
  }

  render(){
    return (
      <div>
        <MainToolbar />
        <MainLogobar />
        <MainNavbar />
        <MainCarousel />
        <Switch>
          <Route exact path='/' render={()=><NewBookList newBookList={this.state.masterBookList} />} />
          <Route path='/newbook' render={()=><NewBookControl onNewBookCreation={this.handleAddingNewBookToList} />} />
          <Route path='/listingmanager' render={(props)=><ListingManager newBookList={this.state.masterBookList} currentRouterPath={props.location.pathname} onTicketSelection={this.handleChangingSelectedTicket}selectedTicket={this.state.selectedTicket}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
