module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
};

/*  The above configuration is disabling the lightning icon you'd see in the bottom
right corner on dev mode.

Basicly, it would indicate wether a page is being staticlly generated or could be
statically generated

The idea behind this is that you'd always want to have your pages staticlly
generated when possible, as it would result in the fastest loading time.

I personally feel like its a bit too invasive to pullote the DOM with these indicators,
as I'd assume a developer working on NextJS would have a pretty good idea
how each page is generated :) */
