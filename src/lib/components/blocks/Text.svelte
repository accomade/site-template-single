<script lang="ts">
  import { currentLang } from '$lib/stores/lang';
  import { dictEntry } from '$lib/conf/translations';

  export let ref:string
</script>

<div class="content">
  {@html dictEntry($currentLang, ref)}
</div>

<style>
  .content {
    font-size: clamp(1rem, 2cqh, 2rem);
    
    text-align: left;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
</style>