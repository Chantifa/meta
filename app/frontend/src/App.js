import React from "react";
import RoutingLogic from "./routing/RoutingLogic";

<<<<<<< HEAD
function App() {
  return (
    <div>
      <RoutingLogic />
    </div>
  );
=======
class App extends React.Component {
  componentDidMount() {
    const user = getStore('user')
    if (user) {
      this.props.dispatch(ActionCreators.login(user));
    }
  }


  render() {
    return (
      <div>
        <Navbar />
        <Navigation />
        <Footer />
      </div>
    )
  }
>>>>>>> 26c1e06d009ef90564c6899360fb4ae2b386b092
}

export default App;
