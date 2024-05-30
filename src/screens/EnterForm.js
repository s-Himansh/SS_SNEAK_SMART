import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../component/Loading';


const EnterForm = () => {


    let navigate = useNavigate();

    const [loading, setLoadingStatus] = useState(false);
    const handleBack = () => {
        setLoadingStatus(true);

        setTimeout(() => {
            setLoadingStatus(false);
            navigate('/home');
        }, 2000);
    };

    const [roomCode, setRoomCode] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate(`/room/${roomCode}`);
    }

    return (
        <div className='container-fluid'>
            {
                !loading ?

                    <div className='row'>
                        {/* Right side (Enter Form) */}
                        <div className='col-lg-12'>
                            <div className="container d-flex flex-column align-items-center justify-content-center vh-100 bg-dark">
                                <button type="button" className="btn btn-outline-dark btn-sm position-absolute top-0 start-0 mt-2 ms-2" onClick={handleBack}>
                                    ← Back
                                </button>
                                <div className="mx-auto w-70">
                                    <hr className='bg-white' />
                                    <form onSubmit={handleSubmit}>

                                        <h1 className="text-center mb-4 text-white">Enter Room Code</h1>

                                        <div className="input-group mb-3">
                                            <input type="text" className="form-control border-4" placeholder="Room Enter Code" value={roomCode} onChange={(e) => setRoomCode(e.target.value)} aria-label="Recipient's username" aria-describedby="basic-addon2" name='roomCode' />
                                        </div>

                                        <div className="d-grid gap-2">
                                            <button type="submit" className="btn btn-primary mb-3">Join Room</button>
                                            {/* Add any additional buttons or links */}
                                        </div>

                                    </form>
                                    <hr className='bg-white mt-5' />
                                </div>
                            </div>
                        </div>

                    </div>
                    : <Loading />
            }
        </div>
    );
};

export default EnterForm;
