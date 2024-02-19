<script lang="ts">
    import { onMount } from 'svelte'
    import { AppShell } from '@skeletonlabs/skeleton'

    import { setLocale } from '$lib/i18n'
    import { restore } from '$lib/wharf'

    import '../app.postcss'

    function getLanguage(name: string) {
        const value = document.cookie
        const parts = value.split(`=`)
        if (parts && parts.length === 2) {
            return parts?.pop()?.split(';')?.shift()
        }
        const defaultLanguage = navigator.language.split('-')[0]
        if (defaultLanguage) {
            return defaultLanguage
        }
        return 'en'
    }

    onMount(async () => {
        restore()
        setLocale(getLanguage('lang'))
    })
</script>

<AppShell>
    <svelte:fragment slot="header"></svelte:fragment>
    <svelte:fragment slot="pageHeader"></svelte:fragment>
    <slot />
</AppShell>
