<script lang="ts">
	import { SignedIn } from 'svelte-clerk';
	import { useClerkContext } from 'svelte-clerk/client';
	import { useConvexClient, useQuery } from 'convex-svelte';
	import TakeHomeModal from '$lib/components/TakeHomeModal.svelte';
	import { api } from '../../convex/_generated/api';
	import type { Id } from '../../convex/_generated/dataModel';
	import { goto } from '$app/navigation';
	import Request from '$lib/components/Request.svelte';

	const client = useConvexClient();

	// Do not destructure context to avoid losing reactivity
	const ctx = useClerkContext();

	const clerkAuth: any = $derived(ctx.auth);

	let query: any = $state(useQuery(api.requests.get, {}));

	let taking: boolean = $state(false);

	$effect(() => {
		if (clerkAuth.user) {
			query = useQuery(api.requests.get, {
				email: clerkAuth.user.primaryEmailAddress.emailAddress
			});
		}
	});
</script>

<main class="text-primary-accent h-screen p-4">
	<SignedIn>
		<div class="border-secondary-accent flex w-full flex-row gap-2 border-b pb-2 not-sm:flex-col">
			<h1 class="text-3xl">Requests</h1>

			<button
				class="hover:border-hover-accent active:border-focus-accent border-primary-accent ml-auto min-w-16 cursor-pointer rounded-lg border px-2 py-1 not-sm:w-full not-sm:text-lg"
				onclick={() => (taking = true)}>Take Home</button
			>
			<button
				class="hover:border-hover-accent active:border-focus-accent border-primary-accent min-w-16 cursor-pointer rounded-lg border px-2 py-1 not-sm:w-full not-sm:text-lg"
				onclick={() => goto('/')}
			>
				Back
			</button>
		</div>

		<div class="mt-2 flex flex-col gap-2">
			{#if query.data}
				{#each query.data as item}
					<Request data={item}></Request>
				{/each}
			{/if}
		</div>

		{#if taking}
			<TakeHomeModal bind:taking></TakeHomeModal>
		{/if}
	</SignedIn>
</main>
