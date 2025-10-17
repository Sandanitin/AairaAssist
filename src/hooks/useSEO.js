import { useEffect } from 'react';

function ensureTag(tagName, attrs = {}) {
  let selector = tagName;
  if (attrs.name) selector += `[name="${attrs.name}"]`;
  if (attrs.property) selector += `[property="${attrs.property}"]`;
  if (attrs.rel) selector += `[rel="${attrs.rel}"]`;

  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(tagName);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  return el;
}

export function useSEO({
  title,
  description,
  keywords = [],
  canonical,
  image,
}) {
  useEffect(() => {
    if (title) document.title = title;

    if (description) {
      const descTag = ensureTag('meta', { name: 'description' });
      descTag.setAttribute('content', description);
    }

    if (keywords && keywords.length) {
      const kwTag = ensureTag('meta', { name: 'keywords' });
      kwTag.setAttribute('content', keywords.join(', '));
    }

    const url = canonical || window.location.href;
    const linkCanonical = ensureTag('link', { rel: 'canonical' });
    linkCanonical.setAttribute('href', url);

    // Open Graph
    const ogTitle = ensureTag('meta', { property: 'og:title' });
    ogTitle.setAttribute('content', title || '');
    const ogDesc = ensureTag('meta', { property: 'og:description' });
    ogDesc.setAttribute('content', description || '');
    const ogUrl = ensureTag('meta', { property: 'og:url' });
    ogUrl.setAttribute('content', url);
    const ogType = ensureTag('meta', { property: 'og:type' });
    ogType.setAttribute('content', 'website');
    if (image) {
      const ogImage = ensureTag('meta', { property: 'og:image' });
      ogImage.setAttribute('content', image);
    }

    // Twitter
    const twCard = ensureTag('meta', { name: 'twitter:card' });
    twCard.setAttribute('content', 'summary_large_image');
    const twTitle = ensureTag('meta', { name: 'twitter:title' });
    twTitle.setAttribute('content', title || '');
    const twDesc = ensureTag('meta', { name: 'twitter:description' });
    twDesc.setAttribute('content', description || '');
    if (image) {
      const twImage = ensureTag('meta', { name: 'twitter:image' });
      twImage.setAttribute('content', image);
    }
  }, [title, description, JSON.stringify(keywords), canonical, image]);
}

export default useSEO;
