<script lang="ts">
  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  import type { AmnetyNucleusType, Beds, CoffeeMachine } from '$lib/types/accos';

  import CheckSvg from '$lib/components/svg/CheckSVG.svelte';
  import NoCheckSvg from '$lib/components/svg/NoCheckSVG.svelte';
  $: trans = i18n.translations[$currentLang] 
  $: dict = trans.dict;

  export let label:string="";
  export let kind:AmnetyNucleusType;
  
  export let value: boolean | number | string | Beds | CoffeeMachine[] | undefined = "";
  export let desc: string = "";
  
  $:t = dict[label] ? dict[label] : label
  
  const tFun = (l:string, d:typeof dict):string => {
    return d[l] ? d[l] : l
  }

  $: asNumber = ():string => {
    return trans.formatNumberOf(value as number)
  }

  $: asSize = ():string => {
    return trans.formatSize(value as number)
  }

  $: asSeats = ():string => {
    return trans.formatSeating(value as number)
  }

  $: asCheck = value as boolean
  $: asBeds = value as Beds
  $: asCoffeeMachines = value as CoffeeMachine[]

  $: asString = value as string
  $: asLookupString = dict[asString] ? dict[asString] : asString

  $: descLookup = dict[desc] ? dict[desc] : desc

</script>

{#if kind == "longDesc"}
<div 
    class="desc-wrapper long-desc">
  <h4>{t}</h4>
  <p>
      {@html asLookupString}
  </p>
</div>
{/if}

{#if kind == "string"}
<div class="option">
  <dt>{t}</dt><dd>{asLookupString}</dd>
</div>
{/if}

{#if kind == "numValue"}
<div class="option">
  <dt>{t}</dt><dd>{asNumber()}</dd>
</div>
{/if}

{#if kind == "check"}
<div class="option">
  <dt>{t}</dt><dd>{#if asCheck}<CheckSvg/>{:else}<NoCheckSvg/>{/if}</dd>
</div>
{/if}

{#if kind == "checkWithDesc"}
<div class="option-with-desc">
  <dt>{t}</dt>
  <dd>{#if asCheck}<CheckSvg/>{:else}<NoCheckSvg/>{/if}</dd>
  {#if desc}
    <div class="desc-wrapper">{descLookup}</div>
  {/if}
</div>
{/if}

{#if kind == "beds"}
  {#each asBeds.specs as bed }
    <div class="option">
      <dt>{tFun(bed.kind, dict)}</dt><dd>{trans.formatBed(bed.heads, bed.kind)} {#if bed.optional}{tFun('bedOptional', dict)}{/if}</dd>
    </div>
  {/each}
{/if}


{#if kind == "size"}
  <div class="option">
    <dt>{t}</dt><dd>{@html asSize()}</dd>
  </div>
{/if}


{#if kind == "seats"}
  <div class="option">
    <dt>{t}</dt><dd>{@html asSeats()}</dd>
  </div>
{/if}

{#if kind == "coffeeMachine"}
  <div class="option">
    <dt>{t}</dt>
    <dd>
      {#if asCoffeeMachines.length > 1}
        <ul class="coffee-machines">
        {#each asCoffeeMachines as cm, i}
          <li>
          {tFun(cm,dict)}
          </li>
        {/each}
        </ul>
      {:else}
      { tFun(asCoffeeMachines[0],dict) }
      {/if}
    </dd>
  </div>
{/if}





<style>
  h4 {
    background-color: var(--table-header-bg-color);
    color: var(--table-header-font-color);
    padding: 0.3rem;
  }

  .option {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 0.25rem;
  }

  .option dt {
    text-align: right;
  }

  .option-with-desc {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 0.2rem;
    margin-right: 1rem;
    margin-bottom: 0.25rem;
    margin-top: 0.25rem;
    align-content: center;
  }
  .option-with-desc dd {
    margin-right: 0.2rem;
  }

  .option-with-desc .desc-wrapper {
    font-style: italic;
    font-size: 0.8rem;
    max-width: 50vw;
    margin-bottom: 0.3rem
  }
  .option-with-desc .desc-wrapper:after {
    content: ")";
  }
  .option-with-desc .desc-wrapper:before {
    content: "(";
  }


  dd {
    margin-left: 0.2rem;
    margin-right: 1rem;
  }

  dt {
    font-weight: bolder;
    text-transform: capitalize;
  }

  dt::after {
    content: ":"
  }

  .long-desc {
    max-width: 48%
  }

  @media(min-width: 500px) and (max-width: 800px) {
   
    .long-desc {
      max-width: 98%;
    }
  }

  @media(max-width: 500px) {

    .long-desc {
      max-width: 98%;
    }
  }

</style>