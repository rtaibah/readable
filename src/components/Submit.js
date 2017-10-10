import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class Submit extends Component {
  renderField(field) {
    return (
      <div className="Submit__input">
        <label>{field.label}</label>
        <input
          type={field.type}
          placeholder={field.placeholder}
          {...field.input}
        />
      </div>
    );
  }

  renderTextArea(textArea) {
    return (
      <div className="Submit__textarea">
        <label>{textArea.label}</label>
        <br />
        <textarea
          type={textArea.type}
          placeholder={textArea.placeholder}
          {...textArea.input}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="Submit__wrapper">
          <form>
            <Field
              label="Title"
              name="title"
              placeholder="Enter post title"
              type="text"
              component={this.renderField}
            />
            <Field
              label="Categories"
              name="categories"
              placeholder="Enter post categories"
              type="text"
              component={this.renderField}
            />
            <Field
              label="Post Content"
              name="content"
              type="textarea"
              placeholder="Enter post content"
              component={this.renderTextArea}
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default reduxForm({
  form: 'PostSubmitForm',
})(Submit);
