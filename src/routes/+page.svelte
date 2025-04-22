<script lang="ts">
	import type { Part } from '$lib/types';

	import PartModal from '$lib/components/PartModal.svelte';
	import Search from '$lib/components/Search.svelte';
	import { onMount } from 'svelte';

	let { data } = $props();

	const ICONS =
		'https://raw.githubusercontent.com/BreadSoup/Protobot-Rebuilt/1c67dc53e3ab3edfcfb878349bbb048cf4cf168e/Assets/Sprites/Packet%20Icons/';

	const PARTS = data.item;

	let filter: { category: string } = $state({ category: '' });

	let parts: Part[] = $state(data.item);

	let searchedParts: any = $state([]);

	let categories: Array<string> = $derived(getAllCategories(parts));

	let selectedPart: Part | null = $state(null);

	function getAllCategories(partsToSearch: Array<Part>) {
		const categories: Set<string> = new Set();
		for (const part of partsToSearch) {
			categories.add(part.category);
		}
		return Array.from(categories).sort();
	}

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

	function getPartImage(partName: string) {
		const part = findPart(partName);
		if (part?.image?.startsWith('/') || part?.image?.startsWith('https')) {
			return part.image;
		} else if (!part?.image) {
			return '/unknown.svg';
		} else {
			return ICONS + part?.image;
		}
	}

	function findPart(name: string) {
		const part = parts.find((part) => part.name === name);
		if (part) return part;
		return null;
	}

	function combineText(line: any) {
		let fullLine = '';
		line.forEach((part: any) => {
			fullLine += part.text;
		});
		return fullLine;
	}
</script>

<nav class="w-full bg-zinc-950 p-4 pb-0 text-green-400">
	<h1 class="border-green-700 pb-2 text-3xl">Valpo Voltage V5 Directory</h1>
	<div class="xs:text-2xs mb-2 flex flex-row gap-2 border-y border-green-700 py-2 not-sm:text-xs">
		{#each categories as category, c}
			{#if filter.category === category}
				<button
					class="cursor-pointer rounded-full border border-green-400 bg-green-400 px-3 py-1 text-black hover:border-green-500 hover:bg-green-500"
					onclick={() => (filter.category = '')}>{capitalizeCamelCase(category)}</button
				>
			{:else}
				<button
					class="cursor-pointer rounded-full border border-green-400 px-3 py-1 transition-colors hover:border-green-900 hover:bg-green-900"
					onclick={() => (filter.category = category)}>{capitalizeCamelCase(category)}</button
				>
			{/if}
		{/each}
	</div>
</nav>

<main class="bg-zinc-950 p-4 pt-0 text-green-400">
	<div class="flex flex-col gap-2">
		{#if searchedParts.length > 0}
			{#each searchedParts as item}
				{#each item as line}
					{#if !filter.category || filter.category === findPart(combineText(line))?.category}
						<div class="flex flex-row gap-2">
							{#if getPartImage(combineText(line))}
								<img
									class="aspect-square w-6"
									width="24"
									height="24"
									src={getPartImage(combineText(line))}
								/>
							{/if}
							<button
								class="cursor-pointer hover:underline"
								onclick={() => (selectedPart = findPart(combineText(line)))}
								>{combineText(line)}</button
							>
						</div>
					{/if}
				{/each}
			{/each}
		{:else}
			{#each parts as part}
				{#if !filter.category || part.category === filter.category}
					<div class="flex flex-row gap-2">
						<img class="aspect-square w-6" height="24" width="24" src={getPartImage(part.name)} />
						<button class="cursor-pointer hover:underline" onclick={() => (selectedPart = part)}
							>{part.name}</button
						>
					</div>
				{/if}
			{/each}
		{/if}
	</div>
</main>

<PartModal bind:part={selectedPart}></PartModal>

<Search bind:searchedParts {parts}></Search>

<style>
	:global(body) {
		background: var(--color-zinc-950);
	}
</style>
