import { Component } from 'react';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
// import Notification from './Notification/Notification';

class App extends Component {
  state = {
    feedback: {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  };

  render() {
    return (
      <div>
        <Description />
        <Options />
        <Feedback options={this.state.feedback} />
      </div>
    );
  }
}

export default App;
