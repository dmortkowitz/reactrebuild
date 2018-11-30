import React from 'react';
import PropTypes from 'prop-types';
import NewBookList from './NewBookList';
import NewBookDetail from './NewBookDetail';

function ListingManager(props){
  let optionalSelectedBookContent = null;
  if (props.selectedBook != null){
    optionalSelectedBookContent =  <NewBookDetail selectedBook={props.newBookList[props.selectedBook]}/>;
  }
  return (
    <div>
      <h2>Listing Manager</h2>
      {optionalSelectedBookContent}
      <NewBookList
        newBookList={props.newBookList}
        currentRouterPath={props.currentRouterPath}
        onBookSelection={props.onBookSelection}/>
    </div>
  );
}

ListingManager.propTypes = {
  newBookList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onBookSelection: PropTypes.func.isRequired,
  selectedBook: PropTypes.object
};

export default ListingManager;