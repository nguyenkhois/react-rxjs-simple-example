import React, { Component } from 'react';
import MainStore from '../store/MainStore';

export class GetTimestamp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            compDataList: []
        };
    }

    componentDidMount() {
        console.log('Component is mounted');

        MainStore.getState().subscribe((data) => {
            console.log('Current MainStore', data);
            this.setState({ compDataList: data.dataList });
        });
    }

    componentWillUnmount() {
        // You should use .unsubscrible() for the better performance
        MainStore.getState().unsubscribe();
    }

    handleClick = (e) => {
        e.preventDefault();
        MainStore.changeState(Date.now());
    }

    render() {
        console.log('Current local state', this.state);

        return (
            <div className="welcome">
                <p>Open the web browser console to view the results.</p>
                <button type="button" onClick={this.handleClick}>
                    Click me to see how RxJS works!
                </button>

                {this.state.compDataList.map((item, index) =>
                    <p key={index}>{item}</p>
                )}
            </div>
        );
    }
};
