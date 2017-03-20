import React, { Component, PropTypes } from 'react';
import { createPeople } from '../../actions/index'; 
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';


class New extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(propsForm) {
    this.props.createPeople(propsForm)
      .then( () => {
        this.context.router.push('/people');
      });
  }

  render() {

    const { fields:  { name, favoriteCity }, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create People</h3>
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

export default reduxForm({
  form: 'PeopleNewForm', 
  fields: ['name', 'favoriteCity'],
  validate
}, null, { createPeople })(New);