import React, { useState } from 'react';

const MovieForm = () => {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    
    const handleTitle = (e) => {
        setTitle(e.target.value);
        if (e.target.value.length < 1) {
            setTitleError("Title is required!");
        } else if (e.target.value.length < 3) {
            setTitleError("Title must be 3 characters or longer!");
        } else {
            setTitleError(""); // Clear the error when valid input is entered
        }
    };
    
    // This functionality can be repeated for each input needing validation

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div>
                <label>Title: </label>
                <input 
                    type="text" 
                    value={title} // Make the input controlled by binding to state
                    onChange={handleTitle} 
                />
                {titleError && <p>{titleError}</p>}
            </div>
            <input 
                type="submit" 
                value="Create Movie" 
                disabled={titleError.length > 0} // Disable the submit button if there is an error
            />
        </form>
    );
};

export default MovieForm;
