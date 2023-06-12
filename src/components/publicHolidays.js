import axios from "axios";
import React, { Component } from 'react';

export class PublicHolidays extends Component {
    constructor(props) {
        super(props);
        this.state = {
            apipost: [],
            errorMessage: ''
        };
    }

    componentDidMount() {
        axios
          .get('https://date.nager.at/api/v3/PublicHolidays/2023/AT')
          .then(response => {
            console.log(response);
            this.setState({ apipost: response.data });
          })
          .catch(error => {
            console.log(error);
            this.setState({ errorMessage: "Error" });
          });
      }

    render() {
        const { apipost, errorMessage } = this.state;
  return (
    <React.Fragment>
      <div className="out">
        <div className="in">
          {apipost.length ? (
            apipost.map(a => (
              <div className="apidata" key={a.date}>
                {a.name}<br></br>
                {a.localName}<br></br>
                {a.date}<br></br>
                {a.countryCode}<br></br>
                {a.fixed}<br></br>
                {a.global}<br></br>
                {a.counties}<br></br>
                {a.launchYear}<br></br>
                {a.types}
                <br />
              </div>
            ))
          ) : null}
          {errorMessage ? <div>{errorMessage}</div> : null}
        </div>
      </div>
    </React.Fragment>
  );
}
}

export default PublicHolidays;
