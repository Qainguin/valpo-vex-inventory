<script lang="ts">
	import Fuzzy from 'svelte-fuzzy';

	let { query = $bindable(), parts, searchedParts = $bindable() } = $props();
</script>

<input
	class="text-primary-accent hover:border-hover-accent border-primary-accent focus:border-focus-accent h-fit rounded-lg border bg-transparent px-2 py-1 not-sm:w-full not-sm:text-center focus:ring-0 focus:outline-none"
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
