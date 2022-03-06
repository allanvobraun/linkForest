<script lang="ts">
    type LinkStyle = 'rounded' | 'square' | 'rounded-square';
    export let text: string;
    export let linkStyle: LinkStyle = 'square';
    export let url: string;

    const styleClassMap = new Map<LinkStyle, string>(
        [
            ['rounded', 'rounded-full'],
            ['square', ''],
            ['rounded-square', 'rounded-md']
        ]
    );
</script>
<a class="bg-white w-full h-12 {styleClassMap.get(linkStyle)} flex flex-row justify-center items-center"
   href="{url}"
   target="_blank">
    <span class="text-center">{text}</span>
</a>