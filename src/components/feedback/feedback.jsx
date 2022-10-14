import React, {Component} from "react";
import Buttons from "./feedbakButtons";
import Statistic from "./statistic";
import Section from "./section";


class Feedback extends Component {
   
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    countTotalFeedback = () => {
        const total = Object.values(this.state).reduce((sum, a) => sum + a, 0);
        return total
    }

    countPositiveFeedbackPercentage = () => {
        const percentage = (100 * this.state.good) / Object.values(this.state).reduce((sum, a) => sum + a, 0);
        return percentage.toFixed(0) 
    }

    clickButton = buttonId => {
        this.setState(prevState => ({
            [buttonId]: prevState[buttonId] + 1,
        }))
    };

render() {
    const buttons = Object.keys(this.state);
    return (
        <div>
            <Section 
            title="Please leave feedback"
            children={ 
            <Buttons 
            buttons={buttons} 
            onFeedback={this.clickButton}/>
            }/>
       {this.countTotalFeedback() > 0 ? (
        <Section 
        title="Statistic"
        children={
            <Statistic 
        good={this.state.good} 
        neutral={this.state.neutral} 
        bad={this.state.bad} 
        total={this.countTotalFeedback()} 
        positivePercentage={this.countPositiveFeedbackPercentage()}
        />
        }/>
       ) : (
        <Section title="Statistic" children={`No feedbacck given`}/>
       )}
        </div>
    )
}
};



export default Feedback;