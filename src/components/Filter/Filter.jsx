import { useDispatch } from 'react-redux';
import { TitleFind, FieldFind } from './Filter.styled';
import { updateFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = evt => {
    dispatch(updateFilter(evt.target.value));
  };
  return (
    <div>
      <TitleFind>Find contacts by name</TitleFind>
      <FieldFind
        id="standard-basic"
        label="Standard"
        variant="standard"
        onChange={handleChange}
      />
    </div>
  );
};

export default Filter;
