import React, { Component, PropTypes } from 'react';
import { fetchPeople, updatePeople } from '../../actions/index'; 
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

class Update extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentDidMount() {
    this.props.fetchPeople(this.props.params.id);
  }

  onSubmit(propsForm) {
    this.props.updatePeople(this.props.params.id, propsForm)
      .then( () => {
        this.context.router.push('/people');
      });
  }

  render() {

    const { fields:  { name, favoriteCity }, handleSubmit } = this.props;

    if(!this.props.peoples)
      return <div>Loading...</div>;

    return(
      
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Update People</h3>
        <div className={`form-group ${name.touched && name.invalid ? 'has-danger': ''}`} >
          <label>Name</label>
          <input type="text" className="form-control" { ...name } />
          <div className="form-control-feedback">
            {name.touched ? name.error : ''}
          </div>
        </div>
         <div className={`form-group ${favoriteCity.touched && favoriteCity.invalid ? 'has-danger': ''}`} >
          <label>Favorite City</label>
          <input type="text" className="form-control" { ...favoriteCity } />
          <div className="form-control-feedback">
           {favoriteCity.touched ? favoriteCity.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>&nbsp;
        <Link to="/people" className="btn btn-danger">Cancel</Link>
      </form>

    )

  }

}

function validate(values) {
  const errors = {};

  if(!values.name) {
    errors.name = 'Enter a Name';
  }
  if(!values.favoriteCity) {
    errors.favoriteCity = 'Enter a Favorite City';
  }

  return errors;
}

Update.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default reduxForm({
  form: 'initializing',
  fields: ['name', 'favoriteCity'],
  validate
},
state => ({ // mapStateToProps
  peoples: state.peoples.people,
  initialValues: state.peoples.people // will pull state into form's initialValues
}),
{ fetchPeople, updatePeople }      // mapDispatchToProps (will bind action creator to dispatch)
)(Update)
