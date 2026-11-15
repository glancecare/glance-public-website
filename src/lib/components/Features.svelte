<script>
	export let features;
	export let direction = 'left';
</script>

<section class="container mt-6 mb-6">
	<div class="columns">
		<div class="column is-half"></div>
		<div class="column is-half">
			<ul class={direction === 'right' ? 'right' : 'left'}>
				{#each features as feature}
					<li>
						<span class="icon">
							<svelte:component this={feature.icon} />
						</span>
						<span class="has-text-weight-medium">{feature.title}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</section>

<style lang="scss" scoped>
	$primary-light: var(--glc-primary-100);
	ul {
		list-style-type: none;

		li {
			display: flex;
			align-items: center;
			margin-bottom: 1rem;
			background-color: color-mix(in srgb, var(--glc-primary-100) 30%, transparent);
			border: 1px solid var(--glc-primary-200);
			border-radius: var(--bulma-radius-medium);
			padding: calc(var(--bulma-block-spacing) / 2);
			box-shadow: 0 0 10px 10px var(--bulma-primary-100);

			.icon {
				margin-right: 1rem;
				padding: calc(var(--bulma-block-spacing) / 3);
				font-size: 1.5rem;
				box-sizing: content-box;
				border-radius: var(--bulma-radius-small);
				background-color: var(--glc-primary-100);
				color: var(--bulma-primary);

				:global(svg) {
					width: 1.5rem;
					height: fit-content;
				}
			}

			&:not(:last-child, :first-child)::before {
				content: '';
				position: absolute;
				background-color: var(--bulma-primary-85);
				z-index: -1;
			}

			&::after {
				content: '';
				position: absolute;
				background-color: var(--bulma-primary-100);
				z-index: -1;
			}
		}

		&::before {
			position: absolute;
			content: '';
			border-color: var(--bulma-primary-85);
			z-index: -2;
		}

		&.left {
			margin-left: var(--bulma-block-spacing);
			display: block;
			position: relative;
			z-index: 1;

			&::before {
				top: calc(var(--bulma-block-spacing) * 1.2);
				left: calc(var(--bulma-block-spacing) * -1);
				bottom: calc(var(--bulma-block-spacing) * 1.2);
				width: 50%;
				border-width: calc(var(--bulma-block-spacing) / 3);
				border-radius: var(--bulma-radius-medium);
				border-style: solid;
				border-right: 0px;
			}

			li {
				position: relative;

				&:not(:last-child, :first-child)::before {
					top: calc(var(--bulma-block-spacing) * 1.2);
					left: calc(var(--bulma-block-spacing) * -1);
					width: calc(var(--bulma-block-spacing) * 1);
					height: calc(var(--bulma-block-spacing) / 3);
				}

				&::after {
					top: 0;
					left: -1px;
					right: -1px;
					bottom: 0;
				}
			}
		}

		&.right {
			margin-right: var(--bulma-block-spacing);
			display: block;
			position: relative;
			z-index: 1;

			&::before {
				top: calc(var(--bulma-block-spacing) * 1.2);
				right: calc(var(--bulma-block-spacing) * -1);
				bottom: calc(var(--bulma-block-spacing) * 1.2);
				width: 50%;
				border-width: calc(var(--bulma-block-spacing) / 3);
				border-radius: var(--bulma-radius-medium);
				border-style: solid;
				border-left: 0px;
			}

			li {
				position: relative;

				&:not(:last-child, :first-child)::before {
					top: calc(var(--bulma-block-spacing) * 1.2);
					right: calc(var(--bulma-block-spacing) * -1);
					width: calc(var(--bulma-block-spacing) * 1);
					height: calc(var(--bulma-block-spacing) / 3);
				}

				&::after {
					top: 0;
					left: -1px;
					right: -1px;
					bottom: 0;
				}
			}
		}
	}

	:global(html[data-theme='dark']) {
		ul {
			&::before,
			&::after {
				border-color: var(--bulma-primary-25);
			}

			li {
				background-color: var(--bulma-primary-15);
				border: 1px solid var(--bulma-primary-25);
				box-shadow: 0 0 10px 10px var(--bulma-primary-00);

				.icon {
					background-color: var(--bulma-primary-10);
					color: var(--bulma-primary);
				}

				&::before {
					background-color: var(--bulma-primary-25);
				}
			}
		}
	}
</style>
