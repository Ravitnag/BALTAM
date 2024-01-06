
const selectStyle = {
    menu:(provided) => ({ ...provided, color: '#000', fontSize: '20px' }),
    control: (provided) => ({ ...provided, color: '#000', fontSize: '28px' }),
    indicatorSeparator: (provided) => ({ ...provided, display: 'none' }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ? '#9BBEC8' : 'white',
        ':hover': {
          backgroundColor: '#DDF2FD', // Change the background color on hover
        },
      }),
}



export default selectStyle