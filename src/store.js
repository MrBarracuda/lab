import { configureStore } from '@reduxjs/toolkit';

import coursesReducer from './features/courses/coursesSlice';
import authorsReducer from './features/authors/authorsSlice';
import userReducer from './features/user/userSlice';

export const store = configureStore({
	reducer: {
		courses: coursesReducer,
		authors: authorsReducer,
		user: userReducer,
	},
});
