import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div className="flex justify-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-2">
          <form className="bg-white shadow-sm rounded px-8 pt-6 pb-8" onSubmit={props.formSubmissionHandler}>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
              type='text'
              name='names'
              placeholder='Pair Names' />
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline mb-2"
              type='text'
              name='location'
              placeholder='Location' />
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-center leading-tight focus:outline-none focus:shadow-outline"
              name='issue'
              placeholder='Describe your issue.' />
            <div className="flex justify-center">
              <button className="bg-yellow-500 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-full" type='submit'>{props.buttonText}</button>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;