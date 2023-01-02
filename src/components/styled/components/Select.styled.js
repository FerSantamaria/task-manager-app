import styled from 'styled-components'

export const SelectStyles = {
  container: (styles) => ({
    ...styles,
    border: 0,
  }),
  control: (styles) => ({
    ...styles,
    border: 0,
    boxShadow: "none",
    backgroundColor: "#94979A19",
    padding: 0,
    width: "175px"
  }),
  dropdownIndicator: (styles) => ({
    ...styles,
    display: "none",
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
  placeholder: (styles) => ({
    ...styles,
    color: "white",
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "24px",
    letterSpacing: "0.75px",
    display: "flex",
    justifyContent: "center",
  }),
  menu: (styles) => ({
    ...styles,
    backgroundColor: "#393D41",
    padding: 0,
    border: "solid 1px #94979A",
    borderRadius: "8px",
    width: "fit-content",
    minWidth: "175px",
  }),
  menuList: (styles) => ({
    ...styles,
    padding: 0,
    width: "max-content",
    minWidth: "100%",
  }),
  groupHeading: (styles) => ({
    ...styles,
    color: "#94979A",
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "32px",
    letterSpacing: "0.75px",
    paddingTop: "0",
    textTransform: "none",
  }),
  option: (styles, state) => ({
    ...styles,
    color: "white",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "24px",
    letterSpacing: "0.75px",
    backgroundColor: state.isFocused ? "#42464a" : "transparent",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#42464a",
    },
  }),
  singleValue: (styles) => ({
    ...styles,
    color: "white",
    fontWeight: 400,
    fontSize: "15px",
    lineHeight: "24px",
    letterSpacing: "0.75px",
  }),
  valueContainer: (styles) => ({
    ...styles,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "scroll",
    maxWidth: "100%",
    flexWrap: "no-wrap",
  }),
  multiValueRemove: (styles) => ({
    ...styles,
    display: "none",
  }),
  multiValue: (styles) => ({
    ...styles,
    backgroundColor: "transparent"
  }),
  loadingMessage: (styles) => ({
    ...styles,
    width: "100%",
  })
}

export const StyledPeopleMenuOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const StyledTageMenuCheckbox = styled.input`
  width: 24px;
  height: 24px;
  accent-color: ${({theme}) => theme.colors.neutral.four};
`