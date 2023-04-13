import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getMessage } from '../redux/greetingReducer';
import '../Greeting.css';

const Greeting = () => {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.greeting);

  const fetchMessage = useCallback(async () => {
    const response = await axios.get('http://127.0.0.1:3000/api/messages');
    dispatch(getMessage(response.data.greeting));
  }, [dispatch]);

  useEffect(() => {
    fetchMessage();
  }, [fetchMessage]);

  return (
    <div>
      <h1>{message}</h1>
      <button type="button" onClick={() => fetchMessage()}>
        Generate greeting message
      </button>
    </div>
  );
};

export default Greeting;
