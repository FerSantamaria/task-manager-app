import { useEffect, useState } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import Avatar from './Avatar'
import { GET_USERS } from '../graphQL/queries';
import { useQuery } from '@apollo/client';
import { SelectStyles, StyledPeopleMenuOption  } from './styled/components/Select.styled'
import { ReactComponent as PersonIcon } from './../assets/icons/person.svg'

const PeopleSelect = () => {
  const [options, setOptions] = useState([])

  const { loading, data } = useQuery(GET_USERS)

  useEffect(() => {
    if (data?.users) {
      let fetchedData = data.users.map(item => ({
        value: item.name,
        label: item.fullName,
        image: item.avatar
      }))

      let options = [{
        label: "Assign To",
        options: fetchedData
      }]

      setOptions(options)
    }
  }, [data])

  return (
    <Select
      styles={SelectStyles}
      name="type"
      options={options}
      isLoading={loading}
      loadingMessage={()=> "Loading data"}
      formatOptionLabel={option => (
        <StyledPeopleMenuOption>
          <Avatar url={option.image} />
          <span>{option.label}</span>
        </StyledPeopleMenuOption>
      )}
      placeholder={
        <StyledPeopleMenuOption>
          <PersonIcon />
          <span>Assignee</span>
        </StyledPeopleMenuOption>
      }
    />
  )
}

PeopleSelect.propTypes = {}

export default PeopleSelect