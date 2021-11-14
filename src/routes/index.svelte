<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import Contributors from '$lib/Contributors.svelte';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<main>
	<Contributors contributors={['abdolian']}/>
	<ul>
		<li class:active={$page.path === '/'}>
			<a sveltekit:prefetch href="/">Home</a>
		</li>
	</ul>
</main>