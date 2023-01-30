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
      {#if amneties.quiet}
        <div class="desc-wrapper long-desc">
          <h4>{t("quiet")}</h4>
          <p>
              {@html at("quiet")}
          </p>
        </div>
      {/if}
      {#if amneties.busy}
        <div class="desc-wrapper long-desc">
          <h4>{t("busy")}</h4>
          <p>
            {@html at("busy")}
          </p>
        </div>
      {/if}
      {#if amneties.beach}
        <div class="desc-wrapper long-desc">
          <h4>{t("beach")}</h4>
          <p>
            {@html at( "beach" )}
          </p>
        </div>
      {/if}
      {#if amneties.culture}
        <div class="desc-wrapper long-desc">
          <h4>{t("culture")}</h4>
          <p>
            {@html at( "culture" )}
          </p>
        </div>
      {/if}
      {#if amneties.sightSeeing}
        <div class="desc-wrapper long-desc" >
          <h4>{t("sightSeeing")}</h4>
          <p>
            {@html at("sightSeeing")}
          </p>
        </div>
      {/if}
      {#if amneties.shopping}
        <div class="desc-wrapper long-desc">
          <h4>{t("shopping")}</h4>
          <p>
            {@html at("shopping")}
          </p>
        </div>
      {/if}
      {#if amneties.desc}
        <div class="desc-wrapper long-desc">
          <h4>{t("desc")}</h4>
          <p>
              {@html at( "desc" )}
          </p>
        </div>
      {/if}
    </div>
    {#if amneties.parkingLots || 
          amneties.airportShuttle ||
          amneties.trainStation ||
          amneties.onSiteContact}
      <hr>
      <div class="traffic-wrapper">
        <dl>
          {#if amneties.parkingLots }
          <div class="option">
            <dt>{t("parkingLots")}</dt><dd>{trans.formatNumberOf(amneties.parkingLots)}</dd>
          </div>
          {/if}
          {#if amneties.parkingOnSite }
          <div class="option">
            <dt>{t("parkingOnSite")}</dt><dd><CheckSvg/></dd>
          </div>
          {/if}
          {#if amneties.parkingNearby }
          <div class="option">
            <dt>{t("parkingNearby")}</dt><dd><CheckSvg/></dd>
          </div>
          {/if}
          {#if amneties.airportShuttle }
          <div class="option">
            <dt>{t("airportShuttle")}</dt><dd><CheckSvg/></dd>
          </div>
          {/if}
          {#if amneties.trainStation }
          <div class="option">
            <dt>{t("trainStation")}</dt><dd><CheckSvg/></dd>
          </div>
          {/if}
          {#if amneties.onSiteContact }
          <div class="option">
            <dt>{t("onSiteContact")}</dt><dd><CheckSvg/></dd>
          </div>
          {/if}
          
        </dl>
      </div>
    {/if}
    {#if  
          amneties.size ||
          amneties.pets || 
          amneties.vaccuum || 
          amneties.ac ||
          amneties.iron ||
          amneties.washingMashine ||
          amneties.clothesDryer ||
          amneties.dryingRack ||
          amneties.sauna ||
          amneties.solarium ||
          amneties.whirlpool
          }
      <hr>
      <div class="percs-wrapper">
        <dl>
          {#if amneties.size}
          <div class="option">
            <dt>{t("size")}</dt><dd>{@html trans.formatSize(amneties.size)}</dd>
          </div>
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
          {#if amneties.sauna }
          <div class="option-with-desc">
            <dt>{t("sauna")}</dt>
            <dd><CheckSvg/></dd>
            {#if amneties.saunaDesc}
              <div class="desc-wrapper">{@html at("saunaDesc")}</div>
            {/if}
          </div>
          {/if}
          {#if amneties.solarium }
          <div class="option-with-desc">
            <dt>{t("solarium")}</dt>
            <dd><CheckSvg/></dd>
            {#if amneties.solariumDesc}
              <div class="desc-wrapper">{@html at("solariumDesc")}</div>
            {/if}
          </div>
          {/if}
          {#if amneties.ac }
          <div class="option">
            <dt>{t("ac")}</dt><dd><CheckSvg/></dd>
          </div>
          {/if}
          {#if amneties.washingMashine }
          <div class="option">
            <dt>{t("washingMashine")}</dt><dd><CheckSvg/></dd>
          </div>
          {/if}
          {#if amneties.clothesDryer }
          <div class="option">
            <dt>{t("clothesDryer")}</dt><dd><CheckSvg/></dd>
          </div>
          {/if}
          {#if amneties.dryingRack }
          <div class="option">
            <dt>{t("dryingRack")}</dt><dd><CheckSvg/></dd>
          </div>
          {/if}
          {#if amneties.iron }
          <div class="option">
            <dt>{t("iron")}</dt><dd><CheckSvg/></dd>
          </div>
          {/if}
          {#if amneties.vaccuum }
          <div class="option">
            <dt>{t("vaccuum")}</dt><dd><CheckSvg/></dd>
          </div>
          {/if}
        </dl>
      </div>
    {/if}
    {#if 
      amneties.bedrooms ||
      amneties.kitchens ||
      amneties.livingRooms ||
      amneties.bathrooms
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
                  <div class="option">
                    <dt>{t("size")}</dt><dd>{@html trans.formatSize(bedroom.size)}</dd>
                  </div>
                  {/if}
                  {#if bedroom?.beds}
                    {#each bedroom?.beds as bed }
                    <div class="option">
                      <dt>{t(bed.kind)}</dt><dd>{trans.formatBed(bed.heads)} {#if bed.optional}{t('bedOptional')}{/if}</dd>
                    </div>
                    {/each}
                  {/if}
                  {#if bedroom.separated}
                  <div class="option">
                    <dt>{t("bedroomSeparated")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if bedroom.tv}
                  <div class="option">
                    <dt>{t("tv")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if bedroom.ac}
                  <div class="option">
                    <dt>{t("ac")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if bedroom.beddingAvailable}
                  <div class="option">
                    <dt>{t("beddingAvailable")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if bedroom.beddingInclusive}
                  <div class="option">
                    <dt>{t("beddingInclusive")}</dt><dd><CheckSvg/></dd>
                  </div>
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
                  <div class="option">
                    <dt>{t("size")}</dt><dd>{@html trans.formatSize(livingRoom.size)}</dd>
                  </div>
                  {/if}
                  {#if livingRoom?.beds}
                    {#each livingRoom?.beds as bed }
                    <div class="option">
                      <dt>{t(bed.kind)}</dt><dd>{trans.formatBed(bed.heads)} {#if bed.optional}{t('bedOptional')}{/if}</dd>
                    </div>
                    {/each}
                  {/if}
                  {#if livingRoom.tv}
                  <div class="option">
                    <dt>{t("tv")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if livingRoom.stereo}
                  <div class="option">
                    <dt>{t("stereo")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if livingRoom.ac}
                  <div class="option">
                    <dt>{t("ac")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if livingRoom.sofa}
                  <div class="option">
                    <dt>{t("sofa")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if livingRoom.lounge}
                  <div class="option">
                    <dt>{t("lounge")}</dt><dd>{@html trans.formatSeating(livingRoom.lounge)}</dd>
                  </div>
                  {/if}
                  {#if livingRoom.sofaTable}
                  <div class="option">
                    <dt>{t("sofaTable")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if livingRoom.eatingTable}
                  <div class="option">
                    <dt>{t("eatingTable")}</dt><dd>{@html trans.formatSeating(livingRoom.eatingTable)}</dd>
                  </div>
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
                  <div class="option">
                    <dt>{t("size")}</dt><dd>{@html trans.formatSize(kitchen.size)}</dd>
                  </div>
                  {/if}
                  {#if kitchen.oven}
                  <div class="option">
                    <dt>{t("oven")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if kitchen.microwave}
                  <div class="option">
                    <dt>{t("microwave")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if kitchen.fridge}
                  <div class="option">
                    <dt>{t("fridge")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if kitchen.freezer}
                  <div class="option">
                    <dt>{t("freezer")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if kitchen.dishwasher}
                  <div class="option">
                    <dt>{t("dishwasher")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if kitchen.towels}
                  <div class="option">
                    <dt>{t("towelsKitchen")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if kitchen.coffeeMachines}
                  <div class="option">
                    <dt>{t("coffeeMachine")}</dt>
                    <dd>
                      {#if kitchen.coffeeMachines.length > 1}
                        <ul class="coffee-machines">
                        {#each kitchen.coffeeMachines as cm, i}
                          <li>
                          {t(cm)}
                          </li>
                        {/each}
                        </ul>
                      {:else}
                       { t(kitchen.coffeeMachines[0]) }
                      {/if}
                    </dd>
                  </div>
                  {/if}
                  {#if kitchen.integrated}
                  <div class="option">
                    <dt>{t("kitchenIntegrated")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if kitchen.eatingTable}
                  <div class="option">
                    <dt>{t("eatingTable")}</dt><dd>{@html trans.formatSeating(kitchen.eatingTable)}</dd>
                  </div>
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
                  <div class="option">
                    <dt>{t("size")}</dt><dd>{@html trans.formatSize(bathroom.size)}</dd>
                  </div>
                  {/if}
                  {#if bathroom.shower}
                  <div class="option">
                    <dt>{t("shower")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if bathroom.bathtub}
                  <div class="option">
                    <dt>{t("bathtub")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if bathroom.hairDryer}
                  <div class="option">
                    <dt>{t("hairDryer")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if bathroom.towelsAvailable}
                  <div class="option">
                    <dt>{t("towelsAvailabel")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if bathroom.towelsIncluded}
                  <div class="option">
                    <dt>{t("towelsIncluded")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
                  {#if bathroom.window}
                  <div class="option">
                    <dt>{t("window")}</dt><dd><CheckSvg/></dd>
                  </div>
                  {/if}
              </dl>
              {#if bathroom.desc}<div class="room-desc">{@html t(bathroom.desc)}</div>{/if}
            </div>
            {/each}
          {/if}
        </div>
      </div>
    {/if}
    {#if amneties.outdoors}
    <div class="rooms-wrapper">
      <h3>{t("outdoorsHeader")}</h3>
      <div class="outdoors-container">
    
        {#each amneties.outdoors as outdoors, i}
        <div 
            class:outdoor-wrapper={amneties.outdoors.length > 1} 
            class:outdoor-wrapper-single={amneties.outdoors.length == 1}>
          <h4>{t(outdoors.kind)}</h4>
          <dl>
            {#if outdoors.size}
            <div class="option">
              <dt>{t("size")}</dt><dd>{@html trans.formatSize(outdoors.size)}</dd>
            </div>
            {/if}
            {#if outdoors.fenced}
            <div class="option">
              <dt>{t("fenced")}</dt><dd><CheckSvg/></dd>
            </div>
            {/if}
            {#if outdoors.eatingTable}
            <div class="option">
              <dt>{t("eatingTable")}</dt><dd>{@html trans.formatSeating(outdoors.eatingTable)}</dd>
            </div>
            {/if}
            {#if outdoors.lounge}
            <div class="option">
              <dt>{t("lounge")}</dt><dd>{@html trans.formatSeating(outdoors.lounge)}</dd>
            </div>
            {/if}
            {#if outdoors.sofaTable}
            <div class="option">
              <dt>{t("sofaTable")}</dt><dd><CheckSvg/></dd>
            </div>
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
              <div class="option">
                <dt>{t("barbecueType")}</dt><dd>{t(outdoors.barbecueType)}</dd>
              </div>
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
            <div class="option-with-desc">
              <dt>{t("pool")}</dt>
              <dd><CheckSvg/></dd>
              {#if outdoors.poolDesc}
                <div class="desc-wrapper">{t(outdoors.poolDesc)}</div>
              {/if}
            </div>
            {/if}
            
          </dl>
          {#if outdoors.desc}<div class="room-desc">{@html t(outdoors.desc)}</div>{/if}
      
          </div>
        {/each}
      </div>
    </div>  
    {/if}
  {/if}
</div>

<style>

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

  .rooms-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
    justify-content: flex-start;
    padding-left: 1%;
  }

  .outdoors-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1%;
    justify-content: flex-start;
    padding-left: 1%;
  }

  .outdoor-wrapper-single {
    max-width: 98%
  }

  .outdoor-wrapper {
    max-width: 48%;
  }

  .room-wrapper {
    max-width: 32%;
  }

  .long-desc {
    max-width: 48%
  }
  
  @media(min-width: 500px) and (max-width: 800px) {
    .room-wrapper {
      max-width: 48%;
    }

    .outdoor-wrapper {
      max-width: 98%;
    }

    .long-desc {
      max-width: 98%;
    }
  }

  @media(max-width: 500px) {
    .room-wrapper {
      max-width: 98%;
    }

    .outdoor-wrapper {
      max-width: 98%;
    }

    .long-desc {
      max-width: 98%;
    }
  }

</style>
