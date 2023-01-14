<script>
	import { isMenuOpen } from '$lib/stores/menu'
	import NavItem from './NavItem.svelte'
	import HamburgerMenuButton from './HamburgerMenuButton.svelte'

	const navItems = [
		{
			route: "/there",
			title: "Title There"
		},
		{
			route: "/here",
			title: "Title Here"
		},
	]
</script>

<!-- Contents of this file will be used in the header and the responsive hamburger menu. -->
<nav class="main-nav" class:open={$isMenuOpen}>
	<ul>
		{#each navItems as page}
		<NavItem href={page.route}>
			{page.title}
		</NavItem>
		{/each}
	</ul>
	<HamburgerMenuButton closeOnly=true />
</nav>