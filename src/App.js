import React, { Component } from 'react';
import axios from 'axios';
import DataCard from './DataCard';
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { usersCollection: [] };
  }

  componentDidMount() {
    const options = {
      method: 'GET',
      url: 'https://us-states.p.rapidapi.com/basic',
      params: { limit: '10', page: '1' },
      headers: {
        'X-RapidAPI-Key': 'fa0828195cmsh9f824b0cab82622p1c348ajsnc8b29806bee2',
        'X-RapidAPI-Host': 'us-states.p.rapidapi.com',
      },
    };

    axios
      .request(options)
      .then((response) => {
        this.setState({ usersCollection: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  dataCard() {
    return this.state.usersCollection.map((data, i) => {
      return <DataCard obj={data} key={i} />;
    });
  }

  render() {
    return (
      <>
        <div style={{ marginTop: '50px', padding: '20px' }}>
          <p><b>US States - Rapid API</b></p>
          <table>
            <tr>
              <th>Name</th>
              <th>Postal</th>
              <th>Capital</th>
              <th>Population</th>
            </tr>
            {this.dataCard()}
          </table>
        </div>
      </>
    );
  }
}
