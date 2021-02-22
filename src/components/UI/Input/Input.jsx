const input = (props) => (
  <div className="w-full p-2">
    <div className="relative">
      <input {...props}
             className="w-full px-4 py-2 bg-gray-100 outline-none border-transparent border-2 rounded-lg focus:border-brown-lightest focus:bg-white"/>
    </div>
  </div>
);

export default input;
