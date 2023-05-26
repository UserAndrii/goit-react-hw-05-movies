import PropTypes from 'prop-types';
import { Wrap, Image } from './HandleError.styled';

import errorImage from '../../images/oops-error.jpg';

const HandleError = ({
  title = 'Sorry, there are no results for this query.',
}) => {
  return (
    <Wrap>
      <p>{title}</p>
      <Image src={errorImage} alt="Something went wrong" />
    </Wrap>
  );
};

HandleError.propTypes = {
  title: PropTypes.string,
};

export default HandleError;
