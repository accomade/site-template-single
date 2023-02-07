<script lang="ts">
  export let name:string = 'Kordula Schumacher'
  export let legalContact:string = `
    Achterstr. 3<br>
    17459 Koserow - Deutschland<br>
    Telefon: 038375 - 20562<br>
    E-Mail: <a href="mailto:G.Schumacher@koserow.de">G.Schumacher@koserow.de</a>`;
</script>

<h1>Imprint</h1>
<section class="contact">
  <h2>Responsible for the content</h2>
  <strong>{name}</strong><br>
  <p>{@html legalContact}</p>
</section>

<section>
<h2>Disclaimer</h2>
  <p>Despite careful control of the content, we do not assume any liability for the content of external links. The content of linked pages is the sole responsibility of their operators.</p>
</section>
<section>
  <h2>Copyright Notice</h2>
  <p>The content and works created by the site operator on these pages are subject to German copyright law. The reproduction, processing, distribution and any kind of exploitation outside the limits of copyright require the written consent of the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use.</p>
  <p>As far as the contents on this site were not created by the operator, the copyrights of third parties are observed. In particular, contents of third parties are marked as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.</p>
  <p>All photographs used on this website are the property of their respective artists and are protected under international copyright laws. The photographs may not be used, copied, reproduced, manipulated, or distributed in any way without the prior written permission of the artist.</p>
  <p>Photographs created by third-party artists are the property of their respective owners and are used on this website with permission. The use of these photographs does not imply endorsement of {name} by the photographers or the owners of the photographs. Photographs owned by third parties are labeled as such.</p>
  <p>Photographs displaying the "Accomade" logo are created or owned by <a target="_blank" rel="noreferrer noopener" href="https://accoma.de">Accomade - Dirk Porsche</a>. They are the exclusive property of <a target="_blank" rel="noreferrer noopener" href="https://accoma.de">Accomade - Dirk Porsche</a> and are protected under international copyright laws.</p>
  <p>Unlabeled photographs are created by {name}, are the exclusive property of {name} and are protected under international copyright laws.</p>
  <p>If you would like to license or purchase the rights to any of the photographs displayed on this website, please contact the respective artists directly.</p>
  <p>We would like to express our gratitude to the talented photographers who have allowed us to showcase their work on our website. Their contributions are greatly appreciated.</p>
</section>
<section>
  <h2>European Online Dispute Resolution (ODR)</h2>
  <p>The European Commission provides an online platform for dispute resolution, which can be found at <a target="_blank" rel="noreferrer noopener" href="http://ec.europa.eu/odr">http://ec.europa.eu/odr</a>.</p>
  <p>Please be aware that {name} does not participate in the European Online Dispute Resolution (ODR) process and is not obligated to do so. As such, we cannot be held liable for any disputes arising from our products or services.</p>
  <p>We encourage all customers to contact us directly in the event of a dispute. We are committed to finding a fair and mutually acceptable resolution to any issues that may arise.</p>
  <p>If you have any questions or concerns, please do not hesitate to reach out to us at:</p>
  <p>
    <strong>{name}</strong><br>
    {@html legalContact}
  </p>
</section>