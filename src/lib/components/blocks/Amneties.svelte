<script lang="ts">
  import { i18n } from '$lib/conf';
  import { currentLang } from '$lib/stores/lang';
  import CheckSvg from '$lib/components/svg/CheckSVG.svelte';
  $: trans = i18n.translations[$currentLang] 
  $: dict = trans.dict;

  import type { Amneties } from "$lib/types/accos";
  export let amneties:Amneties
  export let accoName:string

  const t = ( d:string ) => dict[d] ? dict[d] : d
  
  const at = ( d:string ) => {
    const key=`${accoName}_${d}`
    return dict[key] ? dict[key] : key
  }

</script>

<div class="amneties-wrapper">
  {#if amneties}
    <div class="base-wrapper">
      {#if amneties.size}
      <div>
        <label for="amn-size">{t("size")}</label><span id="amn-size">{@html trans.formatSize(amneties.size)}</span>
      </div>
      {/if}
      {#if amneties.quiet}
        <div class="desc-wrapper">
          <h4>{t("quiet")}</h4>
          <p>
              {@html at("quiet")}
          </p>
        </div>
      {/if}
      {#if amneties.busy}
        <div class="desc-wrapper">
          <h4>{t("busy")}</h4>
          <p>
            {@html at("busy")}
          </p>
        </div>
      {/if}
      {#if amneties.beach}
        <div class="desc-wrapper">
          <h4>{t("beach")}</h4>
          <p>
            {@html at( "beach" )}
          </p>
        </div>
      {/if}
      {#if amneties.culture}
        <div class="desc-wrapper">
          <h4>{t("culture")}</h4>
          <p>
            {@html at( "culture" )}
          </p>
        </div>
      {/if}
      {#if amneties.sightSeeing}
        <div class="desc-wrapper">
          <h4>{t("sightSeeing")}</h4>
          <p>
            {@html at( "sightSeeing" )}
          </p>
        </div>
      {/if}
      {#if amneties.shopping}
        <div class="desc-wrapper">
          <h4>{t("shopping")}</h4>
          <p>
            {@html at( "shopping" )}
          </p>
        </div>
      {/if}
      {#if amneties.desc}
        <div class="desc-wrapper">
          <h4>{t("desc")}</h4>
          <p>
              {@html at( "desc" )}
          </p>
        </div>
      {/if}
    </div>
    {#if amneties.parkingLots || 
          amneties.airportShuttle ||
          amneties.trainStation}
      <hr>
      <div class="traffic-wrapper">
        <dl>
          {#if amneties.parkingLots }
            <dt>{t("parkingLots")}</dt><dd>{trans.formatNumberOf(amneties.parkingLots)}</dd>
          {/if}
          {#if amneties.parkingOnSite }
            <dt>{t("parkingOnSite")}</dt><dd><CheckSvg/></dd>
          {/if}
          {#if amneties.parkingNearby }
            <dt>{t("parkingNearby")}</dt><dd><CheckSvg/></dd>
          {/if}
          {#if amneties.airportShuttle }
          <dt>{t("airportShuttle")}</dt><dd><CheckSvg/></dd>
          {/if}
          {#if amneties.trainStation }
          <dt>{t("trainStation")}</dt><dd><CheckSvg/></dd>
          {/if}
        </dl>
      </div>
    {/if}
    {#if  amneties.onSiteContact ||
          amneties.pets || 
          amneties.vaccuum || 
          amneties.ac ||
          amneties.iron}
      <hr>
      <div class="percs-wrapper">
        <dl>
          {#if amneties.onSiteContact }
            <dt>{t("onSiteContact")}</dt><dd><CheckSvg/></dd>
          {/if}
          {#if amneties.pets }
          <div class="option-with-desc">
            <dt>{t("pets")}</dt>
            <dd><CheckSvg/></dd>
            {#if amneties.petsDesc}
              <div class="desc-wrapper">{@html at("petsDesc")}</div>
            {/if}
          </div>
          {/if}
          {#if amneties.ac }
            <dt>{t("ac")}</dt><dd><CheckSvg/></dd>
          {/if}
          {#if amneties.iron }
          <dt>{t("iron")}</dt><dd><CheckSvg/></dd>
          {/if}
          {#if amneties.vaccuum }
          <dt>{t("vaccuum")}</dt><dd><CheckSvg/></dd>
          {/if}
        </dl>
      </div>
    {/if}
    {#if 
      amneties.bedrooms ||
      amneties.kitchens ||
      amneties.livingRooms ||
      amneties.bathrooms ||
      amneties.outdoors
    }
      <div class="rooms-wrapper">
        <h3>{t("roomsHeader")}</h3>
        <div class="rooms-container">
          {#if amneties?.bedrooms}
            {#each amneties.bedrooms as bedroom, i}
            <div class="room-wrapper">
              <h4>{t("bedroomHeader")}{#if amneties.bedrooms.length > 1}&nbsp;{i + 1}{/if}</h4>
              <dl>
                  {#if bedroom.size}
                    <dt>{t("size")}</dt><dd>{@html trans.formatSize(bedroom.size)}</dd>
                  {/if}
                  {#if bedroom?.beds}
                    {#each bedroom?.beds as bed }
                      <dt>{t(bed.kind)}</dt><dd>{trans.formatBed(bed.heads)} {#if bed.optional}{t('bedOptional')}{/if}</dd>
                    {/each}
                  {/if}
                  {#if bedroom.separated}
                  <dt>{t("bedroomSeparated")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if bedroom.tv}
                  <dt>{t("tv")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if bedroom.ac}
                  <dt>{t("ac")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if bedroom.beddingAvailable}
                  <dt>{t("beddingAvailable")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if bedroom.beddingInclusive}
                  <dt>{t("beddingInclusive")}</dt><dd><CheckSvg/></dd>
                  {/if}
              </dl>
              {#if bedroom.desc}<div class="room-desc">{@html t(bedroom.desc)}</div>{/if}
            </div>
            {/each}
          {/if}
          {#if amneties?.livingRooms}
            {#each amneties.livingRooms as livingRoom, i}
            <div class="room-wrapper">
              <h4>{t("livingRoomHeader")}{#if amneties.livingRooms.length > 1}&nbsp;{i}{/if}</h4>
              <dl>
                  {#if livingRoom.size}
                    <dt>{t("size")}</dt><dd>{@html trans.formatSize(livingRoom.size)}</dd>
                  {/if}
                  {#if livingRoom?.beds}
                    {#each livingRoom?.beds as bed }
                      <dt>{t(bed.kind)}</dt><dd>{trans.formatBed(bed.heads)} {#if bed.optional}{t('bedOptional')}{/if}</dd>
                    {/each}
                  {/if}
                  {#if livingRoom.tv}
                  <dt>{t("tv")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if livingRoom.stereo}
                  <dt>{t("stereo")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if livingRoom.ac}
                  <dt>{t("ac")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if livingRoom.sofa}
                  <dt>{t("sofa")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if livingRoom.lounge}
                  <dt>{t("lounge")}</dt><dd>{@html trans.formatSeating(livingRoom.lounge)}</dd>
                  {/if}
                  {#if livingRoom.sofaTable}
                  <dt>{t("sofaTable")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if livingRoom.eatingTable}
                  <dt>{t("eatingTable")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if livingRoom.chairs}
                  <dt>{t("chairs")}</dt><dd>{@html trans.formatSeating(livingRoom.chairs)}</dd>
                  {/if}
              </dl>
              {#if livingRoom.desc}<div class="room-desc">{@html t(livingRoom.desc)}</div>{/if}
            </div>
            {/each}
          {/if}
          {#if amneties?.kitchens}
            {#each amneties.kitchens as kitchen, i}
            <div class="room-wrapper">
              <h4>{t("kitchenHeader")}{#if amneties.kitchens.length > 1}&nbsp;{i}{/if}</h4>
              <dl>
                  {#if kitchen.size}
                    <dt>{t("size")}</dt><dd>{@html trans.formatSize(kitchen.size)}</dd>
                  {/if}
                  {#if kitchen.oven}
                  <dt>{t("oven")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if kitchen.microwave}
                  <dt>{t("microwave")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if kitchen.fridge}
                  <dt>{t("fridge")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if kitchen.freezer}
                  <dt>{t("freezer")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if kitchen.dishwasher}
                  <dt>{t("dishwasher")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if kitchen.towels}
                  <dt>{t("towelsKitchen")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if kitchen.coffeeMachines}
                    <dt>{t("coffeeMachine")}</dt>
                    <dd>
                      {#each kitchen.coffeeMachines as cm, i}
                        {t(cm)}{#if i + 1  < kitchen.coffeeMachines.length},&nbsp; {/if}
                      {/each}
                    </dd>
                  {/if}
                  {#if kitchen.integrated}
                  <dt>{t("kitchenIntegrated")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  

                  {#if kitchen.eatingTable}
                  <dt>{t("eatingTable")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if kitchen.chairs}
                  <dt>{t("eatingTableChairs")}</dt><dd>{@html trans.formatSeating(kitchen.chairs)}</dd>
                  {/if}
              </dl>
              {#if kitchen.desc}<div class="room-desc">{@html t(kitchen.desc)}</div>{/if}
            </div>
            {/each}
          {/if}
          {#if amneties?.bathrooms}
            {#each amneties.bathrooms as bathroom, i}
            <div class="room-wrapper">
              <h4>{t("bathroomHeader")}{#if amneties.bathrooms.length > 1}&nbsp;{i}{/if}</h4>
              <dl>
                  {#if bathroom.size}
                    <dt>{t("size")}</dt><dd>{@html trans.formatSize(bathroom.size)}</dd>
                  {/if}
                  {#if bathroom.shower}
                  <dt>{t("shower")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if bathroom.bathtub}
                  <dt>{t("bathtub")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if bathroom.hairDryer}
                  <dt>{t("hairDryer")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if bathroom.towelsAvailable}
                  <dt>{t("towelsAvailabel")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if bathroom.towelsIncluded}
                  <dt>{t("towelsIncluded")}</dt><dd><CheckSvg/></dd>
                  {/if}
                  {#if bathroom.window}
                  <dt>{t("window")}</dt><dd><CheckSvg/></dd>
                  {/if}
              </dl>
              {#if bathroom.desc}<div class="room-desc">{@html t(bathroom.desc)}</div>{/if}
            </div>
            {/each}
          {/if}

          {#if amneties?.outdoors}
          {#each amneties.outdoors as outdoors, i}
          <div class="room-wrapper">
              <h4>{t(outdoors.kind)}</h4>
            <dl>
                {#if outdoors.size}
                  <dt>{t("size")}</dt><dd>{@html trans.formatSize(outdoors.size)}</dd>
                {/if}
                {#if outdoors.fenced}
                <dt>{t("fenced")}</dt><dd><CheckSvg/></dd>
                {/if}
                {#if outdoors.eatingTable}
                <dt>{t("eatingTable")}</dt><dd><CheckSvg/></dd>
                {/if}
                {#if outdoors.chairs}
                <dt>{t("chairs")}</dt><dd>{@html trans.formatSeating(outdoors.chairs)}</dd>
                {/if}
                {#if outdoors.lounge}
                <dt>{t("lounge")}</dt><dd>{@html trans.formatSeating(outdoors.lounge)}</dd>
                {/if}
                {#if outdoors.sofaTable}
                <dt>{t("sofaTable")}</dt><dd><CheckSvg/></dd>
                {/if}
                {#if outdoors.barbecue}
                <div class="option-with-desc">
                  <dt>{t("barbecue")}</dt>
                  <dd><CheckSvg/></dd>
                  {#if outdoors.barbecueDesc}
                    <div class="desc-wrapper">{t(outdoors.barbecueDesc)}</div>
                  {/if}
                </div>
                  {#if outdoors.barbecueType}
                  <dt>{t("barbecueType")}</dt>
                  <dd>{t(outdoors.barbecueType)}</dd>
                  {/if}
                  
                {/if}
                {#if outdoors.shed}
                <div class="option-with-desc">
                  <dt>{t("shed")}</dt>
                  <dd><CheckSvg/></dd>
                  {#if outdoors.shedDesc}
                    <div class="desc-wrapper">{t(outdoors.shedDesc)}</div>
                  {/if}
                </div>
                {/if}
                {#if outdoors.bicycles}
                <div class="option-with-desc">
                  <dt>{t("bicycles")}</dt>
                  <dd>{@html trans.formatNumberOf(outdoors.bicycles)}</dd>
                  {#if outdoors.bicyclesDesc}
                    <div class="desc-wrapper">{t(outdoors.bicyclesDesc)}</div>
                  {/if}
                </div>
                {/if}
                {#if outdoors.pool}
                <dt>{t("pool")}</dt>
                <dd>
                  <CheckSvg/>
                  {#if outdoors.poolDesc}
                    <p>{t(outdoors.poolDesc)}</p>
                  {/if}
                </dd>
                {/if}
                
            </dl>
            {#if outdoors.desc}<div class="room-desc">{@html t(outdoors.desc)}</div>{/if}
          </div>
          {/each}
        {/if}
        </div>
      </div>
    {/if}
  {/if}
</div>

<style>

  label {
    font-weight: bolder;
    margin-right: 0.5rem;
  }

  h4 {
    background-color: var(--table-header-bg-color);
    color: var(--table-header-font-color);
    padding: 0.3rem;
  }

  .base-wrapper {
    display: flex;
    gap: 2rem;
    align-items: baseline;
    flex-wrap: wrap;
    margin-left: 2rem;
    margin-right: 2rem;
  }

  dl {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

  }

  .option-with-desc {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: 0.2rem;
    margin-right: 1rem;
  }
  .option-with-desc dd {
    margin-right: 0.2rem;
  }

  .option-with-desc .desc-wrapper {
    font-style: italic;
    font-size: 0.8rem;
    max-width: 50vw;
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

  .rooms-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
    justify-content: flex-start;
    padding-left: 1%;
  }

  .room-wrapper {
    max-width: 32%;
  }

  @media(min-width: 500px) and (max-width: 800px) {
    .room-wrapper {
      max-width: 48%;
    }
  }

  @media(max-width: 500px) {
    .room-wrapper {
      max-width: 98%;
    }
  }

</style>
