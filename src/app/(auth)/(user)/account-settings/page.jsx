import React from 'react'
import '@/styles/auth/user/UserSettings.css'
import UserDashboard from '@/components/auth/user/UserDashboard'
import UserAccountSetting from '@/components/auth/user/UserAccountSetting'
import UserProgress from '@/components/auth/user/UserProgress'
const Page = () => {
  return (
    <div className='user-settings'>
        <div className='user-settings-container'>
            <div className='user-settings-dashboard'>
                <UserDashboard profile="#e7e7e7" security="inherit"/>
                <UserAccountSetting/>
            </div>
            
            
        </div>
    </div>
  )
}

export default Page