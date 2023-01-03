import { useEffect, useState } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'
import { useField } from 'formik'
import Avatar from './Avatar'
import { GET_USERS } from '../graphQL/queries'
import { useQuery } from '@apollo/client'
import { SelectStyles, StyledPeopleMenuOption  } from './styled/components/Select.styled'
import { ReactComponent as PersonIcon } from './../assets/icons/person.svg'

const PeopleSelect = ({ ...props }) => {
  const [options, setOptions] = useState([])
  const [selectedValue, setSelectedValue] = useState()
  const { loading, data } = useQuery(GET_USERS)
  const [ field, meta, helpers ] = useField(props)
  const hasError = meta.touched && (meta.error !== undefined)

  useEffect(() => {
    if (data?.users) {
      let fetchedData = data.users.map(item => ({
        value: item.id,
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

      {...field}
      {...props}

      value={selectedValue}
      onChange={(newValue) => {
        setSelectedValue(newValue)
        helpers.setValue(newValue.value)
      }}

      className={hasError ? "input-error" : undefined}
    />
  )
}

PeopleSelect.propTypes = {
  name: PropTypes.string.isRequired
}

export default PeopleSelect