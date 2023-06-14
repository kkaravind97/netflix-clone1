import React from 'react';
import './ProfileScreen.css';
import Navbar from '../Navbar/Navbar';
import { useSelector } from 'react-redux';
import {selectUser} from '../../features/userSlice';
import { auth } from "../../firebase";

const ProfileScreen = () => {

  const user=useSelector(selectUser)
  return (
    <div className='profile-screen'>
      <Navbar/>
      <div className="profile-body">
        <h1>Edit Profile</h1>
        <div className="profile-info">
            <img src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar" />
            <div className="profile-details">
              <h2>{user.email}</h2>
              <div className="profile-plans">
                <button onClick={()=>auth.signOut()} className='profile-signout'>Sign Out</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
