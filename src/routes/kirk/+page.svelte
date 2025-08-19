<script lang="ts">
	import { SignedIn } from 'svelte-clerk';
	import { useClerkContext } from 'svelte-clerk/client';
	import Request from '$lib/components/Request.svelte';

	// Do not destructure context to avoid losing reactivity
	const ctx = useClerkContext();

	const clerkAuth: any = $derived(ctx.auth);
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
				<Request></Request>
			</div>
		{:else}
			<h1>YOU'RE NOT KIRK</h1>
			<a href="/login">In case you are, please login first.</a>
		{/if}
	</SignedIn>
</main>
