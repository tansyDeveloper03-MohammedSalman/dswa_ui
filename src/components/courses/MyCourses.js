import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import TextFieldGroup from "../common/TextFieldGroup";
import TextAreaFieldGroup from "../common/TextAreaFieldGroup";
import SelectListGroup from "../common/SelectListGroup";
import InputGroup from "../common/inputGroup";
import { createProfile, getCurrentProfie } from "../../actions/profileActions";
import isEmpty from "../../validation/is-empty";
import logo from "../../img/showcase.jpg";
import logo1 from "../../img/showcase1.jpg";
import logo2 from "../../img/showcase2.jpg";
import logo3 from "../../img/showcase3.jpg";
import logo4 from "../../img/showcase4.jpg";
import logo5 from "../../img/showcase5.jpg";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  console.log(className);
  return (
    <div
      className={className}
      style={{ ...style, display: "block", color: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block"
      }}
      onClick={onClick}
    />
  );
}

class MyCourses extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      adaptiveHeight: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="l-auto">
              <h1 className="display-4 text-left text-white">
                <b>My Courses</b>{" "}
              </h1>
              <form onSubmit={this.onSubmit} />
            </div>
          </div>
        </div>
        <hr style={{ backgroundColor: "#212148" }} />
        <Slider {...settings}>
          <div className="col-md-12">
            <a href="">
              <img src={logo} alt="Logo" style={{ height: "150px" }} />
            </a>
          </div>
          <div className="col-md-12">
            <a href="">
              <img src={logo1} alt="Logo" style={{ height: "150px" }} />
            </a>
          </div>
          <div className="col-md-12">
            <a href="">
              <img src={logo2} alt="Logo" style={{ height: "150px" }} />
            </a>
          </div>
          <div className="col-md-12">
            <a href="">
              <img src={logo3} alt="Logo" style={{ height: "150px" }} />
            </a>
          </div>
          <div className="col-md-12">
            <a href="">
              <img src={logo4} alt="Logo" style={{ height: "150px" }} />
            </a>
          </div>
          <div className="col-md-12">
            <a href="">
              <img src={logo5} alt="Logo" style={{ height: "150px" }} />
            </a>
          </div>
          <div className="col-md-12">
            <a href="">
              <img src={logo} alt="Logo" style={{ height: "150px" }} />
            </a>
          </div>
          <div className="col-md-12">
            <a href="">
              <img src={logo} alt="Logo" style={{ height: "150px" }} />
            </a>
          </div>
        </Slider>
        <div>
          <section className="container">
            <h1>Robots</h1>
            <div className="row" />
          </section>
        </div>
      </div>
    );
  }
}

MyCourses.propTypes = {
  createProfile: PropTypes.object.isRequired,
  getCurrentProfie: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { createProfile, getCurrentProfie }
)(MyCourses);
