import React from "react"
import { Remarkable } from 'remarkable'
import { Form } from 'react-bootstrap'

class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Hello, **world**!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <Form>
        <div className="MarkdownEditor">
          <h3>Markdown Editor</h3>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Enter some markdown</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              onChange={this.handleChange}
              value={this.state.value}
            />
          </Form.Group>
          <h3>Output</h3>
          <div
            className="content"
            dangerouslySetInnerHTML={this.getRawMarkup()}
          />


        </div>
      </Form>
    );
  }
}

export default MarkdownEditor