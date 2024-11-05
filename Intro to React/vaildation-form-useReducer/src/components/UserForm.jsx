import { useReducer } from "react";

// Validation functions
const validators = {
  firstName: (value) =>
    value && value.length >= 2
      ? null
      : "First Name must be at least 2 characters",
  lastName: (value) =>
  (value
    ? null
    : "Last Name is required"),
  email: (value) =>
    /^\w+([\.-]?\w+)*@gmail*\.com$/.test(value)
      ? null
      : "Invalid email format",
};

export default function UserForm() {
  const initialState = {
    firstName: {
      value: "",
      error: null,
    },
    lastName: {
      value: "",
      error: null,
    },
    email: {
      value: "",
      error: null,
    },
  };

  function reducer(state, action) {
    switch (action.type) {
      case "handle input":
        const error = validators[action.field](action.payload);
        return {
          ...state,
          [action.field]: {
            ...state[action.field],
            value: action.payload,
            error: error,
          },
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e) {
    const { name, value } = e.target;
    dispatch({
      type: "handle input",
      field: name,
      payload: value,
    });
  }

  return (
    <div>
      <div>
        <label>First Name:</label>
        <input type="text" name="firstName" onChange={handleChange} />
        {state.firstName.error !== null && (
          <p className="error">{state.firstName.error}</p>
        )}
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" name="lastName" onChange={handleChange} />
        {state.lastName.error !== null && (
          <p className="error">{state.lastName.error}</p>
        )}
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email" onChange={handleChange} />
        {state.email.error !== null && (
          <p className="error">{state.email.error}</p>
        )}{" "}
      </div>
    </div>
  );
}
