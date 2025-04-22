import { json } from '@sveltejs/kit';

import type { Part } from '$lib/types';

let parts: Array<Part> = [
	{
		name: 'V5 Robot Battery',
		image: 'Batteryv5.png',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/276-4811.html',
			api: 'https://api.vex.com/v5/home/cpp/Brain/Brain.Battery.html'
		},
		locations: [{ husky: 0, drawer: 2 }]
	},
	{
		name: 'V5 Robot Brain',
		image: 'Brain.png',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/276-4810.html',
			api: 'https://api.vex.com/v5/home/cpp/Brain/index.html'
		},
		locations: [{ cabinet: 0, drawer: 0 }]
	},
	{
		name: 'Power Cable',
		image: '/power-cable.svg',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/276-4817.html'
		},
		locations: [{ cabinet: 0, drawer: 1 }]
	},
	{
		name: 'V5 Controller',
		image: '/v5controller.svg',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/276-4820.html',
			api: 'https://api.vex.com/v5/home/cpp/Controller/index.html'
		},
		locations: [{ cabinet: 0, drawer: 2 }]
	},
	{
		name: 'V5 Robot Radio',
		image: 'Radio.png',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/276-4831.html'
		},
		locations: [{ cabinet: 0, drawer: 3 }]
	},
	{
		name: 'Inertial Sensor',
		image: '/sensor.svg',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/276-4855.html',
			api: 'https://api.vex.com/v5/home/cpp/Inertial.html'
		},
		locations: [{ cabinet: 0, drawer: 4 }]
	},
	{
		name: 'Optical Sensor',
		image: '/sensor.svg',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/276-7043.html',
			api: 'https://api.vex.com/v5/home/cpp/Optical.html'
		},
		locations: [{ cabinet: 0, drawer: 5 }]
	},
	{
		name: 'Vision Sensor',
		image: 'Sensor.png',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/276-8659.html',
			api: 'https://api.vex.com/v5/home/cpp/Vision/index.html'
		},
		locations: [{ cabinet: 0, drawer: 6 }]
	},

	{
		name: 'USB Cable',
		image: '/usb.svg',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/228-2785.html'
		},
		locations: [{ cabinet: 0, drawer: 7 }]
	},
	{
		name: 'Rotation Sensor',
		image: '/rotation.svg',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/276-6050.html',
			api: 'https://api.vex.com/v5/home/cpp/Rotation.html'
		},
		locations: [{ cabinet: 0, drawer: 8 }]
	},
	{
		name: 'Distance Sensor',
		image: '/sensor.svg',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/276-4852.html',
			api: 'https://api.vex.com/v5/home/cpp/Distance.html'
		},
		locations: [{ cabinet: 0, drawer: 9 }]
	},
	{
		name: 'V2 Potentiometer',
		image: 'Sensor.png',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/276-7417.html',
			api: 'https://api.vex.com/v5/home/cpp/PotentiometerV2.html'
		},
		locations: [{ cabinet: 0, drawer: 11 }]
	},
	{
		name: 'V5 Smart Cables',
		image: '/connector.svg',
		lengths: ['1ft', '2ft', '3ft'],
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/v5-smart-cables.html',
			api: 'https://api.vex.com/v5/home/cpp/Enums.html#ports'
		},
		locations: [
			{ cabinet: 0, drawer: 10 },
			{ cabinet: 0, drawer: 12 },
			{ cabinet: 0, drawer: 13 }
		]
	},
	{
		name: 'V5 Bumper Switch',
		image: 'Switch.png',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/276-4858.html',
			api: 'https://api.vex.com/v5/home/cpp/Bumper.html'
		},
		locations: [{ cabinet: 0, drawer: 14 }]
	},
	{
		name: 'V5 Smart Motor (5.5W)',
		image: 'Motor.png',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/276-4842.html',
			api: 'https://api.vex.com/v5/home/cpp/Motor.html'
		},
		locations: [{ cabinet: 0, drawer: 16 }]
	},
	{
		name: 'V5 Smart Motor (11W)',
		image: 'Motor.png',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/276-4840.html',
			api: 'https://api.vex.com/v5/home/cpp/Motor.html'
		},
		locations: [{ cabinet: 0, drawer: 16 }]
	},
	{
		name: 'V5 Battery Chargers',
		image: '/charger.svg',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/v5-battery-charger.html'
		},
		locations: [{ cabinet: 0, drawer: 17 }]
	},
	{
		name: 'Motor Casings',
		image: '/motor-casing.svg',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/276-4840.html'
		},
		locations: [{ cabinet: 0, drawer: 18 }]
	},
	{
		name: 'V5 Smart Motor Gear Cartridges',
		image: '/gear-cartridge.svg',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/276-4840.html'
		},
		locations: [{ cabinet: 0, drawer: -1 }]
	},
	{
		name: 'Battery Clips',
		image: 'Battery Clip.png',
		category: 'electronics',
		links: {
			vex: 'https://www.vexrobotics.com/276-6020.html'
		},
		locations: [{ cabinet: 0, drawer: 19 }]
	},
	{
		name: 'Base Plate',
		image: 'Plates.png',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/276-1341.html'
		},
		locations: [
			{ cabinet: 1, drawer: 0 },
			{ cabinet: 1, drawer: 1 }
		]
	},
	{
		name: 'Steel C-Channel',
		image: 'C-Channel (Icon).png',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/channel.html'
		},
		locations: [
			{ cabinet: 1, drawer: 2 },
			{ cabinet: 1, drawer: 4 },
			{ cabinet: 1, drawer: 5 },
			{ cabinet: 1, drawer: 6 },
			{ cabinet: 1, drawer: 7 }
		]
	},
	{
		name: 'Rack Gearbox Bracket',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/advanced-gearbox-brackets.html'
		},
		locations: [{ cabinet: 1, drawer: 4 }]
	},
	{
		name: 'Chassis Rail',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/276-6465.html'
		},
		locations: [
			{ cabinet: 1, drawer: 8 },
			{ cabinet: 1, drawer: 9 },
			{ cabinet: 1, drawer: 10 }
		]
	},
	{
		name: 'Slotted Steel Angle',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/276-2161.html'
		},
		locations: [{ cabinet: 1, drawer: 11 }]
	},
	{
		name: 'Segmented Angle',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/276-2161.html'
		},
		locations: [{ cabinet: 1, drawer: 12 }]
	},
	{
		name: 'Chassis Bumper Angle',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/276-2161.html'
		},
		locations: [{ cabinet: 1, drawer: 13 }]
	},
	{
		name: 'Steel Angle',
		image: "Angles'.png",
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/angles.html'
		},
		locations: [
			{ cabinet: 1, drawer: 14 },
			{ cabinet: 1, drawer: 15 }
		]
	},
	{
		name: 'Steel Bar',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/275-1141.html'
		},
		locations: [{ cabinet: 1, drawer: 18 }]
	},
	{
		name: 'Steel Plate',
		image: 'Plates.png',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/v5-structure.html'
		},
		locations: [{ cabinet: 1, drawer: 19 }]
	},
	{
		name: 'Aluminum C-Channel',
		image: 'C-Channel (Icon).png',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/channel.html'
		},
		locations: [
			{ husky: 0, drawer: 1 },
			{ husky: 0, drawer: 4 },
			{ husky: 0, drawer: 7 }
		]
	},
	{
		name: 'Aluminum Angle',
		image: "Angles'.png",
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/v5-structure.html'
		},
		locations: [
			{ husky: 0, drawer: 15 },
			{ husky: 0, drawer: 16 }
		]
	},
	{
		name: 'Aluminum Plate',
		image: 'Plates.png',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/v5-structure.html'
		},
		locations: [{ cabinet: 1, drawer: 19 }]
	},
	{
		name: 'Gussets',
		image: 'Gussets.png',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/v5-structure.html'
		},
		locations: [{ cabinet: 1, drawer: 21 }]
	},
	{
		name: 'Hinges',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/275-1272.html'
		},
		locations: [{ cabinet: 1, drawer: 21 }]
	},
	{
		name: 'Standoffs',
		image: 'Standoff.png',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/standoffs-8-32.html',
			robosource: 'https://www.robosource.net/aluminum-standoffs'
		},
		locations: [{ cabinet: 2, drawer: 9 }]
	},
	{
		name: 'Hex Screws',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/all-screws.html',
			robosource: 'https://www.robosource.net/specialty-screws'
		},
		locations: [{ cabinet: 2, drawer: 0 }]
	},
	{
		name: 'Linear Rail Screws',
		category: 'structure',
		locations: [{ cabinet: 2, drawer: 1 }]
	},
	{
		name: 'Star Screws',
		image:
			'https://raw.githubusercontent.com/BreadSoup/Protobot-Rebuilt/refs/heads/main/Assets/Sprites/Tools%20Icons/Screw%20Head.png',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/all-screws.html',
			robosource:
				'https://www.robosource.net/robot-parts/screws-hardware/star-drive-screws-steel/star-drive-screws/413-star-drive-screws-variety-pack'
		},
		locations: [{ husky: 0, drawer: 11 }]
	},
	{
		name: 'Nylock Nuts',
		image: 'NUT.png',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/nuts-8-32.html',
			robosource:
				'https://www.robosource.net/robot-parts/screws-hardware/specialty-screws/605-nylock-nut-440'
		},
		locations: [{ cabinet: 2, drawer: 4 }]
	},
	{
		name: 'Keps Nuts',
		image: 'NUT.png',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/nuts-8-32.html',
			robosource:
				'https://www.robosource.net/robot-parts/screws-hardware/specialty-screws/606-keps-nut-440'
		},
		locations: [{ cabinet: 2, drawer: 4 }]
	},
	{
		name: 'Spacers',
		image: 'Plastic Spacer.png',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/spacers-washers.html'
		},
		locations: [{ cabinet: 2, drawer: 2 }]
	},
	{
		name: 'Gray Spacers',
		image: 'Plastic Spacer.png',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/spacers-washers.html'
		},
		locations: [{ cabinet: 2, drawer: 2 }]
	},
	{
		name: 'Flat Bearings',
		image: 'Bearing Icon.png',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/v5-bearings.html'
		},
		locations: [{ cabinet: 2, drawer: 5 }]
	},
	{
		name: 'Traction Wheels',
		image: 'Traction Wheel.png',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/wheels.html'
		},
		locations: [{ cabinet: 3, drawer: -1 }]
	},
	{
		name: 'Omni-Directional Wheels',
		image: 'Omni Wheel (Icon).png',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/wheels.html'
		},
		locations: [{ husky: 0, drawer: 9 }]
	},
	{
		name: 'Flex Wheels',
		image: 'flex wheels.png',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/vrc-flex-wheels.html'
		},
		locations: [{ husky: 0, drawer: 12 }]
	},
	{
		name: 'Metal Gears',
		image: 'Gear.png',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/gears.html'
		},
		locations: [{ cabinet: 2, drawer: 5 }]
	},
	{
		name: 'Pulleys',
		category: 'motion',
		links: { vex: 'https://www.vexrobotics.com/276-1546.html' },
		locations: [{ cabinet: 3, drawer: 0 }]
	},
	{
		name: 'Cams',
		category: 'motion',
		links: { vex: 'https://www.vexrobotics.com/276-1546.html' },
		locations: [{ cabinet: 3, drawer: 0 }]
	},
	{
		name: 'Worm Gears',
		category: 'motion',
		links: { vex: 'https://www.vexrobotics.com/276-2045.html' },
		locations: [{ cabinet: 3, drawer: 0 }]
	},
	{
		name: 'Intake Rollers',
		category: 'motion',
		links: { vex: 'https://www.vexrobotics.com/intake-roller.html' },
		locations: [{ cabinet: 3, drawer: 1 }]
	},
	{
		name: 'Rack Gears',
		category: 'motion',
		links: { vex: 'https://www.vexrobotics.com/276-2045.html' },
		locations: [{ cabinet: 3, drawer: 3 }]
	},
	{
		name: 'Linear Slide Brackets',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/276-6465.html'
		},
		locations: [{ cabinet: 3, drawer: 4 }]
	},
	{
		name: 'Small Gears',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/gears.html'
		},
		locations: [{ cabinet: 3, drawer: 5 }]
	},
	{
		name: 'Bevel Gears',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/bevel-gears.html'
		},
		locations: [{ cabinet: 3, drawer: 5 }]
	},
	{
		name: 'Modified Gears',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/gears.html'
		},
		locations: [{ cabinet: 3, drawer: 5 }]
	},
	{
		name: 'Low Strength Gears',
		image: 'Gear.png',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/gears.html'
		},
		locations: [
			{ cabinet: 3, drawer: 6 },
			{ cabinet: 3, drawer: 9 },
			{ cabinet: 3, drawer: 10 },
			{ cabinet: 3, drawer: 11 }
		]
	},
	{
		name: 'High Strength Gears',
		image: 'HS Gears.png',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/gears.html'
		},
		locations: [
			{ cabinet: 3, drawer: 6 },
			{ cabinet: 3, drawer: 8 }
		]
	},
	{
		name: 'Low Strength Sprockets',
		image: 'Sprockets.png',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/v5-sprockets.html'
		},
		locations: [{ cabinet: 3, drawer: 7 }]
	},
	{
		name: 'High Strength Sprockets',
		image: 'HS Sprockets.png',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/v5-sprockets.html'
		},
		locations: [
			{ cabinet: 3, drawer: 12 },
			{ cabinet: 3, drawer: 13 },
			{ cabinet: 3, drawer: 14 },
			{ cabinet: 3, drawer: 15 },
			{ cabinet: 3, drawer: 16 }
		]
	},
	{
		name: 'Anti-Slip Mat',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/mat-g.html'
		},
		locations: [{ cabinet: 3, drawer: 17 }]
	},
	{
		name: 'String',
		category: 'motion',
		locations: [{ cabinet: 3, drawer: 17 }]
	},
	{
		name: 'Shaft Inserts',
		image: 'Inserts.png',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/hs-hardware.html'
		},
		locations: [{ cabinet: 2, drawer: 6 }]
	},
	{
		name: 'Motor Posts',
		image: 'Shafts (Icon).png',
		category: 'motion',
		locations: [{ cabinet: 2, drawer: 6 }]
	},
	{
		name: 'Clutch',
		category: 'motion',
		locations: [{ cabinet: 2, drawer: 6 }]
	},
	{
		name: 'Post Hex Nut Retainers',
		category: 'structure',
		links: {
			vex: 'https://www.vexrobotics.com/nut-retainers.html'
		},
		locations: [{ cabinet: 2, drawer: 7 }]
	},
	{
		name: 'Universal Joints',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/276-2723.html'
		},
		locations: [{ cabinet: 2, drawer: 7 }]
	},
	{
		name: 'Metal Inserts',
		image: 'Inserts.png',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/hs-hardware.html'
		},
		locations: [{ cabinet: 2, drawer: 5 }]
	},
	{
		name: 'Chains',
		image: '/chain.svg',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/hs-sprockets-and-chain.html'
		},
		locations: [{ cabinet: 3, drawer: 21 }]
	},
	{
		name: 'Tank Tread Chains',
		image: '/tank-tread-chain.svg',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/276-6558.html'
		},
		locations: [
			{ cabinet: 3, drawer: 18 },
			{ cabinet: 3, drawer: 19 }
		]
	},
	{
		name: 'Shafts',
		image: 'Shafts (Icon).png',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/drive-shafts.html'
		},
		locations: [{ cabinet: 1, drawer: 20 }]
	},
	{
		name: 'High Strength Shafts',
		image: 'Shafts (Icon).png',
		category: 'motion',
		links: { vex: 'https://www.vexrobotics.com/drive-shafts.html' },
		locations: [
			{ cabinet: 1, drawer: 20 },
			{ cabinet: 1, drawer: -1 }
		]
	},
	{
		name: 'Shaft Collars',
		image: 'Normal Shaft Collar.png',
		category: 'motion',
		links: { vex: 'https://www.vexrobotics.com/v5-shaft-collars.html' },
		locations: [{ cabinet: 2, drawer: 3 }]
	},
	{
		name: 'Clamping Shaft Collars',
		image: 'Clamping Shaft Collar.png',
		category: 'motion',
		links: { vex: 'https://www.vexrobotics.com/v5-shaft-collars.html' },
		locations: [{ cabinet: 2, drawer: 3 }]
	},
	{
		name: 'Pillow Block Bearings',
		image: 'Bearing Blocks.png',
		links: {
			vex: 'https://www.vexrobotics.com/v5-bearings.html'
		},
		category: 'motion',
		locations: [{ cabinet: 2, drawer: 2 }]
	},
	{
		name: 'Washers',
		image: 'Washer.png',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/spacers-washers.html'
		},
		locations: [{ cabinet: 2, drawer: 3 }]
	},
	{
		name: 'Couplers',
		category: 'structure',
		links: {
			vex: 'https://www.robosource.net/coupler-set-screws'
		},
		locations: [{ cabinet: 2, drawer: 3 }]
	},
	{
		name: 'Pneumatic Cylinders',
		image: 'Pneumatic Resivour 1.png',
		category: 'pneumatics',
		links: { vex: 'https://www.vexrobotics.com/spare-pneumatics.html' },
		locations: [
			{ husky: 0, drawer: 14 },
			{ husky: 0, drawer: 18 }
		]
	},
	{
		name: 'Air Compressors',
		image: '/compressor.svg',
		category: 'pneumatics',
		locations: [{ husky: 0, drawer: 21 }]
	},
	{
		name: 'Pneumatic Tubing',
		image: '/tubing.svg',
		links: {
			vex: 'https://www.vexrobotics.com/spare-pneumatics.html'
		},
		category: 'pneumatics',
		locations: [
			{ husky: 0, drawer: 14 },
			{ husky: 0, drawer: 18 }
		]
	},
	{
		name: 'Solenoid Valves',
		image: '/solenoid.svg',
		category: 'pneumatics',
		links: {
			vex: 'https://www.vexrobotics.com/spare-pneumatics.html',
			api: 'https://api.vex.com/v5/home/cpp/DigitalOut.html'
		},
		locations: [
			{ husky: 0, drawer: 14 },
			{ husky: 0, drawer: 18 }
		]
	},
	{
		name: 'Pressure Regulators',
		image: '/regulator.svg',
		category: 'pneumatics',
		links: { vex: 'https://www.vexrobotics.com/spare-pneumatics.html' },
		locations: [
			{ husky: 0, drawer: 14 },
			{ husky: 0, drawer: 18 }
		]
	},
	{
		name: 'Fittings and Connectors',
		image: '/fitting.svg',
		category: 'pneumatics',
		links: { vex: 'https://www.vexrobotics.com/spare-pneumatics.html' },
		locations: [
			{ husky: 0, drawer: 14 },
			{ husky: 0, drawer: 18 }
		]
	},
	{
		name: 'Star Drive Keys (T15)',
		image: '/driver-key.svg',
		category: 'toolsAndAccessories',
		links: {
			vex: 'https://www.vexrobotics.com/tools.html'
		},
		locations: [
			{ husky: 0, drawer: 5 },
			{ husky: 0, drawer: 8 }
		]
	},
	{
		name: 'Screwdrivers (T15)',
		image:
			'https://raw.githubusercontent.com/BreadSoup/Protobot-Rebuilt/refs/heads/main/Assets/Sprites/Tools%20Icons/Screwdriver%20Sprites/screwdriver-shape.png',
		category: 'toolsAndAccessories',
		links: {
			vex: 'https://www.vexrobotics.com/tools.html',
			robosource:
				'https://www.robosource.net/tools-robosource/star-torx-drive-tools/119-wiha-softfinish-star-screwdriver'
		},
		locations: [{ husky: 0, drawer: 5 }]
	},
	{
		name: 'Screwdrivers (Hex)',
		image:
			'https://raw.githubusercontent.com/BreadSoup/Protobot-Rebuilt/refs/heads/main/Assets/Sprites/Tools%20Icons/Screwdriver%20Sprites/screwdriver-shape.png',
		category: 'toolsAndAccessories',
		links: {
			vex: 'https://www.vexrobotics.com/tools.html',
			robosource: 'https://www.robosource.net/hex-drive-tools'
		},
		locations: [{ cabinet: 3, drawer: 2 }]
	},
	{
		name: 'Hex Drivers',
		image: '/driver-key.svg',
		category: 'toolsAndAccessories',
		links: {
			vex: 'https://www.vexrobotics.com/tools.html',
			robosource: 'https://www.robosource.net/hex-drive-tools'
		},
		locations: [{ cabinet: 3, drawer: 2 }]
	},
	{
		name: 'Wrenches',
		image:
			'https://raw.githubusercontent.com/BreadSoup/Protobot-Rebuilt/refs/heads/main/Assets/Sprites/wrench.png',
		category: 'toolsAndAccessories',
		links: {
			vex: 'https://www.vexrobotics.com/tools.html',
			robosource:
				'https://www.robosource.net/tools-robosource/nut-tools/233-9mm-wrench?search_query=wrench&results=45'
		},
		locations: [{ husky: 0, drawer: 5 }]
	},
	{
		name: 'Rubber Bands',
		image: '/rubber-band.svg',
		category: 'motion',
		links: {
			vex: 'https://www.vexrobotics.com/rubber-bands.html',
			robosource: 'https://www.robosource.net/rubber-bands'
		},
		locations: [{ cabinet: 3, drawer: 17 }]
	},
	{
		name: 'Zip Ties',
		image: '/zip-tie.svg',
		category: 'toolsAndAccessories',
		links: {
			vex: 'https://www.vexrobotics.com/zip-ties.html',
			robosource: 'https://www.robosource.net/zip-ties-rope-velcro'
		}
	}
];

export function GET() {
	return json(parts);
}
