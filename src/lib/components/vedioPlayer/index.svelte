<script lang="ts">
	export let videoUrl: string;
</script>

<div
	class="flex flex-col items-center justify-center w-full h-60 md:h-80 bg-[#D9D9D9] rounded-lg overflow-hidden"
>
	<iframe
		class="w-full h-full object-cover rounded-lg"
		src={videoUrl}
		title="YouTube video"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowfullscreen
	></iframe>
</div>
