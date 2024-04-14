import React, { useState, useEffect, useCallback, useReducer } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Loading from './Loading'; // Import the Loading component
import Card from './Card'; // Import the Card component

const initialState = {
  randomBreed: null,
  error: null,
  loading: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_START':
      return {
        ...state,
        loading: true
      };
    case 'FETCH_SUCCESS':
      return {
        ...state,
        randomBreed: action.payload,
        loading: false
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};

const StyledDiv = styled.div`
  margin-top: 20px;
  padding: 20px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CatApiDataFetcher = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = useCallback(async () => {
    dispatch({ type: 'FETCH_START' });
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/breeds');
      const breeds = response.data;
      const randomIndex = Math.floor(Math.random() * breeds.length);
      const randomBreedData = breeds[randomIndex];
      dispatch({ type: 'FETCH_SUCCESS', payload: randomBreedData });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error.message });
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return (
    <StyledDiv>
      <h2>Cat API Data</h2>
      <Button onClick={handleClick} disabled={state.loading}>
        {state.loading ? <Loading /> : 'Get Random Cat Breed'}
      </Button>
      {state.error && <div>Error: {state.error}</div>}
      {state.randomBreed && (
        <>
          <Card title={state.randomBreed.name} content={state.randomBreed.description} /> {/* Use the Card component here */}
        </>
      )}
    </StyledDiv>
  );
};

export default CatApiDataFetcher;
