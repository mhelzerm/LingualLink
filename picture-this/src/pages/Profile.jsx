import React, { useEffect, useState } from 'react';
import { useUser } from '../components/UserContext';  // Import the useUser hook
import axios from "axios";
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../css/common.css';

const ProfilePage = () => {
    const [activeTab, setActiveTab] = useState('profile');
    const [isEditing, setIsEditing] = useState(false);
    const { setUser, user, logout } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("token");
            if (!token) return;
            try {
                const res = await axios.get("/api/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(res.data);
            } catch (err) {
                console.error("Not authenticated");
            }
        };

        fetchProfile();
    }, []);

    if (!user) return (<div>Loading...</div>);

    // Dummy user data
    const userData = {
        name: user.fullname,
        email: user.email,
        bio: 'I am learning ASL to communicate better with my deaf friends.'
    };

    // Dummy game history
    const gameHistory = [
        { id: 1, date: '2023-04-05', game: 'ASL Basics', score: 85 },
        { id: 2, date: '2023-04-03', game: 'Sign Challenge', score: 92 },
        { id: 3, date: '2023-04-01', game: 'Finger Spelling', score: 78 }
    ];

    const handleSave = () => {
        setIsEditing(false);
        alert('Profile updated successfully!');
    };

    return (
        <div className="profile-container">
            <div className="profile-sidebar">
                <div className="user-info">
                    <div className="avatar">
                        <span>{user.fullname.split(/\s/).reduce((response,word)=> response+=word.slice(0,1),'')}</span>
                    </div>
                    <h2>{userData.name}</h2>
                    <p>{userData.email}</p>
                </div>

                <nav className="profile-nav">
                    <button
                        className={activeTab === 'profile' ? 'active' : ''}
                        onClick={() => setActiveTab('profile')}
                    >
                        My Profile
                    </button>
                    <button
                        className={activeTab === 'history' ? 'active' : ''}
                        onClick={() => setActiveTab('history')}
                    >
                        Game History
                    </button>
                    <button
                        className={activeTab === 'settings' ? 'active' : ''}
                        onClick={() => setActiveTab('settings')}
                    >
                        Settings
                    </button>
                </nav>

                <button className="logout-button"onClick={() => {
                    localStorage.removeItem("token");
                    setUser(null);           // clear the user globally
                    navigate("/")
                }}>Sign Out</button>
            </div>

            <div className="profile-content">
                {activeTab === 'profile' && (
                    <div className="profile-section">
                        <div className="section-header">
                            <h3>My Profile</h3>
                            <button
                                className="edit-button"
                                onClick={() => isEditing ? handleSave() : setIsEditing(true)}
                            >
                                {isEditing ? 'Save' : 'Edit'}
                            </button>
                        </div>

                        <div className="profile-details">
                            <div className="detail-item">
                                <label>Name</label>
                                {isEditing ? (
                                    <input type="text" defaultValue={userData.name} />
                                ) : (
                                    <p>{userData.name}</p>
                                )}
                            </div>

                            <div className="detail-item">
                                <label>Email</label>
                                <p>{userData.email}</p>
                            </div>

                            <div className="detail-item">
                                <label>Bio</label>
                                {isEditing ? (
                                    <textarea defaultValue={userData.bio}></textarea>
                                ) : (
                                    <p>{userData.bio}</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'history' && (
                    <div className="profile-section">
                        <div className="section-header">
                            <h3>Game History</h3>
                        </div>

                        <table className="history-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Game</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {gameHistory.map(game => (
                                    <tr key={game.id}>
                                        <td>{game.date}</td>
                                        <td>{game.game}</td>
                                        <td>{game.score}%</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {activeTab === 'settings' && (
                    <div className="profile-section">
                        <div className="section-header">
                            <h3>Settings</h3>
                        </div>

                        <div className="settings-list">
                            <div className="setting-item">
                                <span>Enable notifications</span>
                                <label className="toggle">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                            </div>

                            <div className="setting-item">
                                <span>Sound effects</span>
                                <label className="toggle">
                                    <input type="checkbox" defaultChecked />
                                    <span className="slider"></span>
                                </label>
                            </div>

                            <div className="setting-item">
                                <span>High contrast mode</span>
                                <label className="toggle">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                            </div>
                        </div>

                        <button className="change-password-button">
                            Change Password
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProfilePage;