// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from "react";
import * as microsoftTeams from "@microsoft/teams-js";
import video from "../assets/VEO-Advertisement.mp4";

/**
 * The 'PersonalTab' component renders the main tab content
 * of your app.
 */
class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      context: {},
    };
  }

  //React lifecycle method that gets called once a component has finished mounting
  //Learn more: https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount() {
    // Get the user context from Teams and set it in the state
    microsoftTeams.getContext((context, error) => {
      this.setState({
        context: context,
      });
    });
    document.getElementById('video').play();
    // Next steps: Error handling using the error object
  }

  // <img src={mockup} alt="Oh no, something is wrong."></img>
  render() {
    return (
      <div>
      <video src={video} type="video/mp4"width="80%" height="80%" id="video" autoPlay muted loop>
      </video>
      </div>
    );
  }
}
export default Tab;
