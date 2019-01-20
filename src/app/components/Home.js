import React from "react";

export class Home extends React.Component {
    constructor(props) {
        super();
        this.name = props.name;
        this.state = {
            age: props.initialAge,
            homeLink: props.initialLink
        }
    }

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
        });
        
    }

    onChangeLink() {
        this.props.changeLink(this.state.homeLink)
    }

    onHandleEvent(event) {
        this.setState({
            homeLink: event.target.value
        });
    }

    render() {
        return (
            <div>
                <p>In a new Component  </p>
                <p>Your name is {this.name} and age is {this.state.age}</p>
                <hr/>
                <button onClick = {() => this.onMakeOlder()} className="btn btn-primary">Make me older</button>
                <hr/>
                <button onClick = {this.props.greet} className="btn btn-primary">Greet</button>
                <hr/>
                <input type="text" value= {this.state.homeLink} 
                    onChange = {(event) => this.onHandleEvent(event)}/>
                <button onClick= {this.onChangeLink.bind(this)} className= "btn btn-primary">Change name</button>
            </div>
        );
    }
}
