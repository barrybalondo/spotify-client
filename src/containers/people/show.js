import React, { Component, PropTypes } from 'react';
import { fetchPeople, deletePeople } from '../../actions/index'; 
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Show extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    this.props.fetchPeople(this.props.params.id);
  }

  onDeleteClick(){
    var answer = confirm("Delete People?");
    if(answer) {
      this.props.deletePeople(this.props.params.id) 
        .then( () => {
          this.context.router.push('/people');
        });
    }
  }

  render() {

    if(!this.props.peoples)
      return <div>Loading...</div>;

    return (
      <div>
        <div className="container">
          <button className="btn btn-primary">Edit</button>&nbsp;
          <button 
            onClick={this.onDeleteClick.bind(this)}
            className="btn btn-danger">Delete
          </button>&nbsp;
          <Link to="/people">
            <button className="btn btn-primary">Back</button>
          </Link>
          <br/><br/>
          <div className="card-block">
            <div className="card-text">
              <h4>ID: {this.props.peoples._id}</h4>  
              <h4>NAME: {this.props.peoples.name}</h4>    
              <h4>FAVORITE  CITY: {this.props.peoples.favoriteCity}</h4>
            </div>
          </div>
        </div>
      </div>
      
    )

  }

}

function mapStateToProps({peoples}){
  return { peoples: peoples.people };
}


export default connect(mapStateToProps, { fetchPeople, deletePeople })(Show);
