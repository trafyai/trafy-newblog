// 'use client'
// import React, { useState, useEffect } from 'react';
// import { auth } from '@/firebase';
// import { reauthenticateWithCredential, updatePassword, EmailAuthProvider } from 'firebase/auth';
// import '@styles/common/auth/user/UserAccountSetting.css'

// const UserAccountSecurity = () => {
//     const [email, setEmail] = useState('');
//     const [currentPassword, setCurrentPassword] = useState('');
//     const [newPassword, setNewPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');

//     useEffect(() => {
//         if (auth.currentUser) {
//             setEmail(auth.currentUser.email);
//         }
//     }, []);

//     const handleChangeCredentials = async (e) => {
//         e.preventDefault();
//         setError('');
//         setSuccess('');

//         if (newPassword !== confirmPassword) {
//             setError('New passwords do not match');
//             return;
//         }

//         if (!auth.currentUser) {
//             setError('No user is currently logged in');
//             return;
//         }

//         try {
//             const user = auth.currentUser;
//             const credential = EmailAuthProvider.credential(user.email, currentPassword);

//             await reauthenticateWithCredential(user, credential);

//             if (newPassword) {
//                 await updatePassword(user, newPassword);
//             }

//             setSuccess('Credentials updated successfully');
//             // Clear the password fields
//             setCurrentPassword('');
//             setNewPassword('');
//             setConfirmPassword('');
//         } catch (error) {
//             if (error.code === 'auth/wrong-password') {
//                 setError('The current password is incorrect');
//             } else if (error.code === 'auth/weak-password') {
//                 setError('The new password is too weak');
//             } else if (error.code === 'auth/invalid-credential') {
//                 setError('Invalid credentials provided');
//             } else {
//                 setError(error.message);
//             }
//         }
//     };

//     return (
//         <div className="security-contents">
//                 <form className="security-form" onSubmit={handleChangeCredentials}>
//                     <div className="Pemail">
//                         <label htmlFor="email">Email:</label>
//                         <input
//                             type="email"
//                             placeholder="Enter new email"
//                             autoComplete="off"
//                             name="email"
//                             className="email"
//                             value={email}
//                             readOnly
//                         />
//                     </div>
//                     <div className="Ppassword">
//                         <label htmlFor="current-password">Current Password:</label>
//                         <input
//                             type="password"
//                             placeholder="Enter current password"
//                             autoComplete="off"
//                             name="current-password"
//                             className="password"
//                             value={currentPassword}
//                             onChange={(e) => setCurrentPassword(e.target.value)}
//                         />
//                         <label htmlFor="new-password">New Password:</label>
//                         <input
//                             type="password"
//                             placeholder="Enter new password"
//                             autoComplete="off"
//                             name="new-password"
//                             className="password"
//                             value={newPassword}
//                             onChange={(e) => setNewPassword(e.target.value)}
//                         />
//                         <label htmlFor="confirm-password">Re-type New Password:</label>
//                         <input
//                             type="password"
//                             placeholder="Re-type new password"
//                             autoComplete="off"
//                             name="confirm-password"
//                             className="password"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                         />
//                     </div>
                    
//                     <div className="save-button">
//                         <button className="change-password" type="submit">Update Credentials</button>
//                     </div>
//                     {error && <div className="error-message" style={{fontSize:"14px",fontFamily:"Inter",color:"red"}}>{error}</div>}
//                     {success && <div className="success-message" style={{fontSize:"14px",fontFamily:"Inter",color:"red"}}>{success}</div>}
//                 </form>
//         </div>
//     );
// };

// export default UserAccountSecurity;



// 'use client';
// import React, { useState, useEffect } from 'react';
// import { sendPasswordResetEmail, onAuthStateChanged } from 'firebase/auth';
// import { auth } from '@/firebase';
// import '@styles/common/auth/user/UserAccountSetting.css';

// const UserAccountSecurity = () => {
//     const [email, setEmail] = useState('');
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 console.log('User logged in:', user);  // Debugging line
//                 console.log('User email:', user.email);  // Debugging line
//                 setEmail(user.email);
//             } else {
//                 console.log('No user is signed in.');  // Debugging line
//             }
//             setLoading(false);
//         });

//         return () => unsubscribe();
//     }, []);

//     const handlePasswordReset = async (e) => {
//         e.preventDefault();
//         try {
//             await sendPasswordResetEmail(auth, email);
//             alert('Password reset email sent!');
//         } catch (error) {
//             console.error('Error sending password reset email:', error);
//             alert('Failed to send password reset email. Please try again.');
//         }
//     };

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="security-contents">
            
//             <form className="security-form" onSubmit={handlePasswordReset}>
//                 <h2>Reset Password</h2>
//                 <p>A verification email will be sent to <strong>{email}</strong>. The update will be completed once you follow the instructions in that email. If you are unable to access your email, please contact support for help.</p>
//                 <div className="save-button">
//                     <button className="change-password" type="submit">Reset Password</button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default UserAccountSecurity;



'use client'
import React, { useState, useEffect } from 'react';
import { sendPasswordResetEmail, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';
import '@/styles/auth/user/UserAccountSetting.css';

const UserAccountSecurity = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setEmail(user.email);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handlePasswordReset = async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            setPopupMessage('Password reset email sent!');
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 5000); // Hide the popup after 3 seconds
        } catch (error) {
            console.error('Error sending password reset email:', error);
            setPopupMessage('Failed to send password reset email. Please try again.');
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 5000); // Hide the popup after 3 seconds
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="security-contents">
            {showPopup && (
                <div className="popup">
                    <span>{popupMessage}</span>
                    <button className="close-popup" onClick={() => setShowPopup(false)}>&#x1F5D9;</button>
                </div>
            )}
            <form className="security-form" onSubmit={handlePasswordReset}>
                <h2>Reset Password</h2>
                <p>A verification email will be sent to <strong>{email}</strong>. The update will be completed once you follow the instructions in that email. If you are unable to access your email, please contact support for help.</p>
                <div className="save-button">
                    <button className="change-password" type="submit">Reset Password</button>
                </div>
            </form>
        </div>
    );
};

export default UserAccountSecurity;
