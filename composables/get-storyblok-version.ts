import {useRoute, useRuntimeConfig} from "nuxt/app";

export const getStoryblokVersion = () =>{
    const runtimeConfig = useRuntimeConfig();
    const route = useRoute();

    const isEditmode = !!route.query['_storyblok_tk[space_id]'];
    const isDevmode = runtimeConfig.public.App_ENV === 'dev' || runtimeConfig.public.APP_ENV === 'local';

    return isEditmode || isDevmode ? 'draft' : 'published';
}