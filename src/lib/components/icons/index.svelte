<script lang="ts">
	import LinkedIn from './LinkedIn.svelte';
	import Twitter from './Twitter.svelte';
	import Check from './check.svelte';
	import Map from './map.svelte';
	import ProveCheck from './proveCheck.svelte';
	import Award from './award.svelte';
	import Message from './message.svelte';
	import Facebook from './facebook.svelte';
	import Link from './link.svelte';
	import File from './file.svelte';
	import Loaction from './loaction.svelte';
	import Save from './save.svelte';
	import Job from './job.svelte';
	import Skill from './skill.svelte';
	import Share from './share.svelte';
	import SaveOutline from './saveOutline.svelte';
	import JobOutline from './jobOutline.svelte';
	import Chart from './chart.svelte';
	import FileSearch from './fileSearch.svelte';
	import Guard from './guard.svelte';
	import Medical from './medical.svelte';
	import Revenue from './revenue.svelte';
	import Team from './Team.svelte';
	import Rocket from './rocket.svelte';
	import Cost from './cost.svelte';
	import Improved from './improved.svelte';
	import DonutChart from './donutChart.svelte';
	import Growth from './growth.svelte';
	import Pathway from './pathway.svelte';
	import Pharmacy from './pharmacy.svelte';
	import Support from './support.svelte';
	import Educational from './educational.svelte';
	import Code from './code.svelte';
	import Web from './web.svelte';
	import Analysis from './analysis.svelte';
	import M from './m.svelte';
	import Instagram from './instagram.svelte';
	import Menu from './menu.svelte';
	import Dot from './dot.svelte';
	import User from './user.svelte';
	import Mail from './mail.svelte';
	import Business from './business.svelte';
	import Puzzle from './puzzle.svelte';
	import SuiteCase from './suiteCase.svelte';
	import Phone from './phone.svelte';
	import Heart from './heart.svelte';
	import Accuracy from './accuracy.svelte';
	import Impacted from './impacted.svelte';
	import Logo from './logo.svelte';
	import EmailAt from './email-at.svelte';
	import Dna from './dna.svelte';
	import Pencil from './pencil.svelte';
	import Pulse from './pulse.svelte';
	import Book from './book.svelte';
	import DownArrow from './down-arrow.svelte';
	import UpArrow from './up-arrow.svelte';
	import Magic from './magic.svelte';
	import Infinity from './infinity.svelte';
	export let name: any = '';
	export let color: string = '';
</script>

<div>
	{#if name === 'twitter'}
		<Twitter {color} />
	{:else if name === 'linkedIn'}
		<LinkedIn {color} />
	{:else if name === 'check'}
		<Check />
	{:else if name === 'map'}
		<Map />
	{:else if name === 'proveCheck'}
		<ProveCheck />
	{:else if name === 'award'}
		<Award />
	{:else if name === 'message'}
		<Message />
	{:else if name === 'facebook'}
		<Facebook {color} />
	{:else if name === 'link'}
		<Link {color} />
	{:else if name === 'file'}
		<File />
	{:else if name === 'location'}
		<Loaction />
	{:else if name === 'save'}
		<Save />
	{:else if name === 'job'}
		<Job />
	{:else if name === 'skill'}
		<Skill />
	{:else if name === 'share'}
		<Share />
	{:else if name === 'saveOutline'}
		<SaveOutline />
	{:else if name === 'jobOutline'}
		<JobOutline />
	{:else if name === 'chart'}
		<Chart />
	{:else if name === 'fileSearch'}
		<FileSearch />
	{:else if name === 'guard'}
		<Guard />
	{:else if name === 'medical'}
		<Medical />
	{:else if name === 'revenue'}
		<Revenue />
	{:else if name === 'team'}
		<Team />
	{:else if name === 'rocket'}
		<Rocket />
	{:else if name === 'cost'}
		<Cost />
	{:else if name === 'improved'}
		<Improved />
	{:else if name === 'growth'}
		<Growth />
	{:else if name === 'donutChart'}
		<DonutChart />
	{:else if name === 'pathway'}
		<Pathway />
	{:else if name === 'pharmacy'}
		<Pharmacy />
	{:else if name === 'support'}
		<Support />
	{:else if name === 'educational'}
		<Educational />
	{:else if name === 'code'}
		<Code />
	{:else if name === 'web'}
		<Web />
	{:else if name === 'analysis'}
		<Analysis />
	{:else if name === 'instagram'}
		<Instagram {color} />
	{:else if name === 'm'}
		<M {color} />
	{:else if name === 'menu'}
		<Menu />
	{:else if name === 'dot'}
		<Dot />
	{:else if name === 'user'}
		<User />
	{:else if name === 'mail'}
		<Mail />
	{:else if name === 'business'}
		<Business />
	{:else if name === 'puzzle'}
		<Puzzle />
	{:else if name === 'suiteCase'}
		<SuiteCase />
	{:else if name === 'phone'}
		<Phone />
	{:else if name === 'accuracy'}
		<Accuracy />
	{:else if name === 'heart'}
		<Heart />
	{:else if name === 'impacted'}
		<Impacted />
	{:else if name === 'logo'}
		<Logo {color} />
	{:else if name === 'email-at'}
		<EmailAt />
	{:else if name === 'dna'}
		<Dna />
	{:else if name === 'pencil'}
		<Pencil />
	{:else if name === 'pulse'}
		<Pulse />
	{:else if name === 'book'}
		<Book />
	{:else if name === 'down-arrow'}
		<DownArrow />
	{:else if name === 'up-arrow'}
		<UpArrow />
	{:else if name === 'magic'}
		<Magic />
	{:else if name === 'infinity'}
		<Infinity />
	{:else}
		<!-- <LinkedIn {color} /> -->
	{/if}
</div>
