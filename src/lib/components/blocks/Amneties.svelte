<script lang="ts">
  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  $: dict = i18n.translations[$currentLang].dict;

  import type { Amneties } from "$lib/types/accos";
  export let amneties:Amneties

  const t = ( d:string ) => dict[d] ? dict[d] : d
  const bool = ( d:boolean ) => `<input type="checkbox" disabled ${d ? 'checked' : ''}/>`

</script>

<div class="amneties-wrapper">
  {#if amneties.desc}
    <div class="desc-wrapper">
      {@html t( amneties.desc )}
    </div>
  {/if}
  <div class="rooms-wrapper">
    {#if amneties?.bedrooms}
      {#each amneties.bedrooms as bedroom, i}
      <h3>{t("bedroomHeader")}{#if amneties.bedrooms.length > 1}&nbsp;{i}{/if}</h3>
      <dl>
          {#if bedroom?.beds}
            {#each bedroom?.beds as bed }
              <dt>{t(bed.kind)}</dt><dd>{bed.heads} {#if bed.optional}{t('bedOptional')}{/if}</dd>
            {/each}
          {/if}
          {#if bedroom.separated}
          <dt>{t("bedroomSeparated")}</dt><dd>{@html bool(bedroom.separated)}</dd>
          {/if}
          {#if bedroom.tv}
          <dt>{t("tv")}</dt><dd>{@html bool(bedroom.tv)}</dd>
          {/if}
          {#if bedroom.ac}
          <dt>{t("ac")}</dt><dd>{@html bool(bedroom.ac)}</dd>
          {/if}
          {#if bedroom.beddingAvailable}
          <dt>{t("beddingAvailable")}</dt><dd>{@html bool(bedroom.beddingAvailable)}</dd>
          {/if}
          {#if bedroom.beddingInclusive}
          <dt>{t("beddingInclusive")}</dt><dd>{@html bool(bedroom.beddingInclusive)}</dd>
          {/if}
      </dl>
      {#if bedroom.desc}<div>{t(bedroom.desc)}</div>{/if}
      {/each}
    {/if}
    {#if amneties?.livingRooms}
      {#each amneties.livingRooms as livingRoom, i}
      <h3>{t("livingRoomHeader")}{#if amneties.livingRooms.length > 1}&nbsp;{i}{/if}</h3>
      <dl>
          {#if livingRoom?.beds}
            {#each livingRoom?.beds as bed }
              <dt>{t(bed.kind)}</dt><dd>{bed.heads} {#if bed.optional}{t('bedOptional')}{/if}</dd>
            {/each}
          {/if}
          {#if livingRoom.tv}
          <dt>{t("tv")}</dt><dd>{@html bool(livingRoom.tv)}</dd>
          {/if}
          {#if livingRoom.stereo}
          <dt>{t("stereo")}</dt><dd>{@html bool(livingRoom.stereo)}</dd>
          {/if}
          {#if livingRoom.ac}
          <dt>{t("ac")}</dt><dd>{@html bool(livingRoom.ac)}</dd>
          {/if}
          {#if livingRoom.sofa}
          <dt>{t("sofa")}</dt><dd>{@html bool(livingRoom.sofa)}</dd>
          {/if}
          {#if livingRoom.lounge}
          <dt>{t("lounge")}</dt><dd>{@html bool(livingRoom.lounge)}</dd>
          {/if}
          {#if livingRoom.sofaTable}
          <dt>{t("sofaTable")}</dt><dd>{@html bool(livingRoom.sofaTable)}</dd>
          {/if}
          {#if livingRoom.eatingTable}
          <dt>{t("eatingTable")}</dt><dd>{@html bool(livingRoom.eatingTable)}</dd>
          {/if}
          {#if livingRoom.chairs}
          <dt>{t("eatingTableChairs")}</dt><dd>{livingRoom.chairs}</dd>
          {/if}
      </dl>
      {/each}
    {/if}
    {#if amneties?.kitchens}
      {#each amneties.kitchens as kitchen, i}
      <h3>{t("kitchenHeader")}{#if amneties.kitchens.length > 1}&nbsp;{i}{/if}</h3>
      <dl>
          {#if kitchen.oven}
          <dt>{t("oven")}</dt><dd>{@html bool(kitchen.oven)}</dd>
          {/if}
          {#if kitchen.microwave}
          <dt>{t("microwave")}</dt><dd>{@html bool(kitchen.microwave)}</dd>
          {/if}
          {#if kitchen.fridge}
          <dt>{t("fridge")}</dt><dd>{@html bool(kitchen.fridge)}</dd>
          {/if}
          {#if kitchen.freezer}
          <dt>{t("freezer")}</dt><dd>{@html bool(kitchen.freezer)}</dd>
          {/if}
          {#if kitchen.dishwasher}
          <dt>{t("dishwasher")}</dt><dd>{@html bool(kitchen.dishwasher)}</dd>
          {/if}
          {#if kitchen.towels}
          <dt>{t("towelsKitchen")}</dt><dd>{@html bool(kitchen.towels)}</dd>
          {/if}
          {#if kitchen.coffeeMachines}
            <dt>{t("coffeeMachine")}</dt>
            <dd>
              {#each kitchen.coffeeMachines as cm, i}
              {t(cm)}{#if i + 1  < kitchen.coffeeMachines.length}, {/if}
              {/each}
            </dd>
          {/if}
          {#if kitchen.integrated}
          <dt>{t("kitchenIntegrated")}</dt><dd>{@html bool(kitchen.integrated)}</dd>
          {/if}
          

          {#if kitchen.eatingTable}
          <dt>{t("eatingTable")}</dt><dd>{@html bool(kitchen.eatingTable)}</dd>
          {/if}
          {#if kitchen.chairs}
          <dt>{t("eatingTableChairs")}</dt><dd>{kitchen.chairs}</dd>
          {/if}
      </dl>
      {#if kitchen.desc}<div>{t(kitchen.desc)}</div>{/if}
      {/each}
    {/if}
    {#if amneties?.bathrooms}
      {#each amneties.bathrooms as bathroom, i}
      <h3>{t("bathroomHeader")}{#if amneties.bathrooms.length > 1}&nbsp;{i}{/if}</h3>
      <dl>
          {#if bathroom.shower}
          <dt>{t("shower")}</dt><dd>{@html bool(bathroom.shower)}</dd>
          {/if}
          {#if bathroom.bathtub}
          <dt>{t("bathtub")}</dt><dd>{@html bool(bathroom.bathtub)}</dd>
          {/if}
          {#if bathroom.hairDryer}
          <dt>{t("hairDryer")}</dt><dd>{@html bool(bathroom.hairDryer)}</dd>
          {/if}
          {#if bathroom.towelsAvailable}
          <dt>{t("towelsAvailabel")}</dt><dd>{@html bool(bathroom.towelsAvailable)}</dd>
          {/if}
          {#if bathroom.towelsIncluded}
          <dt>{t("towelsIncluded")}</dt><dd>{@html bool(bathroom.towelsIncluded)}</dd>
          {/if}
          {#if bathroom.window}
          <dt>{t("window")}</dt><dd>{@html bool(bathroom.window)}</dd>
          {/if}
      </dl>
      {/each}
    {/if}

    {#if amneties?.outdoors}
    {#each amneties.outdoors as outdoors, i}
    <h3>{t(outdoors.kind)}{#if amneties.outdoors.length > 1}&nbsp;{i}{/if}</h3>
    <dl>
        {#if outdoors.size}
          <dt>{t("size")}</dt><dd>{outdoors.size}&nbsp;m²</dd>
        {/if}
        {#if outdoors.eatingTable}
        <dt>{t("eatingTable")}</dt><dd>{@html bool(outdoors.eatingTable)}</dd>
        {/if}
        {#if outdoors.sofaTable}
        <dt>{t("sofaTable")}</dt><dd>{@html bool(outdoors.sofaTable)}</dd>
        {/if}
        
        
    </dl>
    {/each}
  {/if}
  </div>

</div>

<style>



</style>
