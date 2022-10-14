import {FeedbackButton} from './feedbeck.styled';
import PropTypes from "prop-types";

const Buttons = ({buttons, onFeedback}) => (
    buttons.map((button) => {
        return (<FeedbackButton onClick={() => onFeedback(button)} key={button} type={button}>{button}</FeedbackButton>)
    })
);

Buttons.propTypes = {
    buttons: PropTypes.array.isRequired,
    onFeedback: PropTypes.func.isRequired,
}

export default Buttons;