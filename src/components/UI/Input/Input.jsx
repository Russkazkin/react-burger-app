const input = ({elementType, elementConfig, value, changed}) => {
  let inputElement = null;

  switch (elementType) {
    case ('input'):
      inputElement = <input {...elementConfig} value={value} onChange={changed}
                            className="w-full px-4 py-2 bg-gray-100 outline-none border-transparent border-2 rounded-lg focus:border-brown-lightest focus:bg-white"/>;
      break;
    case ('textarea'):
      inputElement = <textarea {...elementConfig} value={value} onChange={changed} />
      break;
    case ('select'):
      inputElement = (<label className="block ">
        <label htmlFor="email" className="text-sm leading-7 text-gray-600">{elementConfig.label}</label>
        <select value={value} onChange={changed}
          className="block w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:border-gray-500 focus:bg-white focus:ring-0">
          {elementConfig.options.map(option => <option key={option.value} value={option.value}>{option.displayValue}</option>)}
        </select>
      </label>)
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
