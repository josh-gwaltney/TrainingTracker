import React from 'react';
import Week from './week';
import Day from './day';

class Calendar extends React.Component {
    constructor(){
        super();
    }

    renderWeek(x){
        return <Week />;
    }

    renderDay(i){
        return <Day />;
    }

    render(){
        return (
            <div className="calendar">
                <div className="fixed">
                    fixed
                </div>
                <div className="scrollable">
                    { this.renderWeek(0) }
                    { this.renderWeek(0) }
                    { this.renderWeek(0) }
                    { this.renderWeek(0) }

                </div>
            </div>
        );
    }
}

export default Calendar;