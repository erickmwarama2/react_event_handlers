import * as React from "react";
import {default as reverse} from "./reverse";

class MyList extends React.Component {

    constructor() {
        super();
        this.onClick = this.onClick.bind(this);
    }

    state = {
        items: ["Angular", "Backbone", "React", "Vue", "Ember", "jQuery"]
    };

    onClick(id) {
        const {name} = this.props.items.find((i) => i.id === id);
        console.log("clicked", name);
    }

    onReverseClick = reverse.bind(this);

    render() {

        return (
            <section>
                <button onClick={this.onReverseClick}> Reverse </button>
                <ul>
                    {this.state.items.map((v, i) => (
                        <li key={i}>{v}</li>
                    ))}
                </ul>
                <ul>
                    {this.props.items.map(({id, name}) => (
                        <li key={id} onClick={this.onClick.bind(null, id)}>
                            {name}
                        </li>
                    ))}
                </ul>
            </section>
        );
    }
}

export default MyList;