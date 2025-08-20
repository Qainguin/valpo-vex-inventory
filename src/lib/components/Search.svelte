<script lang="ts">
	import Fuzzy from 'svelte-fuzzy';

	let { query = $bindable(), parts, searchedParts = $bindable() } = $props();

	$effect(() => {
		$inspect(searchedParts);
	});
</script>

<input
	class="text-primary-accent hover:border-secondary-accent h-fit rounded-lg border border-primary-accent bg-transparent px-2 py-1 not-sm:w-full not-sm:text-center focus:border-secondary-accent focus:ring-0 focus:outline-none"
	placeholder="Search"
	bind:value={query}
/>

<Fuzzy
	{query}
	data={parts}
	options={{
		keys: ['name'],
		threshold: 0.3
	}}
	bind:formatted={searchedParts}
></Fuzzy>
