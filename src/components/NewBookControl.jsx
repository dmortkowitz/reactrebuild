import React from 'react';
import QualityCheck from './QualityCheck';
import NewBookForm from './NewBookForm';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class NewBookControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleTroubleshootingConfirmation = this.handleTroubleshootingConfirmation.bind(this);
  }

  handleTroubleshootingConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewBookForm onNewBookCreation={this.props.onNewBookCreation}/>;
    } else {
      currentlyVisibleContent = <QualityCheck onTroubleshootingConfirmation={this.handleTroubleshootingConfirmation} />;
    }
    return (
      <div>
        {currentlyVisibleContent}
        <Link to="/">home</Link>
      </div>
    );
  }
}

NewBookControl.propTypes = {
  onNewBookCreation: PropTypes.func
};

export default NewBookControl;
