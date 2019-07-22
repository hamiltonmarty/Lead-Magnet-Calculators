import React, { Component } from 'react';
import Routes from './src/components/Routes';
import TopNavigation from './components/topNavigation';
import TopNavigation from './src/components/sideNavigation';
import Footer from './src/components/Footer';
import './index.css';



class App extends Component {
  
  render() {
    return (
        <div className="flexible-content">
          <TopNavigation />
          <main id="content" className="p-5">
            <Routes />
          </main>
          <Footer />
        </div>
    );
  }

}
export default App;

