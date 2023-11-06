import { useState, useCallback, type ChangeEvent, type FormEvent } from 'react';

interface AddBookmarkFormProps {
	onSubmit: (url: string) => void;
}

export const AddBookmarkForm = ({ onSubmit }: AddBookmarkFormProps) => {
	const [urlValue, setUrlValue] = useState<string>('');

	const handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newUrl = e.target.value;

		setUrlValue(newUrl);
	};

	const handleSubmit = useCallback(
		(e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			if (!urlValue) return;

			onSubmit(urlValue);
			setUrlValue('');
		},
		[onSubmit, urlValue]
	);

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				name='url'
				required
				placeholder='image or video url'
				value={urlValue}
				onChange={handleUrlChange}
			/>
			<button type='submit'>Search</button>
		</form>
	);
};
