/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState, ReactNode } from 'react';
import { BookmarkType } from '../types';

interface BookmarkContextValue {
	bookmarks: BookmarkType[];
	addBookmark: (bookmark: BookmarkType) => void;
	deleteBookmark: (bookmark: BookmarkType) => void;
}

interface BookmarkProviderProps {
	children: ReactNode;
}

export const BookmarkContext = createContext<BookmarkContextValue>({
	bookmarks: [],
	addBookmark: () => {},
	deleteBookmark: () => {}
});

export const BookmarkProvider = ({ children }: BookmarkProviderProps) => {
	const [bookmarks, setBookmarks] = useState<BookmarkType[]>([]);

	const addBookmark = (bookmark: BookmarkType) => {
		setBookmarks((prevBookmarks) => [...prevBookmarks, bookmark]);
	};

	const deleteBookmark = (bookmark: BookmarkType) => {
		setBookmarks((prevBookmarks) => prevBookmarks.filter((b) => b !== bookmark));
	};

	return (
		<BookmarkContext.Provider value={{ bookmarks, addBookmark, deleteBookmark }}>
			{children}
		</BookmarkContext.Provider>
	);
};
