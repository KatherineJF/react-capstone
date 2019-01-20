import React, { Component } from "react";

const Robot = props => {
  return (
    var tlMaster = new TimelineMax({ repeat: -1 });

    tlMaster
      .to("#box-two", 0.25, { x: -20, ease: Power0.easeOut }, "a_box_two_left+=0.0")
      .to(
        "#robot-two",
        0.25,
        { x: -20, ease: Power0.easeOut },
        "a_box_two_left+=0.0"
      )
      .to("#box-two", 0.25, { x: -40, ease: Power0.easeOut }, "a_box_one_left+=0.0")
      .to(
        "#robot-two",
        0.25,
        { x: -40, ease: Power0.easeOut },
        "a_box_one_left+=0.0"
      )
      .to("#box-one", 0.25, { x: -20, ease: Power0.easeOut }, "a_box_one_left+=0.0")
      .to(
        "#box-one",
        0.5,
        { y: 95, x: -40, rotation: -180, ease: Power4.easeIn },
        "a_box_one_down+=0.0"
      )
      .to(
        "#box-one",
        2.75,
        { x: 200, ease: Power0.easeOut },
        "a_box_one_right+=0.5"
      )
      .to(
        "#robot-one",
        2.75,
        { x: 240, ease: Power0.easeOut },
        "a_box_one_right+=0.5"
      )
      .to(
        "#robot-two",
        2.75,
        { x: 200, ease: Power0.easeOut },
        "a_box_one_right+=0.5"
      )
      .to("#box-one", 1.25, { y: 0, ease: Power0.easeOut }, "a_elevator_up+=0.5")
      .to("#robot-one", 2.75, { x: 0, ease: Power0.easeOut }, "a_elevator_up+=0.5")
      .to(".elevator", 1.25, { y: -95, ease: Power0.easeOut }, "a_elevator_up+=0.5")
      .to("#robot-two", 0.5, { x: 160, ease: Power0.easeOut }, "a_robot_ramp-=1")
      .to("#box-one", 2, { x: 40, ease: Power0.easeOut }, "a_box_reset-=0.5")
      .to("#robot-two", 2, { x: 0, ease: Power0.easeOut }, "a_box_reset-=0.5")
      .to(".elevator", 1.25, { y: 0, ease: Power0.easeOut }, "a_box_reset-=0.0")

      .to("#box-one", 0.25, { x: 20, ease: Power0.easeOut }, "b_box_one_left+=0.0")
      .to(
        "#robot-two",
        0.25,
        { x: -20, ease: Power0.easeOut },
        "b_box_one_left+=0.0"
      )
      .to("#box-one", 0.25, { x: 0, ease: Power0.easeOut }, "b_box_two_left+=0.0")
      .to(
        "#robot-two",
        0.25,
        { x: -40, ease: Power0.easeOut },
        "b_box_two_left+=0.0"
      )
      .to("#box-two", 0.25, { x: -60, ease: Power0.easeOut }, "b_box_two_left+=0.0")
      .to(
        "#box-two",
        0.5,
        { y: 95, x: -80, rotation: -180, ease: Power4.easeIn },
        "a_box_two_down+=0.0"
      )
      .to(
        "#box-two",
        2.75,
        { x: 160, ease: Power0.easeOut },
        "b_box_two_right+=0.5"
      )
      .to(
        "#robot-one",
        2.75,
        { x: 240, ease: Power0.easeOut },
        "b_box_two_right+=0.5"
      )
      .to(
        "#robot-two",
        2.75,
        { x: 200, ease: Power0.easeOut },
        "b_box_two_right+=0.5"
      )
      .to("#box-two", 1.25, { y: 0, ease: Power0.easeOut }, "b_elevator_up+=0.5")
      .to(".elevator", 1.25, { y: -95, ease: Power0.easeOut }, "b_elevator_up+=0.5")
      .to("#robot-one", 2.75, { x: 0, ease: Power0.easeOut }, "b_elevator_up+=0.5")
      .to("#robot-two", 0.5, { x: 160, ease: Power0.easeOut }, "b_robot_ramp-=1")
      .to("#box-two", 2, { x: 0, ease: Power0.easeOut }, "b_box_reset-=0.5")
      .to("#robot-two", 2, { x: 0, ease: Power0.easeOut }, "b_box_reset-=0.5")
      .to(".elevator", 1.25, { y: 0, ease: Power0.easeOut }, "b_box_reset-=0.0");

  );
};

export default Robot;
