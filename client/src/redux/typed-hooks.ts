import { useDispatch } from 'react-redux';
import type { AppDispatch } from './store';

/* eslint-disable import/prefer-default-export */
export const useAppDispatch = () => useDispatch<AppDispatch>();
