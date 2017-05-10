import React from 'react';
import Day from './day';

class Week extends React.Component {
    constructor(){
        super();
    }

    renderDay(i){
        return <Day />;
    }

    render(){
        return (
            <div className="week">
                { this.renderDay(0) }
                { this.renderDay(1) }
                { this.renderDay(2) }
                { this.renderDay(3) }
                { this.renderDay(4) }
                { this.renderDay(5) }
                { this.renderDay(6) }
                <div className="summary">
                    <div className="heading">
                        summary
                    </div>
                    <div className="details">
                    </div>
                </div>
            </div>
        );
    }
}

export default Week;