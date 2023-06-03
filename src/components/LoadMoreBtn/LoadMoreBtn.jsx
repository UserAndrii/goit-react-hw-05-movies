import { Btn } from './LoadMoreBtn.styled';
import PropTypes from 'prop-types';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <Btn type="button" onClick={onClick} aria-label="Load more">
      Load more...
    </Btn>
  );
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;
