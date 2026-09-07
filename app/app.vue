<script setup lang="ts">
const route = useRoute()
const runtimeConfig = useRuntimeConfig()
const siteUrl = runtimeConfig.public.siteUrl as string

useSeoMeta({
  ogSiteName: 'AFRICOFF Industries (U) Limited',
  ogType: 'website',
  ogImage: `${siteUrl}/africoff.png`,
  twitterCard: 'summary_large_image',
})

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: `${siteUrl}${route.path === '/' ? '' : route.path}`,
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'AFRICOFF Industries (U) Limited',
        url: siteUrl,
        logo: `${siteUrl}/africoff.png`,
        email: 'info@africoffindustries.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '52 Kampala Road, King Fahad Plaza, 3rd Floor',
          addressLocality: 'Kampala',
          addressCountry: 'UG',
        },
      }),
    },
  ],
}))
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
