import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import Wave from "react-wavify";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [list1, setList1] = useState(false);
  const [list2, setList2] = useState(false);

  const AlwaysScrollToBottom = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView({ behavior: "smooth" }));
    return <div ref={elementRef} />;
  };

  return (
    <div>
      <div
        style={{
          height: "92vh",
          overflowX: "hidden",
          overflowY: "scroll",
        }}
      >
        <Wave
          className="wave"
          fill="#003057"
          paused={false}
          options={{
            height: 50,
            amplitude: 50,
            speed: 0.1,
            points: 3,
          }}
        />
        <div id="logo">
          <img src={require("../assets/logo.png")} alt={""} />
        </div>
        <div class="title_container">
          <Typewriter
            options={{ cursorClassName: "cursorSize" }}
            onInit={(typewriter) => {
              typewriter
                .typeString("<p class='home_title'>Welcome to</p>")
                .pauseFor(1000)
                .deleteAll()
                .typeString("<p class='home_title'>eBooth</p>")
                .start();
            }}
          />
        </div>
        <p class="home_detail">
          eBooth connects people looking for school events with those who want
          to promote them. We aims to make it easier for people to discover and
          participate in school events.
        </p>
        <div class="download_container">
          <a href="https://apps.apple.com/app/ebooth-find-boost-your-event/id6445867014">
            <img
              class="download_button"
              src={require("../assets/appstore.png")}
              alt={""}
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.ebooth&pli=1">
            <img
              class="download_button"
              src={require("../assets/playstore.png")}
              alt={""}
            />
          </a>
        </div>
        <p class="list_title" onClick={() => setList1(!list1)}>
          Perks for event seekers:
        </p>
        {list1 && (
          <div className="list_container">
            <ul class="list-group">
              <li class="list-group-item">
                Easy access to information on a wide range of school events in
                one place
              </li>
              <li class="list-group-item">
                Detailed event information including location, start/end time,
                giveaways and map
              </li>
              <li class="list-group-item">
                Opportunity to discover new and exciting events and connect with
                like-minded individuals.
              </li>
              <li class="list-group-item">
                Will be added - Option to RSVP and receive updates and reminders
                for events they are interested in
              </li>
              <li class="list-group-item">
                Will be added - Ability to search and filter events based on
                their interests and location
              </li>
            </ul>
            <AlwaysScrollToBottom />
          </div>
        )}
        <p class="list_title" onClick={() => setList2(!list2)}>
          Perks for event promoters:
        </p>
        {list2 && (
          <div className="list_container">
            <ul class="list-group">
              <li class="list-group-item">
                Ability to create and post event information including location,
                start/end time, giveaways and map
              </li>
              <li class="list-group-item">
                Increased visibility and awareness of their events through the
                platform
              </li>
              <li class="list-group-item">
                Will be added - Option to target specific audience groups based
                on their interests and preferences
              </li>
              <li class="list-group-item">
                Will be added - Ability to track and measure the success of
                their events through user engagement metrics
              </li>
              <li class="list-group-item">
                Will be added - Opportunity to generate buzz and build a
                following for future events.
              </li>
            </ul>
            <AlwaysScrollToBottom />
          </div>
        )}
        <div className="event_title">
          <Link className="event_title" to="/event">
            Go to Event ►
          </Link>
        </div>
      </div>

      <div className="copyright_container">
        <p className="copyright_text">
          &copy; 2023 eBooth | All Rights Reserved
        </p>
        <div
          style={{
            display: "inline-block",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Link className="link" to="/terms-of-use">
            Terms of use
          </Link>
          {"  "} | {"  "}
          <Link className="link" to="/privacy-policy">
            privacy policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
