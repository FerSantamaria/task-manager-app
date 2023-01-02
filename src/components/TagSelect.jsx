import { useEffect, useState } from 'react'
import Select, { components } from 'react-select'
import PropTypes from 'prop-types'
import { GET_TAGS } from '../graphQL/queries';
import { useQuery } from '@apollo/client';
import { ReactComponent as TagIcon } from './../assets/icons/tag.svg';
import { SelectStyles, StyledPeopleMenuOption, StyledTageMenuCheckbox } from './styled/components/Select.styled'

const InputOption = ({
  isSelected,
  children,
  ...props
}) => {
  const style = {
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }

  return (
    <components.Option
      {...props}
      isSelected={isSelected}
      innerProps={{ ...props.innerProps, style }}
    >
      <StyledTageMenuCheckbox type="checkbox" style={{ height: "18px" }} checked={isSelected} onChange={() => !isSelected} />
      {children}
    </components.Option>
  )
}

const MultiValueContainer = ({ selectProps, data }) => {
  const label = data.label;
  const allSelected = selectProps.value;
  const index = allSelected.findIndex(selected => selected.value === data.value);
  const isLastSelected = index === allSelected.length - 1;
  const labelSuffix = isLastSelected ? "" : ", ";
  const val = `${label}${labelSuffix}`;
  return val;
}

const TagSelect = () => {
  const [options, setOptions] = useState([])

  const { loading, data } = useQuery(GET_TAGS)

   useEffect(() => {
    if (data?.__type?.enumValues) {
      let fetchedData = data.__type.enumValues.map(item => ({
        value: item.name,
        label: item.name,
      }))

      let options = [{
        label: "Tag Title",
        options: fetchedData
      }]

      setOptions(options)
    }
  }, [data])

  return (
    <Select
      styles={SelectStyles}
      name="type"
      isMulti
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      isClearable={false}
      options={options}
      isLoading={loading}
      loadingMessage={()=> "Loading data"}
      placeholder={
        <StyledPeopleMenuOption>
          <TagIcon />
          <span>Label</span>
        </StyledPeopleMenuOption>
      }

      components={{
        Option: InputOption,
        MultiValueContainer: MultiValueContainer
      }}
    />
  )
}

TagSelect.propTypes = {}

export default TagSelect