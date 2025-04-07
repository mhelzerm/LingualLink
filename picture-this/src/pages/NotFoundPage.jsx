import { Link } from "react-router-dom"

//This page loads on a 404 page not found error

const NotFoundPage = () => {
    return (
        //this is placeholder, someone should make this prettier
        <div>
            <h1>404 Error!</h1>
            <h2>You shouldn't be here!</h2>
            <Link to="/">Take me home!</Link>
        </div>
    );
};

export default NotFoundPage;