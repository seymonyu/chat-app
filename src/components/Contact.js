import React from "react";
import { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { online: true };
  }

  render() {
    return (
      <div className="Contact">
        <img className="avatar" src={this.props.avatar} alt="av" />
        <div>
          <div className="name"> {this.props.name} </div>
          <div
            className="status"
            onClick={() => {
              this.setState({ online: !this.state.online });
            }}
          >
            {this.state.online ? (
              <div className="status-online">
                <p> online </p>
              </div>
            ) : (
              <div className="status-offline">
                <p> offline </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
