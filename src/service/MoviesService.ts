export default class MoviesService {
	_apiBase = 'http://www.omdbapi.com/?s=Guardians';

	public async getResource<T>(): Promise<T> {
		const res = await fetch(`${this._apiBase}&apikey=e9d96ba9`);

		if (!res.ok) {
			throw new Error('Could not fetch, received ' + res.status);
		}
		return await res.json();
	}
}
