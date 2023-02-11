import React from "react";
import "../css/buttonStyles.css"

const CreateRoom = (props) => {
    const create = async (e) => {
        e.preventDefault();

        // const resp = await fetch("https://video-chat-app-4xbefckriq-uw.a.run.app/create");
        const resp = await fetch("http://localhost:8080/create");
        const { room_id } = await resp.json();

		props.history.push(`/room/${room_id}`)
    };

    return (
        <div style={{
            backgroundImage: `url('https://storage.cloud.google.com/audio_data_bucket_1/blue.jpeg')`,
            backgroundSize: 'contain',
            height: '100vh',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
                <div style={{
                    fontSize: '60px',
                    color: 'white',
                    textAlign: 'center',
                    padding: '100px 200px',
                    marginBottom: '30px'
                }}>
                    Welcome to our website!
                </div>
            <div style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)'
             }}>
              <button className="pulse" style={{
                backgroundColor: 'green',
                padding: '10px 20px',
                borderRadius: '30px',
                color: 'white',
                width: '150px',
                cursor: 'pointer',
                '&:hover': {
                    transform: 'translateY(-2px)'
                  }
              }} onClick={create}>Create Room</button>
            </div>
          </div>
    );
};

export default CreateRoom;