import React from "react";
import classNames from "classnames";
class BtnGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            leftActive: false,
            rightActive: false,
        };
    }

    handleLeftClick = () => {
        this.setState({leftActive: true, rightActive: false});
    };

    handleRightClick = () => {
        this.setState({leftActive: false, rightActive: true});
    };

    render() {
        const {leftActive, rightActive} = this.state;

        const leftButtonClass = classNames("btn btn-secondary left", {
            active: leftActive,
        });

        const rightButtonClass = classNames("btn btn-secondary right", {
            active: rightActive,
        });
        return (
            <div className="btn-group" role="group">
                <button
                    type="button"
                    className={leftButtonClass}
                    onClick={this.handleLeftClick}
                >
                    Left
                </button>
                <button
                    type="button"
                    className={rightButtonClass}
                    onClick={this.handleRightClick}
                >
                    Right
                </button>
            </div>
        );
    }
}

export default BtnGroup;