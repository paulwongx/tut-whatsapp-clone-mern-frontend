import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import React, { useEffect, useRef, useState } from 'react';
import './Chat.css';
import axios from './axios';

const Chat = ({messages}) => {
    const [input, setInput] = useState('');
    const bodyRef = useRef(null);

    useEffect(()=>{
        bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    },[messages]);

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            message: input,
            name: "Paul",
            timestamp: new Date().toLocaleTimeString(),
            received: true
        });
        setInput('');
    }

	return (
		<div className='chat'>
			<div className='chat__header'>
				<Avatar />
				<div className='chat__headerInfo'>
					<h3>Room name</h3>
					<p>Last seen at...</p>
				</div>

				<div className='chat__headerRight'>
					<IconButton>
						<SearchOutlined />
					</IconButton>
					<IconButton>
						<AttachFile />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
			</div>
			<div ref={bodyRef} className='chat__body'>
                {messages.map(message => (
                    <p className={`chat__message ${message.received && 'chat__receiver'}`}>
                        <span className='chat__name'>{message.name}</span>
                        {message.message}
                        <span className='chat__timestamp'>
                            {message.timestamp}
                        </span>
                    </p>
                ))}
			</div>
			<div className='chat__footer'>
				<InsertEmoticonIcon />
				<form>
					<input
						type='text'
						value={input}
						onChange={e => setInput(e.target.value)}
						placeholder='Type a message'
					/>
					<button onClick={sendMessage} type='submit'>
						Send a message
					</button>
				</form>
                <MicIcon />
			</div>
		</div>
	);
};

export default Chat;
