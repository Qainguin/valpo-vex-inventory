<script lang="ts">
	import Fuzzy from 'svelte-fuzzy';

	let { query = $bindable(), parts, searchedParts = $bindable() } = $props();

	$effect(() => {
		$inspect(searchedParts);
	});
</script>

<input
	class="ml-auto h-fit rounded-lg border border-green-800 bg-transparent px-2 py-1 text-green-400 not-sm:w-full hover:border-green-700 focus:border-green-600 focus:ring-0 focus:outline-none"
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
