import '../styles/bookmark.css';
import { useMemo } from 'react';
import { BookmarkType } from '../types';
import Bookmark from './bookmark';

interface BookmarkListProps {
	bookmarks: BookmarkType[];
}

export const BookmarkList = ({ bookmarks }: BookmarkListProps) => {
	const memoizedBookmarks = useMemo(
		() => bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark} />),
		[bookmarks]
	);

	return (
		<>
			{bookmarks.length === 0 ? (
				<p>No bookmarks available.</p>
			) : (
				<ul className='bookmark_list'>{memoizedBookmarks}</ul>
			)}
		</>
	);
};
