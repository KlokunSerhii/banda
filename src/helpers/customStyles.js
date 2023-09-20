export const customStyles = {
  control: provided => ({
    ...provided,
    backgroundColor: 'trasparent',
    height: '52px',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
  }),
  option: (provided, { isFocused, isSelected }) => ({
    ...provided,

    backgroundColor: isSelected
      ? 'rgba(28, 28, 28, 1)'
      : isFocused
      ? 'rgba(28, 28, 28, 1)'
      : 'rgba(28, 28, 28, 1)',
    color: isSelected ? `var(--accent-bright-color)` : `var(--main-text-color)`,
    padding: '14px',
  }),
  menu: provided => ({
    ...provided,
    backgroundColor: 'rgba(28, 28, 28, 1)',
  }),
  singleValue: provided => ({
    ...provided,
    color: `var(--main-text-color)`,
  }),
  indicatorSeparator: provided => ({
    ...provided,
    backgroundColor: 'transparent',
  }),
  dropdownIndicator: provided => ({
    ...provided,
    color: `var(--main-text-color)`,
  }),
  container: provided => ({
    ...provided,
    border: '1px solid var(--transparent-medium-2)',
    borderRadius: '12px',
    outline: 'none',
  }),
  menuList: base => ({
    ...base,
    borderRadius: '12px',

    '::-webkit-scrollbar': {
      display: 'none',
    },
    overflowY: 'scroll',
  }),
};
