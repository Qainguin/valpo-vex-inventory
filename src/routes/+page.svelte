<script lang="ts">
	import type { Part } from '$lib/types';

	import PartModal from '$lib/components/PartModal.svelte';
	import Search from '$lib/components/Search.svelte';
	import { onMount } from 'svelte';

	import { useQuery } from 'convex-svelte';
	import { api } from '../convex/_generated/api.js';
	import TakeHomeModal from '$lib/components/TakeHomeModal.svelte';
	import { goto } from '$app/navigation';
	import { SignedIn, SignedOut } from 'svelte-clerk';
	import { useClerkContext } from 'svelte-clerk/client';

	// Do not destructure context to avoid losing reactivity
	const ctx = useClerkContext();

	const clerkAuth: any = $derived(ctx.auth);

	const query = useQuery(api.parts.get, {});

	const ICONS =
		'https://raw.githubusercontent.com/BreadSoup/Protobot-Rebuilt/1c67dc53e3ab3edfcfb878349bbb048cf4cf168e/Assets/Sprites/Packet%20Icons/';

	const PARTS = query.data;

	let filter: { category: string } = $state({ category: '' });

	let parts: Part[] | undefined = $state(query.data);

	let searchedParts: any = $state([]);

	let categories: Array<string> = $state([
		'motion',
		'electronics',
		'pneumatics',
		'structure',
		'toolsAndAccessories'
	]);

	let selectedPart: Part | null | undefined = $state(null);

	let taking: boolean = $state(false);

	function getAllCategories(partsToSearch: Array<Part> | undefined) {
		if (!partsToSearch) return [];
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
		if (!parts) return;
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

	$effect(() => {
		if (!query.data) return;
		parts = query.data;
	});

	$effect(() => {
		$inspect(clerkAuth);
		if (clerkAuth.userId) {
			if (
				clerkAuth.user.primaryEmailAddress.emailAddress === 'jkirk@valpo.k12.in.us' ||
				clerkAuth.user.primaryEmailAddress.emailAddress === '3226050@valpo.k12.in.us'
			) {
				console.log('OMG ITS KIRK');
			}
		}
	});
</script>

<nav class="w-full bg-zinc-950 p-4 pb-0 text-green-400">
	<div class="mb-2 flex flex-row items-center gap-2 not-sm:flex-col">
		<h1 class="border-green-700 pb-2 text-3xl">Voltage V5 Directory</h1>
		<div class="ml-auto flex flex-row gap-2 not-sm:w-full not-sm:flex-col">
			<SignedOut>
				<button
					class="min-w-20 cursor-pointer rounded-lg border border-green-800 px-2 py-1 not-sm:w-full not-sm:text-lg hover:border-green-700 active:border-green-600"
					onclick={() => {
						goto('/login');
					}}>Log In</button
				>
			</SignedOut>
			<SignedIn>
				{#if clerkAuth.user.primaryEmailAddress.emailAddress === 'jkirk@valpo.k12.in.us' || clerkAuth.user.primaryEmailAddress.emailAddress === '3226050@valpo.k12.in.us'}
					<button
						class="min-w-16 cursor-pointer rounded-lg border border-green-800 px-2 py-1 not-sm:w-full not-sm:text-lg hover:border-green-700 active:border-green-600"
						onclick={() => goto('/kirk')}>KIRK</button
					>
				{/if}
				<button
					class="min-w-26.5 cursor-pointer rounded-lg border border-green-800 px-2 py-1 not-sm:w-full not-sm:text-lg hover:border-green-700 active:border-green-600"
					onclick={() => (taking = true)}>Take Home</button
				>
			</SignedIn>

			<Search bind:searchedParts {parts}></Search>
		</div>
	</div>

	<div class="mb-2 flex flex-col gap-1 border-y border-green-700 py-2 not-sm:text-xs">
		<div class="m-1 flex flex-col gap-2 not-sm:text-lg sm:flex-row">
			{#each categories as category, c}
				{#if filter.category === category}
					<button
						class="cursor-pointer rounded-full border border-green-400 bg-green-400 px-3 py-1 text-black hover:border-green-500 hover:bg-green-500"
						onclick={() => (filter.category = '')}
						>{#if category !== 'toolsAndAccessories'}{capitalizeCamelCase(
								category
							)}{:else}Tools{/if}</button
					>
				{:else}
					<button
						class="cursor-pointer rounded-full border border-green-400 px-3 py-1 transition-colors hover:border-green-900 hover:bg-green-900"
						onclick={() => (filter.category = category)}
						>{#if category !== 'toolsAndAccessories'}{capitalizeCamelCase(
								category
							)}{:else}Tools{/if}</button
					>
				{/if}
			{/each}
		</div>
	</div>
</nav>

{#if query.isLoading}
	Loading...
{:else if query.error}
	failed to load: {query.error.toString()}
{:else}
	<main class="bg-zinc-950 p-4 pt-0 text-green-400">
		<div class="flex flex-col gap-2">
			{#key searchedParts}
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
											style="filter: brightness(80%) sepia(100) saturate(75) hue-rotate(60deg);"
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
				{:else if parts}
					{#each parts as part}
						{#if !filter.category || part.category === filter.category}
							<div class="flex flex-row gap-2">
								<img
									class="aspect-square w-6"
									style="filter: brightness(80%) sepia(100) saturate(75) hue-rotate(60deg);"
									height="24"
									width="24"
									src={getPartImage(part.name)}
								/>
								<button class="cursor-pointer hover:underline" onclick={() => (selectedPart = part)}
									>{part.name}</button
								>
							</div>
						{/if}
					{/each}
				{/if}
			{/key}
		</div>
	</main>

	<PartModal bind:part={selectedPart}></PartModal>

	{#if taking}
		<TakeHomeModal bind:taking></TakeHomeModal>
	{/if}
{/if}

<style>
	:global(body) {
		background: var(--color-zinc-950);
	}
</style>
