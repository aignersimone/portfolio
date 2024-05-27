<template>
  <StoryblokComponent
    v-if="story"
    :blok="story.content"
    :story-name="story.name"
  />
</template>

<script setup>
let { slug } = useRoute().params;

// Render "home" story on root url (/)
if (slug === "") {
  slug = [`home`];
}

let story = null;

try {
  story = await useAsyncStoryblok(slug.join("/"), {
    version: "draft",
    resolve_links: "url",
  });
} catch (sbError) {
  const error = JSON.parse(sbError);

  throw createError({
    statusCode: error.status,
    statusMessage: error.response,
  });
}
</script>
