function Application() {
  return (
    <div>
      <div className="scoreboard">
        <div className="header">
          <h1>Score Board</h1>
        </div>

        <div className="players">
          <div className="player">
            <div className="player-name">
              Tim Baney
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> 33 </div>
                <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>
          <div className="player">
            <div className="player-name">
              Courtney Schuman
            </div>
            <div className="player-score">
              <div className="counter">
                <button className="counter-action decrement"> - </button>
                <div className="counter-score"> 17 </div>
                <button className="counter-action increment"> + </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<Application />, document.getElementById('container'));