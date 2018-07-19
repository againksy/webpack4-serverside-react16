import React, { Component, } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class ToggleComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    let {rawtext}=this.props
    return <div>
      <div>
        toggled div
        <div style={{margin: '5px'}}>
          {rawtext}
        </div>
      </div>
    </div>
  }

}

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToggleComponent);
