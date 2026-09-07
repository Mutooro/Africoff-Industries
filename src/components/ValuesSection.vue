<template>
	<section class="py-24 bg-africoff-cream">
		<div class="max-w-7xl mx-auto px-6">
			<SectionTitle
				eyebrow="Our Values"
				title="How we create <em>lasting impact</em>"
				subtitle="Responsible growth guides every partnership and decision."
			/>
			<div class="grid md:grid-cols-3 gap-6 mt-16">
				<article v-for="value in values" :key="value.title" class="bg-white p-8 rounded-2xl">
					<h3 class="font-serif text-2xl text-gray-900 mb-3">{{ value.title }}</h3>
					<p class="text-gray-600 leading-relaxed">{{ value.description }}</p>
				</article>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import SectionTitle from './ui/SectionTitle.vue'

const values = [
	{ title: 'Integrity', description: 'We build transparent relationships with farmers, customers, and partners.' },
	{ title: 'Sustainability', description: 'We protect the land and invest in resilient farming communities.' },
	{ title: 'Excellence', description: 'We pursue consistent quality from the farm to every market.' },
]
</script>
