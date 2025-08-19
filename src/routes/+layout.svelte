<script lang="ts">
	import '../app.css';
	import { PUBLIC_CONVEX_URL, PUBLIC_CLERK_PUBLISHABLE_KEY } from '$env/static/public';
	import { setupConvex } from 'convex-svelte';
	import { ClerkProvider } from 'svelte-clerk';

	const { children } = $props();
	setupConvex(PUBLIC_CONVEX_URL);
</script>

<ClerkProvider publishableKey={PUBLIC_CLERK_PUBLISHABLE_KEY}>
	{@render children()}
</ClerkProvider>
