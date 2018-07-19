import React, { Component, } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class InitialComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showComponent: false,
    };
  }

  componentWillMount() {
    import(/* webpackChunkName: "ToggleComponent", webpackPrefetch: true */'./ToggleComponent').then(ToggleComponent => {
      this.setState({ ToggleComponent });
    })
  }
  toggleComponent(){
    let {showComponent,ToggleComponent} = this.state
    if(typeof window !== 'undefined' && ToggleComponent){
      this.setState({showComponent: !showComponent})
    }
  }

  render() {
    let {ToggleComponent, showComponent} = this.state
    let {initial} = this.props
    return <div>
      <div>
        initial div
      </div>
      <div>
        {initial.value}
      </div>
      <button onClick={()=>this.toggleComponent()} style={{cursor: 'pointer', background: 'magenta'}}>
        showComponent toggle
      </button>
      <div style={{margin: '50px'}}>
        {showComponent && ToggleComponent && <ToggleComponent.default rawtext={initial.value}/>}
      </div>
    </div>
  }

}

function mapStateToProps(state) {
  return {
    initial: state.initial,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InitialComponent);
