// Everything the game needs to know that is true of the Spinosaurus and of nothing else.
// See pack_a/trex/dinoCode.js for what each field means.
//
// PLACEHOLDER: started as a copy of pack_a's trex (the carnivore baseline) with only the
// names changed. Every number here is unreviewed until someone plays this dinosaur and
// tunes it -- colliders, probes and offsets most of all, which follow the mesh.
export default {
	/// Shift the green hatching shell to yellow.
	openingEggHueShift: -0.17,
	unlockMission: {
		id: "spino_eggs",
		module: "special_mission.js",
		guideType: "spino_guide",
		eggType: "spino_egg",
		portrait: "pack_a/spino/ui/title_egg.webp",
		icon: "pack_a/mission_ui/iguanoegg.webp",
		nameKey: "SPECIAL_SPINO_NAME",
		detailsKey: "SPECIAL_SPINO_DETAILS",
		hueShift: 0.25,
		dialogDetailsOffsetY: 5,
		dialogContinueOffsetY: 30
	},
	stats: {
		walkSpeed: 1.7,
		runSpeed: 6.0,
		swimDepthJuvenile: -0.18,
		swimDepthTeen: -0.45,
		swimDepthAdult: -0.75,
		acceleration: 6.0,
		rotationSpeed: 2.0,
		runThresholdPercent: 0.9,
		maxHealth: 100,
		attackDamage: 20,
		eatDamage: 20,
		isFoodType: 2, // MEAT
		eatsFoodType: 2, // a carnivore: NPCs, supermeat, zwam
	},

	glb: 'spino',
	swimSpeedMultiplier: 1.7,
	normalSwimPlaybackMultiplier: 0.6,
	underwaterDiving: true,
	/// Like the trex, the shine map is named after its teeth.
	protectTexture: 'teeth',

	/// The other carnivore: a tooth to attack with. Its meat eat-icon follows from
	/// `eatsFoodType` and is not written down. See pack_a/trex/dinoCode.js.
	attackIcon: 'bite',

	bodyCollider: { forward: 0.3, y: 0.079, heightScale: 0.9 },
	headCollider: { forward: 1.2, height: 0.78, radius: 0.24 },

	detection: { offset: [0, 0.6, -1.31], radiusScale: 0.8, foodRadius: null, foodOffset: null },

	combat: {
		impactDelay: 500,
		stationary: false,
		scaryWhenRunning: true,
		knockbackMultiplier: 1,
		launchesCadavers: false,
	},

	mating: { counterpart: 'spino_guide', distance: 2.7 },

	footsteps: { walk: 8, run: 2, gallopOnRun: false },

	sharpen: { bone: 'head', sparkOffset: { x: 0.2, z: 0 } },

	/// Where a roar's air leaves the body, for the only dinosaur that can be underwater to
	/// roar in the first place. The bone is the one the roar opens, so the bubbles follow
	/// the jaw rather than hanging at a fixed point ahead of the body; forward and up then
	/// walk from its origin out to the snout tip, along model forward and scaled by growth.
	/// Unlike the rest of this file these two are measured, not guessed: the jaw bone rests
	/// at forward 1.01 / height 0.84, and headCollider puts the front of the snout at
	/// forward 1.44 (1.2 + its 0.24 radius), which is 0.43 further out. Up splits the gap to
	/// the head bone at 0.95, so the bubbles leave the mouth line and not the chin.
	roarBubbles: { bone: 'jaw', forward: 0.43, up: 0.05 },

	agroLatch: { left: 0.35, forwardPitch: 10 },

	previewGrowthFraction: 0.3,
}
