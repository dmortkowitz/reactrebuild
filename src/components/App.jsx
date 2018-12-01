import React from 'react';
import NewBookList from './NewBookList';
import NewBookControl from './NewBookControl';
import Mainpage from './Mainpage';
import Marketplace from './Marketplace';
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
    console.log(this.state.masterTicketList);
    return (
      <div>
        <MainToolbar />
        <MainLogobar />
        <MainNavbar />
        <MainCarousel />
        <Switch>
          <Route exact path='/' render={()=><TicketList ticketList={this.state.masterTicketList} />} />
          <Route path='/newticket' render={()=><NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route path='/admin' render={(props)=><Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname} onTicketSelection={this.handleChangingSelectedTicket}selectedTicket={this.state.selectedTicket}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
