import React,{ PropTypes,Component } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LandingPage from '../../components/LandingPage/LandingPage';
import { connect } from 'react-redux';



class  HomeContainer extends Component {
  constructor(props,context) {
    super(props,context);
  }

  render() {
    return (
      <div>
        <Header />
        <LandingPage />
        <Footer />
      </div>
    );
  }
}
export default connect()(HomeContainer);
