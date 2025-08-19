<script>
	import { SignIn } from 'svelte-clerk';
	import { dark } from '@clerk/themes';
</script>

<main class="grid h-screen place-items-center">
	<SignIn
		appearance={{
			baseTheme: dark
		}}
	></SignIn>
</main>
