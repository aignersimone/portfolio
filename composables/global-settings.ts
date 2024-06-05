import {getStoryblokVersion} from "./get-storyblok-version";
import {defineNuxtPlugin, useAsyncData} from "nuxt/app";
import {useStoryblokApi} from "../.nuxt/imports";

export default defineNuxtPlugin(async () => {
    const version = getStoryblokVersion();
    const storyblokApi = useStoryblokApi();

    const {data} = await useAsyncData(
        `global-settings`,
        async () =>
            await storyblokApi.get(`cdn/stories/global-settings`, {
                version,
                resolve_links: 'url',
                cv: Date.now(),
            }),
    );

    return {
        provide: {
            globalSettings: data?.value?.data.story.content,
        },
    };
});