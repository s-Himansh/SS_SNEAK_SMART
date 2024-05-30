import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

export default function MeetPage() {
   const { meetId } = useParams();
   const meetRef = useRef(null);

   useEffect(() => {
      const myMeeting = async () => {
         const appID = 270833281;
         const serverSecret = 'd3c59d6c9406ea94888b1010821829f6';
         const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, meetId, Date.now().toString(), "xyz");
         const zp = ZegoUIKitPrebuilt.create(kitToken);
         zp.joinRoom({
            container: meetRef.current,
            scenario: {
               mode: ZegoUIKitPrebuilt.VideoConference,
            }
         });
      }

      myMeeting();
   }, [meetId]);

   return (
      <div className='container-fluid' style={{backgroundColor : 'black'}}>
         <div className='row justify-content-center align-items-center vh-100'>
            <div className='col-md-8'>
               <div ref={meetRef} className='embed-responsive embed-responsive-16by9'>
               </div>
            </div>
         </div>
      </div>
   );
}
