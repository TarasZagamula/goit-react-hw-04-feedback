import {Label, StatIndicators, BoxInfo} from './feedbeck.styled';
import PropTypes from "prop-types";

const Statistic = ({good, neutral, bad, total, positivePercentage}) => {

    return (
        <div>
    <BoxInfo>
        <Label>good</Label><StatIndicators>{good}</StatIndicators>
        </BoxInfo>
    <BoxInfo>
        <Label>neutral</Label><StatIndicators>{neutral}</StatIndicators>
        </BoxInfo>
    <BoxInfo>
        <Label>bad</Label><StatIndicators>{bad}</StatIndicators>
        </BoxInfo>
        {total > 0 && (
            <BoxInfo>
            <Label>total</Label><StatIndicators>{total}</StatIndicators>
            </BoxInfo>
        )}
        {total > 0 && (
            <BoxInfo>
            <Label>percentage</Label><StatIndicators>{positivePercentage}%</StatIndicators>
            </BoxInfo>
        )}
        </div>
    )
};

Statistic.propTypes = {
    good: PropTypes.number.isRequired, 
    neutral: PropTypes.number.isRequired, 
    bad: PropTypes.number.isRequired, 
    total: PropTypes.number.isRequired, 
    positivePercentage: PropTypes.string.isRequired,
}

export default Statistic;
