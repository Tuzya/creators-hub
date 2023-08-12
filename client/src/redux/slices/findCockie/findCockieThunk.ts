/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { findCockieService } from '../../../services/apiFindCokcieServices';
import type { FindCockie } from '../../../types/findCockieTypes';

export const getFindCockieThunk = createAsyncThunk<FindCockie>(
  'findCockie/getFindCockieThunk',
  async () => findCockieService(),
);
