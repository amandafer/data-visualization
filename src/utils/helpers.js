export const calculateAge = dateOfBirth => {
	const birthDate = new Date(dateOfBirth);
	const todaysDate = new Date();
	let years = todaysDate.getFullYear() - birthDate.getFullYear();

	if (
		todaysDate.getMonth() < birthDate.getMonth() ||
		(todaysDate.getMonth() === birthDate.getMonth() &&
			todaysDate.getDate() < birthDate.getDate())
	) {
		years--;
	}

	return years;
};
