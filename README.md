# CartLane Shopify Theme

This repository contains a native Shopify Liquid rebuild of the CartLane storefront. It is intentionally separate from the React/WebDev storefront so Shopify GitHub can recognize the branch as a valid theme.

## Connect to Shopify

In Shopify Admin, open **Online Store → Themes → Add theme → Connect from GitHub**. Select the private repository `amsal4354-ai/cartlane-shopify-theme`, choose the `main` branch, and connect it as an unpublished theme. Shopify will then sync future commits from this branch.

## Included

The theme includes an original CartLane homepage, responsive navigation, product and collection templates, native Shopify product forms, cart and checkout flow, search, product sorting, wishlist persistence with browser local storage, product gallery controls, related-product recommendations, support copy, and responsive styling.

The recommendation section uses related products from the current product's Shopify collections. For AI ranking, the existing CartLane React storefront remains the richer implementation; a Shopify-native AI version would require an app proxy or Shopify app integration.

## Theme structure

The branch is a buildless Shopify theme with `assets`, `config`, `layout`, `locales`, `sections`, `snippets`, and `templates` at the repository root.
