<script lang="ts">
	import { SignedIn } from 'svelte-clerk';
	import { useClerkContext } from 'svelte-clerk/client';
	import { useConvexClient, useQuery } from 'convex-svelte';
	import { api } from '../../convex/_generated/api';
	import type { Id } from '../../convex/_generated/dataModel';
	import { goto } from '$app/navigation';

	const client = useConvexClient();

	// Do not destructure context to avoid losing reactivity
	const ctx = useClerkContext();

	const clerkAuth: any = $derived(ctx.auth);

	let query: any = $state(useQuery(api.requests.get, {}));

	$effect(() => {
		$inspect(clerkAuth);
		if (clerkAuth.user) {
			query = useQuery(api.requests.get, {
				email: clerkAuth.user.primaryEmailAddress.emailAddress
			});
		}
	});
</script>

<main class="text-primary-accent h-screen p-4">
	<SignedIn>
		<div class="border-secondary-accent flex w-full flex-row border-b pb-2">
			<h1 class="text-3xl">Requests</h1>
			<button class="ml-auto cursor-pointer" onclick={() => goto('/')}>
				<svg
					class="fill-primary-accent"
					width="32"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 640 640"
					><!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path
						d="M341.8 72.6C329.5 61.2 310.5 61.2 298.3 72.6L74.3 280.6C64.7 289.6 61.5 303.5 66.3 315.7C71.1 327.9 82.8 336 96 336L112 336L112 512C112 547.3 140.7 576 176 576L464 576C499.3 576 528 547.3 528 512L528 336L544 336C557.2 336 569 327.9 573.8 315.7C578.6 303.5 575.4 289.5 565.8 280.6L341.8 72.6zM304 384L336 384C362.5 384 384 405.5 384 432L384 528L256 528L256 432C256 405.5 277.5 384 304 384z"
					/></svg
				>
			</button>
		</div>

		<div class="mt-2 flex flex-col gap-2">
			{#if query.data}
				{#each query.data as item}
					<div class="flex flex-row items-center gap-2">
						<p>{item.name.first} {item.name.last} - {item.reason}</p>
						{#if item.state === ''}
							<div class="border-primary-accent aspect-square w-8 rounded-lg border"></div>
						{:else if item.state === 'accepted'}
							<div
								class="border-primary-accent bg-primary-accent aspect-square w-8 rounded-lg border"
							></div>
						{:else if item.state === 'denied'}
							<div class="aspect-square w-8 rounded-lg border border-red-400 bg-red-400"></div>
						{/if}
					</div>
				{/each}
			{/if}
		</div>
	</SignedIn>
</main>
