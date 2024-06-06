import {getStoryblokVersion} from "./get-storyblok-version";
import {defineNuxtPlugin, useAsyncData, useStoryblokApi} from "../.nuxt/imports";

export default defineNuxtPlugin(async () => {
    const version = getStoryblokVersion();
    const storyblokApi = useStoryblokApi();

    const {data} = await useAsyncData(
        `config`,
        async () =>
            await storyblokApi.get(`cdn/stories/config`, {
                version,
                resolve_links: 'url',
                cv: Date.now(),
            }),
    );

    return {
        provide: {
           config: data?.value?.data.story.content,
        },
    };
});