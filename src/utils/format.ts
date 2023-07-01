export const formatDuration = (duration: number): string => {
	const date = new Date(duration * 1000); // Convertir en millisecondes
	const hours = date.getUTCHours();
	const minutes = date.getUTCMinutes();
	const seconds = date.getUTCSeconds();

	return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
		.toString()
		.padStart(2, '0')}`;
};

export const formatUploadDate = (uploadDate: string): string => {
	const date = new Date(uploadDate);
	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
	return date.toLocaleDateString('fr-FR', options);
};

export const formatCreatedAt = (createdAt: string): string => {
	const date = new Date(createdAt);
	const now = new Date();

	const elapsedMilliseconds = now.getTime() - date.getTime();
	const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);

	if (elapsedSeconds < 60) {
		return `Il y a ${elapsedSeconds} secondes`;
	}

	const elapsedMinutes = Math.floor(elapsedSeconds / 60);

	if (elapsedMinutes < 60) {
		return `Il y a ${elapsedMinutes} minutes`;
	}

	const elapsedHours = Math.floor(elapsedMinutes / 60);

	if (elapsedHours < 24) {
		return `Il y a ${elapsedHours} heures`;
	}

	const elapsedDays = Math.floor(elapsedHours / 24);

	return `Il y a ${elapsedDays} jours`;
};
