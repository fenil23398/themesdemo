import React from 'react';
import { NavLink } from 'react-router-dom';

// export default className index extends Component {
//     render() {
//         return (
//             <div>

//             </div>
//         )
//     }
// }

function NotFount() {
    return (
        <div className="text-center">
            <div className="error mx-auto" data-text="404">404</div>
            <p className="lead text-gray-800 mb-5">Page Not Found</p>
            <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
            <NavLink to="/home">&larr; Back to Dashboard</NavLink>
        </div>
    )
}

export default NotFount;