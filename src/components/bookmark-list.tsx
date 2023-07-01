import '../styles/bookmark.css';
import { useContext, useMemo } from 'react';
import Bookmark from './bookmark';
import { BookmarkContext } from '../context/bookmarkContext';

export const BookmarkList = () => {
	const { bookmarks } = useContext(BookmarkContext);

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
