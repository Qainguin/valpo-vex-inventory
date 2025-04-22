<script lang="ts">
	import Fuzzy from 'svelte-fuzzy';

	let { query = $bindable(), parts, searchedParts = $bindable() } = $props();

	$effect(() => {
		$inspect(searchedParts);
	});
</script>

<input
	class="absolute top-0 right-0 m-4 rounded-lg border border-green-800 bg-transparent px-2 py-1 text-green-400 hover:border-green-700 focus:border-green-600 focus:ring-0 focus:outline-none"
	placeholder="Search"
	bind:value={query}
/>

<Fuzzy {query} data={parts} options={{ keys: ['name'] }} bind:formatted={searchedParts}></Fuzzy>
