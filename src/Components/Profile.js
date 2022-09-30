import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice'
import './profile.css'
const Profile = () => {
  const [userName, setUserName] = useState('')
  const [firstName, setfirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [city, setCity] = useState('')
  const [code, setCode] = useState('')
  const [about, setAbout] = useState('')
  const [country, setCoutry] = useState('')

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const handleLogout = (e) => {
    e.preventDefault()

    dispatch(logout())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div class='card-body'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h6 class='heading-small text-muted mb-4'>User information</h6>
        <div class='pl-lg-4'>
          <div class='row'>
            <div class='col-lg-6'>
              <div class='form-group focused'>
                <label class='form-control-label' for='input-username'>
                  Username
                </label>
                <input
                  type='text'
                  class='form-control form-control-alternative'
                  placeholder='Username'
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>
            <div class='col-lg-6'>
              <div class='form-group'>
                <label class='form-control-label' for='input-email'>
                  Email address
                </label>
                <input
                  type='email'
                  class='form-control form-control-alternative'
                  value={user.email}
                />
              </div>
            </div>
          </div>
          <div class='row'>
            <div class='col-lg-6'>
              <div class='form-group focused'>
                <label class='form-control-label' for='input-first-name'>
                  First name
                </label>
                <input
                  type='text'
                  class='form-control form-control-alternative'
                  placeholder='First name'
                  value={firstName}
                  onChange={(e) => setfirstName(e.target.value)}
                />
              </div>
            </div>
            <div class='col-lg-6'>
              <div class='form-group focused'>
                <label class='form-control-label' for='input-last-name'>
                  Last name
                </label>
                <input
                  type='text'
                  class='form-control form-control-alternative'
                  placeholder='Last name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <hr class="my-4"> */}
        {/* <!-- Address --> */}
        <h6 class='heading-small text-muted mb-4'>Contact information</h6>
        <div class='pl-lg-4'>
          <div class='row'>
            <div class='col-md-12'>
              <div class='form-group focused'>
                <label class='form-control-label' for='input-address'>
                  Address
                </label>
                <input
                  class='form-control form-control-alternative'
                  placeholder='Home Address'
                  type='text'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div class='row'>
            <div class='col-lg-4'>
              <div class='form-group focused'>
                <label class='form-control-label' for='input-city'>
                  City
                </label>
                <input
                  type='text'
                  class='form-control form-control-alternative'
                  placeholder='City'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </div>
            <div class='col-lg-4'>
              <div class='form-group focused'>
                <label class='form-control-label' for='input-country'>
                  Country
                </label>
                <input
                  type='text'
                  class='form-control form-control-alternative'
                  placeholder='Country'
                  value={country}
                  onChange={(e) => setCoutry(e.target.value)}
                />
              </div>
            </div>
            <div class='col-lg-4'>
              <div class='form-group'>
                <label class='form-control-label' for='input-country'>
                  Postal code
                </label>
                <input
                  type='number'
                  class='form-control form-control-alternative'
                  placeholder='Postal code'
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <hr class="my-4"> */}
        {/* <!-- Description --> */}
        <h6 class='heading-small text-muted mb-4'>About me</h6>
        <div class='pl-lg-4'>
          <div class='form-group focused'>
            <label>About Me</label>
            <textarea
              rows='4'
              class='form-control form-control-alternative'
              placeholder='A few words about you ...'
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className='button'>
          <button className='btn1' onClick={handleLogout}>
            Log out
          </button>
          <button type='submit' className='btn2'>
            Update profile
          </button>
        </div>
      </form>
    </div>
    // </div>
  )
}

export default Profile
