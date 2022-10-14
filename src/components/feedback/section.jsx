import {Box, Title} from './feedbeck.styled';
import PropTypes from "prop-types";

const Section = ({title, children}) => {
    return (
        <Box>
    <Title>{title}</Title>
     {children}
    </Box>
    )
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}

export default Section;