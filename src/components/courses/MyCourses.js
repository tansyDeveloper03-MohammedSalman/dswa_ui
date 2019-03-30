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
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  console.log(className);
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
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
        <hr style={{ backgroundColor: "white" }} />
        <Slider {...settings}>
          <div className="col-md-12">
            <a href="">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="col-md-12">
            <a href="">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="col-md-12">
            <a href="">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="col-md-12">
            <a href="">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="col-md-12">
            <a href="">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="col-md-12">
            <a href="">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="col-md-12">
            <a href="">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="col-md-12">
            <a href="">
              <img src={logo} alt="Logo" />
            </a>
          </div>
        </Slider>
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
