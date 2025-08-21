<script>
	import { onMount } from 'svelte';

	let { data } = $props();

	let dateText = $state('');

	onMount(() => {
		const requestDate = new Date(data._creationTime);
		dateText = requestDate.getMonth() + 1 + '/' + requestDate.getDate();
	});
</script>

<div class="flex flex-row items-center gap-2">
	<p>{data.name.first} {data.name.last} - {data.reason} - {dateText}</p>
	{#if data.state === ''}
		<div class="border-primary-accent aspect-square w-8 rounded-lg border"></div>
	{:else if data.state === 'accepted'}
		<div class="border-primary-accent bg-primary-accent aspect-square w-8 rounded-lg border"></div>
	{:else if data.state === 'denied'}
		<div class="aspect-square w-8 rounded-lg border border-red-400 bg-red-400"></div>
	{/if}
</div>
