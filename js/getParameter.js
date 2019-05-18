function getParameter(key)
{
	let str = location.search.split('?');
	if ( str.length < 2 ) {
		return '';
	}

	let params = str[1].split('&');
	for ( let i = 0; i < params.length; i++ ) {
		let keyVal = params[i].split('=');
		if ( ( keyVal[0] == key ) &&  ( keyVal.length == 2 ) ) {
			return decodeURIComponent(keyVal[1]);
		}
	}
	return '';
}
