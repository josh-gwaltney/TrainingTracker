import React from 'react';

class Day extends React.Component {
    constructor(){
        super();
    }

    render(){
        return (
            <div className="day">
                <div className="heading">1</div>
                <div className="details">
                    <div className="item">
                        <div className="heading">
                            00:00:00
                        </div>
                        <div className="details">
                        </div>
                    </div>
                    <div className="item">
                        <div className="heading">
                            00:00:00
                        </div>
                        <div className="details">
                        </div>
                    </div>
                    <div className="item">
                        <div className="heading">
                            00:00:00
                        </div>
                        <div className="details">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Day;