Project card banners
====================

Author every banner at 16:9 — 1000 x 562.5, or 1024 x 576.

The card and the modal show the same file at two different shapes:

  card   crops to 5:2  (object-fit: cover)
  modal  shows it whole (height follows the image)

So the middle 5:2 band is the only part guaranteed to be seen. Keep the
logo, title and anything load-bearing inside it, and treat the strips above
and below as a reveal — real artwork that rewards opening the modal, not
padding. Empty bands read as letterboxing, which is what this replaced.

With a 1000-wide master the safe band is y 0–400, leaving 81.25 either side.
The existing banners use a viewBox of "0 -81.25 1000 562.5" so the centre
band keeps simple 0–400 coordinates and the reveal sits at negative y and
past 400.

Existing banners, for reference:
  opinion8.svg         extra sky and bubbles above, a vote control below
  sagrada-door.svg     language rows above and below, photo edges faded in
  rn-startup-perf.svg  console header above, summary rows below
  nimbus.svg           the 1024x500 store graphic, its gradient continued
                       past y=500 into a feature strip

Screenshots
===========

Extra images per card go in the card's data-images attribute, comma
separated. The banner always leads the carousel; these follow.

  <article class="card" data-images="/img/nimbus-1.png, /img/nimbus-2.png">
