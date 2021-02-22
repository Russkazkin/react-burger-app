const input = ({elementType, elementConfig, value}) => {
  let inputElement = null;

  switch (elementType) {
    case ('input'):
      inputElement = <input {...elementConfig} value={value}
                            className="w-full px-4 py-2 bg-gray-100 outline-none border-transparent border-2 rounded-lg focus:border-brown-lightest focus:bg-white"/>;
      break;
    case ('textarea'):
      inputElement = <textarea {...elementConfig} value={value} />
      break;
    default:
      inputElement = '';
  }
  return (
    <div className="w-full p-2">
      <div className="relative">
        {inputElement}
      </div>
    </div>
  )
};

export default input;
