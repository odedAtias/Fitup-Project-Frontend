export const displayAddress = address => {
	if (address.length > 35) {
		const lastSpaceIndex = address.lastIndexOf(' ', 30);
		if (lastSpaceIndex !== -1) {
			const firstLine = address.substring(0, lastSpaceIndex);
			const secondLine = address.substring(lastSpaceIndex + 1);
			return `${firstLine}\n${secondLine} st,`;
		}
	}
	return address + ' st,';
};
