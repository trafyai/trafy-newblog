'use client';
import React from 'react';
import '@/styles/auth/user/UserDashboard.css';
import Link from 'next/link';
import Image from 'next/image';
import notification from '@/public/Images/dashboard/notification.svg';
import security from '@/public/Images/dashboard/security.svg';
import account from '@/public/Images/dashboard/account.svg';
import logout from '@/public/Images/dashboard/logout.svg';
import { UserAuth } from "@/context/AuthContext";



export default function UserDashboard(props) {
    const { user, logOut, loading } = UserAuth();

    const handleLogOut = async () => {
        try {
          await logOut();
          router.push("/");
          router.reload();
        } catch (error) {
          console.log(error);
        }
      };

    return (
       
            <div className="user-dashboard">
                <div className="user-dashboard-contents">
                    <div style={{display:"flex",flexDirection:"column",gap:"0.5rem"}}>
                        <Link className="profile" href="/account-settings" style={{backgroundColor:props.profile}}>
                            <Image src={account} height={21} alt="Profile" />
                            <p>Profile</p>
                        </Link>
                        <Link className="security" href="/account-security" style={{backgroundColor:props.security}}>
                            <Image src={security} height={21} alt="Security" />
                            <p>Security</p>
                        </Link>
                        {/* <Link className="notification" href="/account-notification">
                            <Image src={notification} height={21} alt="Notification" />
                            <p>Notification</p>
                        </Link> */}
                    </div>
                    <Link className="log-out" onClick={handleLogOut}>
                        <Image src={logout} height={21} alt="Log out" />
                        <p>Log out</p>
                    </Link>
                </div>
            </div>
        
    );
}
