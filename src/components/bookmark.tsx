import type { BookmarkType } from '../types';
import { formatDuration, formatCreatedAt, formatUploadDate } from '../utils/format';

interface BookmarkProps {
	bookmark: BookmarkType;
}

const Bookmark = ({ bookmark }: BookmarkProps) => {
	const { title, html, url, author_name, width, height, duration, upload_date, created_at } =
		bookmark;

	return (
		<li className='bookmark_item'>
			<div className='bookmark'>
				<h3 className='bookmark_title'>{title}</h3>
				<div dangerouslySetInnerHTML={{ __html: html }} />
				{url && (
					<p>
						URL:{' '}
						<a href={url} target='_blank'>
							<span>Open in new tab</span>
						</a>
					</p>
				)}
				<p>Author: {author_name}</p>
				{width && height && (
					<p>
						{width} X {height}
					</p>
				)}
				{duration && <p>Duration: {formatDuration(duration)}</p>}
				<p>Upload Date: {upload_date ? formatUploadDate(upload_date) : 'unknown'}</p>
				<p>Created At: {formatCreatedAt(created_at)}</p>
			</div>
		</li>
	);
};

export default Bookmark;
