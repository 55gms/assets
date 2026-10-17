// Everything the game needs to know that is true of the Stegosaurus and of nothing else.
// See pack_a/trex/dinoCode.js for what each field means.
//
// PLACEHOLDER: started as a copy of pack_a's ankylo -- the other heavy herbivore whose
// attack is a planted tail swing, which is the closest existing feel. Every number here is
// unreviewed until someone plays this dinosaur and tunes it -- colliders, probes and
// offsets most of all, which follow the mesh.
export default {
	/// Shift the green hatching shell to blue.
	openingEggHueShift: 0.33,
	unlockMission: {
		id: "stego_eggs",
		module: "special_mission.js",
		guideType: "stego_guide",
		eggType: "stego_egg",
		portrait: "pack_a/stego/ui/title_egg.webp",
		icon: "pack_a/mission_ui/iguanoegg.webp",
		nameKey: "SPECIAL_STEGO_NAME",
		detailsKey: "SPECIAL_STEGO_DETAILS",
		hueShift: -0.25
	},
	stats: {
		walkSpeed: 1.8,
		runSpeed: 5.5,
		swimDepthJuvenile: -0.15,
		swimDepthTeen: -0.36,
		swimDepthAdult: -0.67,
		acceleration: 4.0,
		rotationSpeed: 2.0,
		maxHealth: 250,
		attackDamage: 30,
		eatDamage: 1,
		consumeValue: 10,
		isFoodType: 2,
		eatsFoodType: 1, // VEG
	},

	glb: 'stego',
	swimSpeedMultiplier: 0.8,
	protectTexture: 'protect',

	/// No *Icon fields: like the ankylo, every shared action icon plain. The thagomizer is an
	/// impact, which is what the exploding star already draws.

	/// Squat, like the ankylo: the shared capsule is taller than this body.
	bodyCollider: { forward: 0, y: 0.3555, heightScale: 0.55 },
	headCollider: null,

	detection: {
		offset: [-0.25, 0.688, -0.953], radiusScale: 1,
		foodRadius: 0.42, foodOffset: [0, 0.5, -0.72],
	},

	combat: {
		impactDelay: 500,
		swimAttackAnimation: 'attack_swim',
		swimDamageMultiplier: 0.5,
		/// The tail swing plants its feet...
		stationary: true,
		/// ...but a swing started at a run keeps a little momentum -- see the ankylo's.
		attackSlideMultiplier: 0.12,
		scaryWhenRunning: false,
		knockbackMultiplier: 3,
		launchesCadavers: false,
	},

	mating: { counterpart: 'stego_guide', distance: 2 },

	footsteps: { walk: 2, run: 1, gallopOnRun: true },

	/// The ankylo sharpens its tail; a stego's plates are on its back, but the tail spikes
	/// are the weapon, so its bone follows the ankylo -- verify against the actual rig.
	sharpen: { bone: 'tail3', sparkOffset: { x: 0.2, z: 0 } },

	agroLatch: { left: 0.4, forwardPitch: 20 },

	previewGrowthFraction: 0.6,
}
