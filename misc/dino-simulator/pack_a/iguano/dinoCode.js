// Everything the game needs to know that is true of the Iguanodon and of nothing else.
// See pack_a/trex/dinoCode.js for what each field means.
//
// PLACEHOLDER: started as a copy of pack_a's trike (the herbivore baseline) with only the
// names changed. Every number here is unreviewed until someone plays this dinosaur and
// tunes it -- colliders, probes and offsets most of all, which follow the mesh.
export default {
	openingEggHueShift: 0.5,
	unlockMission: {
		id: "iguano_eggs",
		module: "special_mission.js",
		guideType: "iguano_guide",
		eggType: "iguano_egg",
		portrait: "pack_a/iguano/ui/title_egg.webp",
		icon: "pack_a/mission_ui/iguanoegg.webp",
		nameKey: "SPECIAL_DINO_NAME",
		detailsKey: "SPECIAL_DINO_DETAILS",
		hueShift: 0
	},
	stats: {
		walkSpeed: 2.8,
		runSpeed: 9.0,
		swimDepthJuvenile: -0.16,
		swimDepthTeen: -0.4,
		swimDepthAdult: -0.7,
		rotationSpeed: 2.0,
		maxHealth: 80,
		attackDamage: 15,
		isFoodType: 2,
		eatsFoodType: 1, // VEG
	},

	glb: 'iguano',
	swimSpeedMultiplier: 0.8,
	underwaterDiving: true,
	/// Divides into the air meter's 0.6s drain interval, so 2 is twice the rate: a full tank
	/// lasts about thirty seconds under water where the Spinosaurus gets a minute. It is a
	/// swimmer that dives, not a diver -- the shorter breath is what keeps that distinction.
	airDrainMultiplier: 2,
	protectTexture: 'protect',

	/// Horned like the trike, so it takes the same attack icon. See pack_a/trex/dinoCode.js.
	attackIcon: 'horn',

	bodyCollider: null,
	headCollider: { forward: 0.72, height: 0.68, radius: 0.24 },

	detection: { offset: [0, 0.688, -0.953], radiusScale: 1, foodRadius: null, foodOffset: null },

	combat: {
		impactDelay: 350,
		stationary: false,
		// The attack strikes with the forelimbs. While moving, only the hind-leg chain is
		// handed back to locomotion; upperarm/forearm/hand-IK tracks stay in the attack.
		movingAttackMask: 'hindLegsOnly',
		scaryWhenRunning: false,
		knockbackMultiplier: 1,
		launchesCadavers: true,
		cadaverVerticalMultiplier: 0.5,
		cadaverKillForwardDistance: 2,
		cadaverKillJuvenileDistanceMultiplier: 1 / 3,
		cadaverKillYawDegrees: -90,
		// Further attacks rotate an existing corpse instead of relaunching it.
		cadaverRehitYawDegrees: -180,
		cadaverRehitPushDistance: 2,
		cadaverRehitDuration: 0.735,
	},

	/// The island's own iguanodons. This once named a pack-qualified type that did not exist,
	/// so it matched nothing and an iguanodon could neither mate nor meet its own kind. There
	/// is one `iguano` now and no pack in any type's name -- see AGENTS.md, "Pack B is parts".
	///
	/// Safe to point at the herd rather than at the egg-hunt guide: an iguanodon is only
	/// playable once its hunt is finished, so by the time anybody reads this they are family.
	mating: { counterpart: 'iguano', distance: 2.5 },

	footsteps: { walk: 2, run: 1, gallopOnRun: true },

	// Keep the authored stride length: playback rises by the same ratio as ground speed
	// (2.8 / 2.0 walking, 9.0 / 6.4 running).
	locomotionPlayback: { walk: 1.4, run: 1.40625 },

	sharpen: { bone: 'head', sparkOffset: { x: 0.11, z: 0.1 } },

	agroLatch: { left: 0.3, forwardPitch: 0 },

	previewGrowthFraction: 0.6,
}
