import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserPlus } from 'react-icons/fa'; // Importiere ein Icon für den Link

const Register = ({ buttonText = 'Register Now' }) => {
  return (
    <div>
      <Link
        to="/register"
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700"
      >
        <FaUserPlus className="inline-block mr-2" />
        {buttonText}
      </Link>
    </div>
  );
}

export default Register;
