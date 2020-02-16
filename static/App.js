class JokeBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className={"contents-container"}>
        <div className={"contents"}>
          <div className={"p-contents"}>
            {
              this.props.joke.map((line) =>
                <p>{line}</p>
              )
            }
          </div>
        </div>
      </div >
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      jokes: [
        ["Guy: Hey are you reading highway design? because I see nice “Curves” over there.", "Gal : You must be reading concrete technology, because I see “Creep” over there."],
        ["Coarse Aggregate : What's up my friend Sand, How are you!? ", "Sand: I’m “Fine”" ],
        ["Do you ever think about that Steel rebar that gets permanently buried in the concrete leading a life full of loneliness and suffocation?"],
        ["Column: Hey Bro.. What’s up?", "Beam: Nothing Bro.. Just Enjoying “Moments”"],
        ["What do electrical engineers like for breakfast?", "Ohmlets!"],
        ["Civil engineers have tunnel vision"],
        ["In civil engineers we truss"],
        ["The optimist says the glass is half-full", "the pessimist says it's half-empty", "but the engineer says the glass is twice as big as it needs to be."],
        ["What did the structural engineer say to the architect?", "Nice buttress."],
        ["I am shocked about the local bridge being damaged.", "Can’t get over it."],
        ["Bridges are truss worthy"],
        ["The suspension is killing me"]

      ],
      numImages: 10,
      jokeIndex: 0,
      imgIndex: 0
    }
    this.getPreviousIndex = this.getPreviousIndex.bind(this);
    this.getNextIndex = this.getNextIndex.bind(this);
    this.getPreviousSide = this.getPreviousSide.bind(this);
    this.getNextSlide = this.getNextSlide.bind(this);
  }

  componentDidMount() {
    let that = this
    window.addEventListener("keydown", checkKey);
    function checkKey(e) {
        e = e || window.event;
        if (e.keyCode == '37') {
          // left arrow
          that.getPreviousSide();
        }
        else if (e.keyCode == '39') {
          console.log('rightarrow')
          that.getNextSlide();
        }

    }
  }

  componentDidUpdate() {

  }

  getPreviousIndex(index, endIndex) {
    return (index > 0) ? index - 1 : endIndex;
  }

  getNextIndex(index, endIndex) {
    return (index < endIndex) ? index + 1 : 0;
  }

  getPreviousSide() {
    var newJokeIndex = this.getPreviousIndex(this.state.jokeIndex, this.state.jokes.length - 1)
    var newIndex = this.getPreviousIndex(this.state.imgIndex, this.state.numImages - 1)
    this.setState({
      jokeIndex: newJokeIndex,
      imgIndex: newIndex
    })
  }

  getNextSlide() {
    console.log(newJokeIndex);
    var newJokeIndex = this.getNextIndex(this.state.jokeIndex, this.state.jokes.length - 1);
    var newIndex = this.getNextIndex(this.state.imgIndex, this.state.numImages - 1)
    this.setState({
      jokeIndex: newJokeIndex,
      imgIndex: newIndex
    })
  }


  render() {
    console.log(this.state.imgIndex)
    return (
      <div className={"section"}>
        <div className={"section-background"}>
          <img className={"image-background"} src={`/static/bridge${this.state.imgIndex}.jpg`} />
        </div>
        <div>
        <div className={"section-container"}>
          <JokeBox joke={this.state.jokes[this.state.jokeIndex]} />
        </div>
        <div className={"button-container"}>
          <button onClick={this.getPreviousSide}>{"<"}</button>
          <button onClick={this.getNextSlide}>{">"}</button>
        </div>
        </div>

      </div>
    )
  }
}

ReactDOM.render(
  <App label={"help"}/>,
  document.getElementById('root')
);
