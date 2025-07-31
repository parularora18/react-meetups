import { Link } from 'react-router-dom';
import classes from'./MainNavigation.module.css';
function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                 Meetups
            </div>
            <nav className={classes.header}>
                <ul
                
                >
                    <li>
                        <Link to ='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to ='/new-meetup'>Add New Meetup</Link>
                    </li>
                    <li>
                        <Link to ='/favorite'>My Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;