import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = props => {
    return (
        <div className='dashboard'>
            <h2 className='welcome'>Welcome to Hogwarts Witchcraft and wizardry</h2>
            <Link to='/find-my-class'>
                <button className='btn'>Find my Class!</button>
            </Link>

        </div>
    )
}
export default Dashboard;