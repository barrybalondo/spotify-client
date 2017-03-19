import React, { Component } from 'react';
import { fetchPeoples } from '../../actions/index'; 
import { connect } from 'react-redux';


class Index extends Component {

  componentDidMount() {
    this.props.fetchPeoples();
  }

  renderProjects(people){
    return (
        <div key={people._id}>
          {people.name}
        </div>
    );
  }

  render() {

   if(!this.props.peoples)
      return <div>Loading...</div>;

    return (
      <div>
         coming.
         {this.props.peoples.map(this.renderProjects)}
      </div>
    );
  }
}

function mapStateToProps({peoples}){
  return { peoples: peoples.all };
}


export default connect(mapStateToProps, { fetchPeoples })(Index);
