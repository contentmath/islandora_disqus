/**
 * @file
 * JavaScript for Islandora Disqus.
 */

var disqus_shortname = '';
var disqus_url = '';
var disqus_identifier = '';

/**
 * Drupal Islandora Disqus behavior.
 */
Drupal.behaviors.islandoraDisqus = {
    attach: function (context, settings) {
        disqus_shortname = settings.islandoraDisqus.disqusShortname;
        disqus_url = settings.islandoraDisqus.disqusUrl;
        disqus_identifier = settings.islandoraDisqus.disqusId;

        (function() {
            var d = document, s = d.createElement('script');

            s.src = '//' + settings.islandoraDisqus.disqusShortname + '.disqus.com/embed.js';

            s.setAttribute('data-timestamp', +new Date());
            (d.head || d.body).appendChild(s);
        })();
    }
};