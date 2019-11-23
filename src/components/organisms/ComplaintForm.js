import React, { Component } from 'react';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

class ComplaintForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
      showDialogue: false,
      submitSuccess: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    // console.log('submit clicked', this.state)
    event.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        message: this.state.message
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    })
      .then(response => {
        if (response.status === 404) {
          this.setState({ submitSuccess: false })
        }
        else { this.setState({ submitSuccess: true }) }

        console.log('response', this.state);
        return response.json()
      })
      .then(json => {
        console.log('sajdas', json);
        this.setState({ name: '', email: '', message: '', showDialogue: true });
      })
      .catch(err => {
        console.log('error', err);
      });
  }

  handleDialogue() {
    this.setState({ showDialogue: false })
  }

  render() {
    const form = <form onSubmit={this.handleSubmit}>
      <FormField type="text" name="name" label="Name" value={this.state.name} onChange={this.handleChange} />
      <FormField type="text" name="email" label="Email" value={this.state.email} onChange={this.handleChange} />
      <FormField type="textarea" name="message" label="Feedback" value={this.state.message} onChange={this.handleChange} />
      <Button>Submit</Button>
    </form>

  
    const successMessage = <div><h3>Thanks for submitting</h3><p>We have received your complaint. Unfortunately we have no control of the weather, we merely report on it. As such, your complaint has been sent straight to our junk mail folder.</p></div>
    const failureMessage = <p>Form has not been submitted, try again.</p>

    const dialogue = <div>
      {this.state.submitSuccess === true ? successMessage : failureMessage}
      <button onClick={() => this.handleDialogue()}>Ok</button>
    </div>

    return (
      <div>
        {this.state.showDialogue === false ? form : dialogue}
      </div>
    );
  }
};

export default ComplaintForm;