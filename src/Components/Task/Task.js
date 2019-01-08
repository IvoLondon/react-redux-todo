import React, { PropTypes } from 'react';

const Task = (props) => {
    return (
        <p>{props.message}</p>
    );
};

Task.displayName = 'Task';

Task.propTypes = {
    //props.message: PropTypes.string,
};

export default Task;
