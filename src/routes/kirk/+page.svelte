<script lang="ts">
	import { SignedIn } from 'svelte-clerk';
	import { useClerkContext } from 'svelte-clerk/client';
	import Request from '$lib/components/Request.svelte';
	import { useQuery } from 'convex-svelte';
	import { api } from '../../convex/_generated/api';
	import { useMutation } from 'convex/react';
	import type { Id } from '../../convex/_generated/dataModel';

	// Do not destructure context to avoid losing reactivity
	const ctx = useClerkContext();

	const clerkAuth: any = $derived(ctx.auth);
	const handleRequest = useMutation(api.requests.handleRequest);

	let query = useQuery(api.requests.get, {});
</script>

<main class="h-screen p-4 text-green-400">
	<SignedIn>
		{#if clerkAuth.user.primaryEmailAddress.emailAddress === 'jkirk@valpo.k12.in.us' || clerkAuth.user.primaryEmailAddress.emailAddress === '3226050@valpo.k12.in.us'}
			<h1
				class="w-full border-green-700 pb-2 text-3xl"
				style="border-bottom: 1px solid var(--color-green-700);"
			>
				Requests
			</h1>

			<div class="mt-2 flex flex-col gap-2">
				{#if query.data}
					{#each query.data as item}
						<div class="flex flex-row items-center gap-2">
							<p>{item.name.first} {item.name.last} - {item.reason}</p>

							<button
								class="aspect-square cursor-pointer rounded-lg border border-green-400 fill-green-400 p-2 hover:bg-green-400 hover:fill-black active:bg-green-500"
								onclick={() =>
									handleRequest({ accepted: true, requestId: item._id as Id<'requests'> })}
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 640 640">
									<!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
									<path
										d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
									/>
								</svg>
							</button>
							<button
								class="aspect-square cursor-pointer rounded-lg border border-red-400 fill-red-400 p-2 hover:bg-red-400 hover:fill-black active:bg-red-500"
								onclick={() =>
									handleRequest({ accepted: false, requestId: item._id as Id<'requests'> })}
							>
								<svg xmlns="http://www.w3.org/2000/svg" width="16" viewBox="0 0 640 640">
									<!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
									<path
										d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z"
									/>
								</svg>
							</button>
						</div>
					{/each}
				{/if}
			</div>
		{:else}
			<h1>YOU'RE NOT KIRK</h1>
			<a href="/login">In case you are, please login first.</a>
		{/if}
	</SignedIn>
</main>
