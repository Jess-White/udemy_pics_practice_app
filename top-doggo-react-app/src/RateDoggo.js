import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

class RateDoggo.js extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      caption: "",
      userId: "",
      score: "",
      imgUrl: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {

  }

  addDoggo(event) {
    const { name, caption, userId, score, imgUrl } = this.state;
    axios
      .post(
        'http://localhost:3001/api/doggos',
        {
          doggo: {
            name: name,
            caption: caption,
            user_id: userId,
            score: score,
            img_url: imgUrl
          }
        }
      )
      .then(response => {
        if (response.data.status === "created") {
          this.props.handleSuccessfulAuth(response.data);
        }
      })
      .then(this.props.history.push("/log-in"))
      .catch(error => {
        console.log("error in Sign Up", error);
        alert(JSON.stringify(error.response.data.errors));
      });
      event.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form className="add-doggo-form" onSubmit={this.handleSubmit}>
        <input style={{margin: 40}}
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
          <input style={{margin: 40}}
            type="text"
            name="caption"
            placeholder="Caption"
            value={this.state.caption}
            onChange={this.handleChange}
          />
          <input style={{margin: 40}}
            type="text"
            name="score"
            placeholder="Score"
            value={this.state.score}
            onChange={this.handleChange}
          />
          <input style={{margin: 40}}
            type="text"
            name="imgUrl"
            placeholder="Image Url"
            value={this.state.imgUrl}
            onChange={this.handleChange}
          />
          <button>Add Doggo</button>

          <Container style={{margin: 40, textAlign: "center"}}>
            <div className="doggo-entry">
              <img style={{height: 700 , width: "auto" }} src={this.state.imgUrl} alt="" />
              <h2 className="top">{this.state.name}</h2>
              <h2 className="bottom">{this.state.caption}</h2>
            </div>
          </Container>
      </div>
      )
  }
}

export default RateDoggo