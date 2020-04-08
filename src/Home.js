import React, { Component } from "react";
import app from "./base";
import Navbar from "../src/components/Navigation"


class Home extends Component {

  constructor() {
    super();
    this.state = {
      peoples: [],
    };
  }


  componentDidMount() {
    const API_URL = 'https://randomuser.me/api/'
    const AMOUNT_PEOPLE = '?results=12'
    const API_URL_QUERY = `${API_URL}${AMOUNT_PEOPLE}`
    console.log(API_URL_QUERY)
    fetch(API_URL_QUERY)
      .then(results => {
        return results.json();
      }).then(data => {
        const peopleColletions = data.results.map((i, index) => {
          return (
            <div class="col-xs-12 col-sm-6 col-md-4" key={index}>
              <div class="image-flip" ontouchstart="this.classList.toggle('hover');">
                <div class="mainflip">
                  <div class="frontside">
                    <div class="card">
                      <div class="card-body text-center">
                        <p><img class="img-fluid" src={i.picture.large} alt="card image" /></p>
                        <h4 class="card-title">{i.name.first}</h4>
                        <p class="card-text">{i.email}</p>
                        <a href="#" class="btn btn-primary btn-sm"><i class="fa fa-plus"></i></a>
                      </div>
                    </div>
                  </div>
                  <div class="backside">
                    <div class="card">
                      <div class="card-body text-center mt-4">
                        <h4 class="card-title">{i.name.first}{'\u00A0'}{i.name.last}</h4>
                        <p class="card-text">{i.name.title}.{'\u00A0'}{i.name.first}{'\u00A0'}ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam ut aliquip ex ea commodo.</p>
                        <p class="card-text">
                          <a href="mailto:${i.email}">{i.email}</a>.<br />
                          {i.location.city}, {i.location.state}<br />{i.location.country}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
        this.setState({ peoples: peopleColletions });
        console.log('state', this.state.peoples);
      })
  }
  render() {
    return (
      <>
        <Navbar />
        <section id="team" className="pb-5" >
          <div className="container">
            <h5 className="section-title h1">OUR TEAM</h5>
            <div className="row">
              {this.state.peoples}
            </div>
          </div>
        </section>
        {/* <button onClick={() => app.auth().signOut()}>Sign out</button> */}
      </>
    );
  }
}

export default Home;