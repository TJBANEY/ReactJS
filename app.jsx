function Header(props) {
  return (
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  )
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
}

function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score}/>
      </div>
    </div>
  )
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
}

function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment"> + </button>
    </div>
  )
}

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
}

function Application(props) {
  return (
    <div>
      <div className="scoreboard">
        <Header title={props.title}/>

        <div className="players">
          <Player name="Tim Baney" score={33}/>
          <Player name="Courtney Schuman" score={17}/>
        </div>
      </div>
    </div>
  );
};

Application.propTypes = {
  title: React.PropTypes.string,
}

Application.defaultTypes = {
  title: 'My Scoreboard'
}

ReactDOM.render(<Application title="My Scoreboard"/>, document.getElementById('container'));