const input = ({elementType, elementConfig, value, changed, name, valid, touched}) => {
  let inputElement = null;

  switch (elementType) {
    case ('input'):
      inputElement = <input {...elementConfig} value={value} onChange={changed} name={name}
                            className={`${touched ? (valid ? 'border-green-700 focus:border-green-700' : 'border-red-700 focus:border-red-700') : ''} w-full px-4 py-2 bg-gray-100 outline-none border-transparent border-2 rounded-lg focus:bg-white focus:ring-0`} />;
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
