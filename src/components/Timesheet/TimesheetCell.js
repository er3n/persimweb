import React, {Component} from 'react';
import classNames from 'classnames';





class TimesheetCell extends Component {

    constructor(props) {
        super(props);

        this.mouseOver = this.mouseOver.bind(this);
        this.mouseOut = this.mouseOut.bind(this);
        this.onClick = this.onClick.bind(this);
        this.state = {
            isOpen: false
        };
    }

    mouseOver() {
        this.setState({
            isOpen: true
        });
    }

    mouseOut() {
        this.setState({
            isOpen: false
        });
    }

    onClick() {
        alert("test");
    }

    render() {
        return (
            <div className={classNames({"h1": this.state.isOpen})} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut} onClick={this.onClick}>
                {this.props.schedule.lessons[this.props.lessonNo - 1]}
                </div>
        );
    }
}

export default TimesheetCell;