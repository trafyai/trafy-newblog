import React from 'react'
import '@/styles/auth/user/UserSettings.css'
import UserDashboard from '@/components/auth/user/UserDashboard'
import UserAccountSecurity from '@/components/auth/user/UserAccountSecurity'
import UserProgress from '@/components/auth/user/UserProgress'

const Page = () => {
  return (
    <div className='user-settings'>
        <div className='user-settings-container'>
            <div className='user-settings-dashboard'>
                <UserDashboard profile="inherit" security="#e7e7e7"/>
                <UserAccountSecurity/>
            </div>
          
        </div>
    </div>
  )
}

export default Page