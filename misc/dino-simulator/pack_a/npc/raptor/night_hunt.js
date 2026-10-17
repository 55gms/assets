// A tongue hit can arrive outside biting distance, even during the day.
export const counterattackChaseSeconds = 3

export const nightHunt = {
	maxTargetGrowth: 0.5,
	notice: 12,
	charge: 4,
	strike: 0.15,
	retreatBeforeStrike: false,
	stalkSpeed: 0.5,
	stalkAnimation: 'stalk',
	postHit: ['roar', 'roar', 'notice'],
}
