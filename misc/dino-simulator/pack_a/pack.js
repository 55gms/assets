export default {
	name: 'Tile A',
	dinos: ['trike', 'trex', 'ankylo', 'iguano', 'spino', 'stego', 'compy'],
	/// This pack's own game on Poki, by the id Poki knows it by -- which is also the
	/// namespace every room lives in: the relay keys a lobby `<pokiGame>:<CODE>`, so the
	/// same four letters are a different room in every game, and a client on another game's
	/// id is told the room does not exist. Each pack being its own Poki game is therefore
	/// each pack having its own rooms, which is what we want: the island would not match.
	///
	/// Not a secret -- it is on the game's own page and in every packet the library sends.
	/// The SECOND copy of this number is in .github/workflows/deploy-to-poki-pack-a.yml,
	/// which hands it to the upload action; the two have to agree.
	pokiGame: 'd103b864-acf3-4ed7-9e2e-cb0c105f19cf',
	colors: {
		background: 'rgb(25, 70, 56)',
		summary: 'rgb(18, 38, 18)',
		dialog: 'rgb(25, 70, 56)',
		scrollbar: {
			track: 'rgba(255, 255, 255, 0.14)',
			thumb: 'rgb(18, 52, 38)',
			thumbHeld: 'rgb(10, 34, 25)',
		},
		labels: {
			title: '#ffeb66',
			reward: '#ffe36e',
			offer: '#ffe14d',
		},
	},
}
