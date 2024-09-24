'use client';
import React, { useState, useEffect } from 'react';
import { verifyPasswordResetCode, confirmPasswordReset } from 'firebase/auth';
import { auth } from '@firebase';
import { useRouter } from 'next/navigation';
import { UserAuth } from '@context/AuthContext';  // Import the AuthContext
import '@styles/common/auth/ResetPassword.css';

const ResetPassword = () => {
    const { user } = UserAuth();  // Access the user from AuthContext
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();
    const [oobCode, setOobCode] = useState('');

    useEffect(() => {
        // Redirect if the user is logged in
        if (user) {
            router.push('/');
            return;
        }

        const query = new URLSearchParams(window.location.search);
        const code = query.get('oobCode');

        if (code) {
            setOobCode(code);
        } else {
            setError('Invalid or missing reset code.');
            // Redirect to login if the reset code is invalid or missing
            setTimeout(() => {
                router.push('/login');
            }, 3000);
        }
    }, [user, router]);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if (newPassword !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            await verifyPasswordResetCode(auth, oobCode);
            await confirmPasswordReset(auth, oobCode, newPassword);
            setMessage('Password has been reset successfully.');
            setTimeout(() => {
                router.push('/login');
            }, 3000);
        } catch (error) {
            setError('Failed to reset password. Please try again.');
        }
    };

    return (
        <div className="reset-password-p">
            <div className="reset-password-container">
                <form className="form-reset-password" onSubmit={handleResetPassword}>
                    <div className="reset-password-heading"><h1>Set a New Password</h1></div>
                    <div className="Password-p">
                        <input
                            type="password"
                            placeholder="New Password"
                            required
                            autoComplete="off"
                            name="newPassword"
                            className="password-holder-p"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <div className="Password-p">
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            required
                            autoComplete="off"
                            name="confirmPassword"
                            className="password-holder-p"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div className="reset-button">
                        <button className="reset-btn" type="submit">Reset Password</button>
                    </div>
                    {message && <div className="reset-message" >{message}</div>}
                    {error && <div className="error-message">{error}</div>}
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;
