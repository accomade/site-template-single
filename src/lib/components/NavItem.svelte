<script lang="ts">
	import { isMenuOpen } from '$lib/stores/menu.js';
	import { currentPage } from '$lib/stores/page.js';
	export let href:string

	$: isCurrentPage = $currentPage.startsWith(href)

	const maybeCloseMenu = () => {
		if (href != $currentPage) {
			isMenuOpen.set(false)
		}
	}
</script>


<li>
	<a
		href={href}
		on:click={maybeCloseMenu}
		class:active={isCurrentPage}
		aria-current={isCurrentPage ? 'page' : false}
	>
		<slot />
	</a>
</li>