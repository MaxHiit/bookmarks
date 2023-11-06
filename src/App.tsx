import './App.css';
import { useState, Suspense, useContext } from 'react';
import { BookmarkType } from './types';
import { AddBookmarkForm } from './components/form/add-bookmark-form';
import { BookmarkList } from './components/bookmark-list';
import { Loader } from './components/loader';
import { validProviders } from './config';
import { BookmarkContext } from './context/bookmarkContext';

function App() {
	const [errorMessage, setErrorMessage] = useState<string>('');

	const { addBookmark } = useContext(BookmarkContext);

	const handleSubmit = async (urlValue: string) => {
		try {
			const response = await fetch(`https://noembed.com/embed?url=${urlValue}`);
			const data = await response.json();

			if (!response.ok) {
				setErrorMessage('Failed to fetch embed data');
				return;
			}

			const provider = data.provider_name;

			if (!validProviders.includes(provider)) {
				setErrorMessage('No matching providers found');
				return;
			}

			if (errorMessage) {
				setErrorMessage('');
			}

			const now = new Date();
			const createdAt = now.toISOString();

			let newBookmark: BookmarkType = {
				title: data.title,
				html: data.html,
				url: data.url,
				author_name: data.author_name,
				upload_date: data.upload_date,
				created_at: createdAt
			};

			if (data.type === 'photo') {
				newBookmark = {
					...newBookmark,
					width: data.width,
					height: data.height
				};
			} else if (data.type === 'video') {
				newBookmark = {
					...newBookmark,
					duration: data.duration
				};
			}

			addBookmark(newBookmark);
		} catch (error) {
			console.error('Error:', error);
		}
	};

	return (
		<>
			<h1>Bookmark List </h1>
			<p>
				Add bookmark photo for{' '}
				<a target='_blank' href='https://www.flickr.com/'>
					Flickr
				</a>{' '}
				or bookmark video for{' '}
				<a target='_blank' href='https://vimeo.com/'>
					Vimeo
				</a>
			</p>
			<AddBookmarkForm onSubmit={handleSubmit} />
			{errorMessage && <div className='error-message'>{errorMessage}</div>}
			<Suspense fallback={<Loader />}>
				<BookmarkList />
			</Suspense>
		</>
	);
}

export default App;
