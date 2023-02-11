import React, { useState } from "react";

const GenerateText = (props) => {
    const [transcriptString, setTranscriptString] = useState("");
    const [loading, setLoading] = useState(false);
  
    const generateText = async (e) => {
      e.preventDefault();
      setLoading(true);
  
      try {
        const resp = await fetch("http://localhost:8080/generateResult");
        // const resp = await fetch("https://video-chat-app-4xbefckriq-uw.a.run.app/generateResult");
        if (!resp.ok) {
          throw new Error("Response not successful");
        }
        const json = await resp.json();
        setTranscriptString(json.Result);
        setLoading(false);
        console.log("Here is the Summary of the meeting : ",transcriptString)
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
  
    return (
        <div style={{
          backgroundImage: `url('https://storage.cloud.google.com/audio_data_bucket_1/blue.jpeg')`,
          backgroundSize: 'cover',
          height: '100vh',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          {loading ? (
            <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
            }}>
            <div className="loader">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            </div>
            ) : (
            <>
              <p style={{fontSize: '20px', color: 'black', padding: '100px 200px',}}>
                {"Here is the Summary of the meeting : " + transcriptString}
              </p>
              <button 
                onClick={generateText} 
                style={{
                  backgroundColor: 'green',
                  color: 'white',
                  padding: '10px 20px',
                  borderRadius: '20px',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '2px 2px 10px #333',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Generate Transcript
              </button>
            </>
          )}
        </div>
      );  
  };
  

export default GenerateText;
