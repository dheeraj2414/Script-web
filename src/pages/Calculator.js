import Footer from "components/Footer";
import Navbar from "components/Navbar";
import React from "react";
import { Component } from "react";
import Hero from "sections/Calculator/Hero";
import Result from "sections/Calculator/Result";
import StakingInformation from "sections/Calculator/StakingInformation";
import Api from "services/api";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalSCPTVal: 0,
      marketValues: {
        spayPriceUSD: 0.01,
        scptPriceUSD: 0.025,
        circInPercent: 0,
      }
    };
  }

  componentDidMount() {
    this.getSupplyData();
    this.getMarketPrice();
  }

  getSupplyData() {
    Api.getSupplyData().then((res) => {
      if(res) {
        const scptVal = res.totalScptWeiValue.toFixed(4);
        this.setState({
          totalSCPTVal: scptVal,
          marketValues: {
            circInPercent: 0 / 1000000000 * 100,
            spayPriceUSD: 0.01,
            scptPriceUSD: 0.025,
          }
        })
      }
    })
  }

  getMarketPrice() {
    Api.getMarketPrice().then(res => console.log(res,'res'));
  }

  render() {
    const { totalSCPTVal, marketValues } = this.state;
    return (
      <div>
        <div className="mb-4 sm:mb-6 lg:mb-10">
          <Navbar />
        </div>
        <div className="mb-14 lg:mb-24">
          <Hero totalSCPTVal={totalSCPTVal} />
        </div>
        <div className="mb-20 lg:mb-24">
          <StakingInformation totalSCPTVal={totalSCPTVal} marketValues={marketValues}/>
        </div>
        <div className="mb-20 lg:mb-24">
          <Result />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Calculator;
