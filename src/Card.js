import React from "react";

function CardImage(props) {
  const isImageURL = props.image;

  if (isImageURL) {
    return (
      <div className="styleImage" onClick={props.onClick}>
        <img
          style={{ width: props.width + "px", marginTop: "-8%" }}
          src={props.image}
          alt=""
        />
      </div>
    );
  }
  return null;
}

function CardContent(props) {
  return (
    <div className="styleCardContent">
      <div>
        <p className="styleCardTitle">{props.title}</p>
        <p className="styleLocationLabel">{props.location}</p>
        <p className="styleDescription">{props.description}</p>
      </div>
      <div className="eventOptions" />
    </div>
  );
}

export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bwEffect: false,
      showOptions: false
    };

    this.toggleEffect = this.toggleEffect.bind(this);
    this.toggleOptions = this.toggleOptions.bind(this);
  }

  toggleEffect() {
    this.setState(prevState => ({
      bwEffect: !prevState.bwEffect
    }));
  }

  toggleOptions(e) {
    let elementClicked = e.target;
    let card = elementClicked.closest(".styleCard");
    let optionsSection = card.getElementsByClassName("eventOptions")[0];
    let optionsVisible = optionsSection.classList.contains("active");

    if (optionsVisible) {
      optionsSection.classList.remove("active");
    } else {
      optionsSection.classList.add("active");
    }
  }

  render() {
    return (
      <div style={{ width: this.props.width + "px" }}>
        <div
          className="styleCard"
          id={this.props.id}
          onClick={this.toggleOptions}
        >
          <CardImage
            image={this.props.image}
            width={this.props.width}
            effect={this.state.bwEffect}
          />
          <CardContent
            title={this.props.title}
            location={this.props.location}
            description={this.props.description}
            options={this.state.showOptions}
          />
        </div>
      </div>
    );
  }
}

Card.defaultProps = {
  width: 350,
  title: "Template - Card Title",
  location: "Location label",
  description: "Template description textbox"
};
