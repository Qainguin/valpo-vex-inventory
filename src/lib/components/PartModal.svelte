<script lang="ts">
	import { goto } from '$app/navigation';

	let { part = $bindable() } = $props();

	function capitalizeCamelCase(str: string) {
		if (!str) {
			return '';
		}

		const words = str
			.replace(/([A-Z0-9])/g, ' $1')
			.trim()
			.split(' ');

		return words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
	}

	function getHuskyDrawerBounds(drawer: number) {
		const drawerBounds: {
			[key: number]: { width: string; height: string; x: string; y: string };
		} = {
			0: { width: '105px', height: '13px', x: '0px', y: '0px' },
			1: { width: '290px', height: '13px', x: '115px', y: '0px' },
			2: { width: '105px', height: '13px', x: '415px', y: '0px' },
			3: { width: '105px', height: '10px', x: '0px', y: '18px' },
			4: { width: '290px', height: '10px', x: '115px', y: '18px' },
			5: { width: '105px', height: '10px', x: '415px', y: '18px' },
			6: { width: '105px', height: '10px', x: '0px', y: '33px' },
			7: { width: '290px', height: '10px', x: '115px', y: '33px' },
			8: { width: '105px', height: '10px', x: '415px', y: '33px' },
			9: { width: '105px', height: '15px', x: '0px', y: '48px' },
			10: { width: '290px', height: '40px', x: '115px', y: '48px' },
			11: { width: '105px', height: '15px', x: '415px', y: '48px' },
			12: { width: '105px', height: '20px', x: '0px', y: '68px' },
			13: { width: '105px', height: '20px', x: '415px', y: '68px' },
			14: { width: '105px', height: '20px', x: '0px', y: '93px' },
			15: { width: '142.5px', height: '20px', x: '115px', y: '93px' },
			16: { width: '142.5px', height: '20px', x: '262px', y: '93px' },
			17: { width: '105px', height: '20px', x: '415px', y: '93px' },
			18: { width: '105px', height: '42px', x: '0px', y: '118px' },
			19: { width: '142.5px', height: '20px', x: '115px', y: '118px' },
			20: { width: '142.5px', height: '20px', x: '262px', y: '118px' },
			21: { width: '105px', height: '42px', x: '415px', y: '118px' },
			22: { width: '142.5px', height: '18px', x: '115px', y: '143px' },
			23: { width: '142.5px', height: '18px', x: '262px', y: '143px' }
		};

		const bounds = drawerBounds[drawer];

		if (bounds) {
			console.log(bounds);
			return bounds;
		} else {
			// Handle cases where the drawer number is out of the defined range
			console.warn(`Bounds not defined for drawer number: ${drawer}`);
			// You might want to return a default set of bounds or throw an error
			return { width: '0px', height: '0px', x: '0px', y: '0px' };
		}
	}
</script>

{#if part}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div
		class="fixed top-0 left-0 z-5 grid h-screen w-screen place-items-center bg-zinc-900/40 text-white backdrop-blur-xs"
	>
		<div class="relative min-w-48 rounded-lg border border-zinc-800 bg-zinc-950 p-4">
			<button class="absolute top-0 right-0 m-4 w-4 cursor-pointer" onclick={() => (part = null)}
				><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
					><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path
						fill="#ffffff"
						d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
					/></svg
				></button
			>

			<h1>{part.name}</h1>

			<h2 class="text-zinc-400">
				{capitalizeCamelCase(part.category)}
				{#if part.locations && part.locations[0]}
					- {part.locations[0].husky > -1 && part.locations[0].husky < 3
						? 'Husky ' + part.locations[0].husky
						: 'Cabinet ' + part.locations[0].cabinet}
				{/if}
			</h2>
			{#if part.lengths}
				<h3 class="text-sm text-zinc-400">
					Lengths:
					{#each part.lengths as length, l}
						{length + (l !== part.lengths.length - 1 ? ', ' : '')}
					{/each}
				</h3>
			{/if}

			<div class="mb-1"></div>

			{#if part.locations}
				<div
					class={part.locations &&
					part.locations[0] &&
					part.locations[0].husky > -1 &&
					part.locations[0].husky < 3
						? 'relative'
						: 'relative h-90'}
				>
					{#each part.locations as location, l}
						{#if !location.cabinet && location.husky > -1}
							<div
								class="pulse absolute top-[9.5px] left-[10px] z-1 h-[13px] w-[105px] bg-green-400 opacity-50"
								style="width: {getHuskyDrawerBounds(location.drawer)
									?.width}; height: {getHuskyDrawerBounds(location.drawer)
									?.height};  transform: translate({getHuskyDrawerBounds(location.drawer)
									?.x}, {getHuskyDrawerBounds(location.drawer)?.y});"
							></div>

							{#if l === 0}
								<img
									width="540"
									src="/big-husky.svg"
									class="z-3"
									alt="Husky {location.husky}, Drawer {location.drawer}"
								/>
							{/if}
						{:else if location.cabinet !== -1}
							{#if location.drawer !== -1}
								<div
									class="pulse absolute top-[135px] left-[15px] z-1 h-[17.5px] w-[80px] bg-green-400 opacity-50"
									style="transform: translate({87 * (location.drawer % 3)}px, {Math.floor(
										location.drawer / 3
									) * 27.5}px); {location.drawer % 3 === 1
										? 'width: 76px; left: 17px;'
										: ''} {location.drawer % 3 === 2 ? 'width: 75px; left: 16px;' : ''}"
								></div>
							{:else}
								<div
									class="pulse absolute top-[14px] left-[15px] z-1 h-[111.5px] w-[250px] bg-green-400 opacity-50"
								></div>
							{/if}

							{#if l === 0}
								<img
									width="280"
									src="/cabinet.svg"
									class="z-3"
									alt="Cabinet {location.cabinet}, Drawer {location.drawer}"
								/>
							{/if}
						{/if}
					{/each}
				</div>
			{/if}

			{#if part.links}
				<div
					class="mt-2 flex flex-row gap-x-1 gap-y-1"
					style={part.locations &&
					part.locations[0] &&
					!(part.locations[0].husky > -1 && part.locations[0].husky < 3)
						? 'flex-direction: column; width: fit-content;'
						: ''}
				>
					{#if part.links.robosource}
						<button
							class="flex w-fit cursor-pointer flex-row items-center gap-2 rounded-lg bg-orange-500 px-2 py-1 text-black"
							onclick={() => (window.location = part.links.robosource)}
							>Order at <img width="180px" src="/robosource.png" /></button
						>
					{/if}
					{#if part.links.vex}
						<button
							class="flex w-fit cursor-pointer flex-row items-center gap-2 justify-self-end rounded-lg bg-white px-2 py-1 text-zinc-500"
							onclick={() => (window.location = part.links.vex)}
							>Order at <img width="64px" src="/vex.svg" /></button
						>
					{/if}
					{#if part.links.api}
						<button
							class="flex w-fit cursor-pointer flex-row items-center gap-2 justify-self-end rounded-lg bg-white px-2 py-1 text-zinc-500"
							onclick={() => (window.location = part.links.api)}
						>
							Implement at <img width="64px" src="/vex.svg" />
						</button>
					{/if}
				</div>
			{/if}
		</div>
	</div>
{/if}

<style>
	.pulse {
		animation: pulse 1s infinite;
	}

	@keyframes pulse {
		0% {
			opacity: 50%;
		}

		50% {
			opacity: 75%;
		}

		100% {
			opacity: 50%;
		}
	}
</style>
