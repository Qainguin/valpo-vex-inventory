<script>
	import { useConvexClient } from 'convex-svelte';
	import { api } from '../../convex/_generated/api';
	const client = useConvexClient();

	let { taking = $bindable() } = $props();

	let firstName = $state('');
	let lastName = $state('');
	let reason = $state('');
	let email = $state('');

	async function sendTakeHome() {
		if (firstName && lastName && reason && email) {
			taking = false;
			// Send the data to the server or handle it as needed
			// @ts-ignore
			const response = await fetch('/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: `{ "reason": "${reason}", "firstName": "${firstName}", "lastName": "${lastName}", "email": "${email}" }`
			});
		} else {
			alert('Please fill in all fields.');
		}
	}
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
	<div
		class="relative flex w-full max-w-md flex-col rounded-lg border border-zinc-800 bg-zinc-950 p-4 text-green-400"
	>
		<button class="absolute top-0 right-0 m-4 w-4 cursor-pointer" onclick={() => (taking = false)}
			><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"
				><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path
					fill="#05df72"
					d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
				/></svg
			></button
		>

		<h1 class="pb-1">Take Home</h1>

		<label for="firstName" class="text-md py-1">First Name</label>
		<input
			bind:value={firstName}
			id="firstName"
			type="name"
			placeholder="John"
			class="rounded-md border border-green-800 bg-zinc-950 px-2 py-1 text-sm hover:border-green-700 focus:border-green-600 focus:outline-none"
		/>

		<label for="lastName" class="text-md py-1">Last Name</label>
		<input
			bind:value={lastName}
			id="lastName"
			type="name"
			placeholder="Winland"
			class="rounded-md border border-green-800 bg-zinc-950 px-2 py-1 text-sm hover:border-green-700 focus:border-green-600 focus:outline-none"
		/>

		<label for="reason" class="text-md py-1">Reason</label>
		<input
			bind:value={reason}
			id="reason"
			type="name"
			placeholder="I need to take the robot home to fix..."
			class="rounded-md border border-green-800 bg-zinc-950 px-2 py-1 text-sm hover:border-green-700 focus:border-green-600 focus:outline-none"
		/>

		<label for="email" class="text-md py-1">Email</label>
		<input
			bind:value={email}
			id="email"
			type="name"
			placeholder="id@valpo.k12.in.us"
			class="rounded-md border border-green-800 bg-zinc-950 px-2 py-1 text-sm hover:border-green-700 focus:border-green-600 focus:outline-none"
		/>

		<button
			class="-xl mt-3 w-fit
    cursor-pointer rounded bg-zinc-50 px-2 py-1 text-black hover:bg-zinc-100 active:bg-zinc-200"
			onclick={sendTakeHome}>Send</button
		>
	</div>
</div>
