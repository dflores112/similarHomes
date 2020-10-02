import React from 'react';
import styled from 'styled-components';
import ListingContainer from './ListingContainer.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    };
    this.getListings = this.getListings.bind(this);
  }

  componentDidMount() {
    this.getListings();
  }

  getListings() {
    axios.get('/api/similarHomes')
      // .then((res) => res.data.slice(0, 14))
      .then((res) => this.setState({ listings: res.data }));
  }

  render() {
    const Title = styled.h1`
    font-size: 1.5em;
    position:absolute;
    // border:5px solid red;
    left: 7px;
    top:25px;
    `;
    const Test = styled.div`
    position:relative;
    width:1010;
    margin:50px auto;
    font-family:TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif
    `;
    const Listing = styled.div`
    //border:5px solid green;
    width:1010px;
    margin:50px auto;
    position:absolute;
    // overflow: hidden;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    `;
    // const Prev = styled.button`
    // width:47px;
    // height:47px;
    // border-radius:50%;
    // // border:1px solid green;
    // // position:absolute; working
    // position:relative;
    // top:40%;
    // left: -10px;
    // `;
    // const Next = styled.button`
    // width:47px;
    // height:47px;
    // border-radius:50%;
    // // border:1px solid green;
    // // position:absolute; working not with scroll
    // position:relative;
    // top:40%;
    // right: -10px;
    // `;

    return (

      <Test>
        <Title>Similar Homes You May Like</Title>

        <Listing id="listing">
          <ListingContainer listings={this.state.listings} />
        </Listing>

      </Test>

    );
  }
}

export default App;
