import React, { Component } from 'react';
import { fetchPeoples } from '../../actions/index'; 
import { connect } from 'react-redux';
import { Link } from 'react-router';


class Index extends Component {

  componentDidMount() {
    this.props.fetchPeoples();
  }

  renderProjects(people){
    return ( 
      
      <tr key={people._id}>
        <td>{people._id}</td>
        <td>{people.name}</td>
        <td>{people.favoriteCity}</td>
        <td>
          <Link to={`/people/${people._id}`} className="btn-xs btn-primary">
              Show
          </Link>
        </td>

      </tr>    
       
    );
  }

  render() {

   if(!this.props.peoples)
      return <div>Loading...</div>;

    return (
      <div className="container">
         <div>
            <Link to="/people/new" className="btn btn-primary">
              Add People
            </Link>
         </div>
         <h3>Peoples</h3>
         <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Favorite City</th>
              <th>Option</th>
            </tr>
          </thead>
          <tbody>
            {this.props.peoples.map(this.renderProjects)}
          </tbody>
         </table>
      </div>
    );
  }
}

function mapStateToProps({peoples}){
  return { peoples: peoples.all };
}


export default connect(mapStateToProps, { fetchPeoples })(Index);
