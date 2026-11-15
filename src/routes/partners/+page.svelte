<script lang="ts">
	import PartnerInnovate from '$lib/components/comonSection/Innovate.svelte';

	import Breadcrumb from '$lib/components/Breadcrumb.svelte';
	import Heading from '$lib/components/typography/Heading.svelte';
	import HeroImg from '$lib/images/g1.svg';
	import SubHeading from '$lib/components/typography/SubHeading.svelte';
	import Title from '$lib/components/typography/Title.svelte';
	import Para from '$lib/components/typography/Para.svelte';
	import TeamBox from '$lib/components/boxes/TeamBox.svelte';
	import PanterImg from '$lib/images/partner1.svg';
	import Img from '$lib/images/partner2.svg';
	import RevenueImg from '$lib/images/hometab3.jpg';

	const teamBoxes = [
		{
			title: 'Advanced CDSS',
			description: 'Real-time decision support at the point of care.',
			icon: 'check'
		},
		{
			title: 'Advance RCM solutions',
			description: 'Effortless review, maximized reimbursement.',
			icon: 'check'
		},
		{
			title: 'Advanced CDI solutions',
			description: 'Clearer records, optimal coding.',
			icon: 'check'
		},
		{
			title: 'Health Business Analytics',
			description: 'Data-driven insights for better outcomes',
			icon: 'check'
		}
	];
	const items = [
		{
			title: 'Automated adjudication',
			description:
				'Prior Authorization and Medical Claim auto-adjudication streamline workflows and speed up approvals.',
			icon: 'check'
		},
		{
			title: 'Data-Driven Insights',
			description:
				'Unlock the power of data analytics to identify trends, optimize operations, and impress clients.',
			icon: 'check'
		},
		{
			title: 'Fight Fraud & Abuse',
			description:
				'Advanced anti-abuse measures safeguard your clients from improper claims and ensure accurate payouts.',
			icon: 'check'
		}
	];
	const RevenueItems = [
		{
			title: 'Medical Claims Auditing',
			description:
				'Identify missing or inaccurate data with our automated auditing solution. This leads to cleaner claims and faster reimbursements.',
			icon: 'check'
		},
		{
			title: 'Clinical Documentation Improvement (CDI)',
			description:
				'Empower clear and complete documentation with our CDI tools. This translates to proper coding and optimal revenue capture.',
			icon: 'check'
		},
		{
			title: 'Business Analytics',
			description:
				'Gain valuable insights into coding trends and resource allocation with our analytics platform. This helps RCM vendors optimize workflows and maximize revenue for their clients.',
			icon: 'check'
		}
	];
</script>

<svelte:head>
	<title>Partner with Glance | Enhance Your Health Information System</title>
	<meta
		name="description"
		content="Collaborate with Glance Care and lead the way in healthcare innovation. Discover partnership opportunities today."
	/>
</svelte:head>

<div>
	<div
		class="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center lg:py-20 py-6 px-6 lg:px-0"
	>
		<div>
			<div class="flex flex-col gap-6">
				<div>
					<Breadcrumb />
				</div>
				<div>
					<Heading>Partnership</Heading>
				</div>
				<div>
					<Para font="medium">
						Fostering Dynamic Healthcare Partnerships for Collaborative Innovation and Impactful
						Solutions
					</Para>
				</div>
			</div>
		</div>
		<div class="hidden lg:block">
			<div class="flex justify-end">
				<img src={HeroImg} alt="" />
			</div>
		</div>
	</div>
	<div class="container mx-auto flex flex-col lg:gap-20 gap-10 lg:py-20 py-10 px-6 lg:px-0">
		<div class="lg:space-y-6 space-y-2 text text-center">
			<div class="space-y-2">
				<Title>Partners</Title>
				<SubHeading textAlign="text-center">Health information systems vendors</SubHeading>
			</div>
			<div>
				<p class="lg:text-lg text-base font-normal !leading-[24px] text-[#343A40]">
					Supercharge your Health Information System (HIS) with our integrated solutions.
				</p>
			</div>
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-[60px] gap-10 items-center">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 order-2 lg:order-1">
				{#each teamBoxes as box}
					<TeamBox
						title={box.title}
						description={box.description}
						icon={box.icon}
						subtitleColor="text-[#6C757D]"
						leading="!leading-[24px]"
					/>
				{/each}
			</div>
			<div>
				<img src={PanterImg} alt="" class="" />
			</div>
		</div>
		<div class="m-auto text-center lg:w-[654px] w-full">
			<p class="lg:text-lg text-base font-normal !leading-[24px] text-[#343A40]">
				Become the one-stop shop for healthcare IT. Stand out, boost client satisfaction, and
				transform healthcare delivery.
			</p>
		</div>
	</div>

	<div class="lg:bg-(--glc-primary-100) bg-white lg:py-20 py-10 px-6 lg:px-0">
		<div class="container mx-auto flex flex-col lg:gap-20 gap-10">
			<div class="lg:space-y-6 space-y-2 text text-center">
				<div class="space-y-2">
					<Title>Partner Type</Title>
					<SubHeading textAlign="text-center">Health Insurance Management System vendors</SubHeading
					>
				</div>
				<div class="lg:max-w-[718px] m-auto w-full">
					<p class="lg:text-lg text-base font-normal !leading-[24px] text-[#343A40]">
						Empower your Health Insurance Management System (HIMS) with the essential tools payers
						need to excel. Our comprehensive suite of solutions addresses key challenges and
						uncovers hidden potential:
					</p>
				</div>
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-[60px] gap-10 items-center">
				<div class="grid grid-cols-1 lg:grid-cols-2 gap-6 order-2 lg:order-1">
					{#each items as item, index}
						<TeamBox
							title={item.title}
							description={item.description}
							icon={item.icon}
							className={index === 2 ? 'lg:col-span-2' : ''}
							subtitleColor="text-[#6C757D]"
							leading="!leading-[24px]"
						/>
					{/each}
				</div>
				<div class="flex lg:justify-end justify-start order-1 lg:order-2">
					<img src={Img} alt="" class="" />
				</div>
			</div>
		</div>
	</div>

	<div class="container mx-auto flex flex-col lg:gap-20 gap-10 lg:py-20 py-10 px-6 lg:px-0">
		<div class="lg:space-y-6 space-y-2 text text-center">
			<div class="space-y-2">
				<Title>Partner Type</Title>
				<SubHeading textAlign="text-center">Revenue cycle management vendors</SubHeading>
			</div>
			<div class="lg:max-w-[718px] m-auto w-full">
				<p class="lg:text-lg text-base font-normal !leading-[24px] text-[#343A40]">
					Our suite of solutions tackles key challenges head-on, leading to a healthier bottom line
				</p>
			</div>
		</div>
		<div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-[60px] gap-10 items-center">
			<div>
				<img src={RevenueImg} alt="" class="rounded-lg lg:h-[600px] h-auto" />
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
				{#each RevenueItems as item, index}
					<TeamBox
						title={item.title}
						description={item.description}
						icon={item.icon}
						className={index === 2 ? 'lg:col-span-2' : ''}
						subtitleColor="text-[#6C757D]"
					/>
				{/each}
			</div>
		</div>
	</div>

	<div>
		<PartnerInnovate />
	</div>
</div>
