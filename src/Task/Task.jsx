
function Task({ title, done }) {  
    // وهون بستدعي يلي مررتهم بجزئيةأو بتاغ ال Component
    return (
    <div style={{ 
        color: done ? 'green' : 'black',
        textDecoration: done ? 'line-through' : 'none'
    }}>
        {title}
    </div>
    );
}

export default Task;
