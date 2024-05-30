// import React, { useRef, useEffect } from 'react';
// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import { useParams } from 'react-router-dom';

// export default function MeetRoom() {
//   const { roomId } = useParams();
//   const zegoElementRef = useRef(null);

//   useEffect(() => {
//     const myMeeting = async () => {
//       const appID = 1677478485;
//       const serverSecret = "763e15d1200f3fe81f0e52bff9ba41a5";
//       const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Himanshu");
//       const zp = ZegoUIKitPrebuilt.create(kitToken);

//       zp.joinRoom({
//         container: zegoElementRef.current,
//         scenario: {
//           mode: ZegoUIKitPrebuilt.VideoConference
//         }
//       });

//       // Add recording options here
//       const startRecording = async () => {
//         try {
//           await zp.startRecording();
//           console.log('Recording started successfully.');
//         } catch (error) {
//           console.error('Error starting recording:', error);
//         }
//       };

//       const stopRecording = async () => {
//         try {
//           await zp.stopRecording();
//           console.log('Recording stopped successfully.');
//         } catch (error) {
//           console.error('Error stopping recording:', error);
//         }
//       };

//       // Example: Start recording after 10 seconds (adjust as needed)
//       setTimeout(() => {
//         startRecording();
//       }, 10000);
//     };

//     myMeeting();
//   }, [roomId]);

//   return (
//     <div>
//       <div className='container'>
//         <div ref={zegoElementRef} />
//       </div>
//     </div>
//   );
// }
