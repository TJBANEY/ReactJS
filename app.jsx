var PLAYERS = [
  {
    name: 'Tim Baney',
    score: 33,
    id: 1
  },
  {
    name: 'Courtney Schuman',
    score: 17,
    id: 2
  },
  {
    name: 'Sinbad Baney',
    score: 22,
    id: 3
  }
]

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
        <Counter score={props.score} onChange={props.onScoreChange}/>
      </div>
    </div>
  )
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onScoreChange: React.PropTypes.func.isRequired
}

function Counter(props) {
  return (
      <div className="counter">
        <button className="counter-action decrement" onClick={function (){props.onChange(-1);}}> - </button>
        <div className="counter-score">{props.score}</div>
        <button className="counter-action increment" onClick={function (){props.onChange(1);}}> + </button>
      </div>
    )
}

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired
}

// var Counter = React.createClass({
//   propTypes: {},

//   getInitialState: function() {
//       return {
//           score: 0,  
//       };
//   },

//   incrementScore: function() {
//     this.setState({
//       score: (this.state.score + 1)
//     })
//   },

//   decrementScore: function() {
//     this.setState({
//       score: (this.state.score - 1)
//     })
//   }

//   render: function(){
//     return (
//       <div className="counter">
//         <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
//         <div className="counter-score"> {this.state.score} </div>
//         <button className="counter-action increment" onClick={this.incrementScore}> + </button>
//       </div>
//     )
//   }
// })

var Application = React.createClass({
  propTypes: {
    title: React.PropTypes.string,
    players: React.PropTypes.arrayOf(React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      score: React.PropTypes.number.isRequired,
      id: React.PropTypes.number.isRequired
    })).isRequired
  },

  getDefaultProps: function() {
      return {
        title: 'My Scoreboard'
      };
  },

  getInitialState: function() {
      return {
        players: this.props.initialPlayers
      };
  },

  onScoreChange: function(index, delta) {
    console.log(index + ' ' + delta);
    this.state.players[index].score += delta;
    this.setState(this.state);
  },

  render: function(){
    return (
      <div>
        <div className="scoreboard">
          <Header title={this.props.title}/>

          <div className="players">
            {this.state.players.map(function(player, index){
              return <Player  
                      onScoreChange={function(delta) {this.onScoreChange(index, delta)}.bind(this)}
                      name={player.name} 
                      score={player.score} 
                      id={player.id} />
            }.bind(this))}
          </div>
        </div>
      </div>
    );
  }
})

// function Application(props) {
//   return (
//     <div>
//       <div className="scoreboard">
//         <Header title={props.title}/>

//         <div className="players">
//           {props.players.map(function(player){
//             return <Player name={player.name} score={player.score} id={player.id} />
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// Application.propTypes = {
//   title: React.PropTypes.string,
//   players: React.PropTypes.arrayOf(React.PropTypes.shape({
//     name: React.PropTypes.string.isRequired,
//     score: React.PropTypes.number.isRequired,
//     id: React.PropTypes.number.isRequired
//   })).isRequired
// }

// Application.defaultTypes = {
//   title: 'My Scoreboard'
// }

ReactDOM.render(<Application initialPlayers={PLAYERS} title="My Scoreboard"/>, document.getElementById('container'));