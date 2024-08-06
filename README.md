# Particle Network Mintlify

This repository holds the content for the Particle Network's docs. It handles `mdx` format files for the content and OpenAPI specs for the API reference.

## Table of contents

- [Particle Network Mintlify](#particle-network-Mintlify)
  - [Table of contents](#table-of-contents)
  - [Local Quickstart](#local-quickstart)
  - [Development](#development)
  - [Project's structure](#projects-structure)
    - [mint.json](#mintjson)
      - [General considerations](#general-considerations)
      - [Main sections (tabs) management](#main-sections-tabs-management)
    - [Managing Sections and Pages in `mint.json`](#managing-sections-and-pages-in-mintjson)
      - [Overview of Navigation Structure](#overview-of-navigation-structure)
      - [How It Works](#how-it-works)
      - [Notes](#notes)
    - [APIs and OpenAPI schemas](#apis-and-openapi-schemas)
    - [Troubleshooting](#troubleshooting)

## Local Quickstart

To preview the documentation changes locally, install the [Mintlify CLI](https://www.npmjs.com/package/mintlify) using the following command.

```sh
npm i -g mintlify
```

Clone the repository

```sh
git clone https://github.com/TABASCOatw/particle-network-mintlify.git
```

Run the following command at the root of your documentation (where mint.json is)

```sh
mintlify dev
```

## Development

When working on the repository to update the docs, follow the steps:

- Create a new branch
- Make the edits
  - Keep the directory organization following the current structure
- Push to the branch and open a Pull Request
- The reviewer/maintainer will be able to check the edits locally

## Project's structure

### mint.json

The entry point for the Mintlify project is the `mint.json` file. 

The `mint.json` file is the primary configuration file for the Mintlify project. It contains various settings that control the site's appearance, structure, and behavior. Below are some standard fields you might find in `mint.json`:

#### General considerations

- **`name`**: The name of your project.
- **`description`**: A brief description of your project.
- **`logo`**: The path to your project's logo image.
- **`theme`**: Customization options for the documentation site's theme, such as colors and fonts.
- **`sidebar`**: Configuration for the sidebar menu, including sections and corresponding pages.
- **`footer`**: Settings for the footer content, such as links and copyright information.
- **`analytics`**: Information for integrating analytics services like Google Analytics.
- **`search`**: Configuration for enabling and customizing search functionality within the documentation.
- **`repository`**: Link to the project's code repository.
- **`navigation`**: Links to be included in the top navigation bar.

The top of the file contains the general configuration. Here, we can control the project's name, logos, theme, CTA button, links in the header, and so on. 

```json mint.json
  "name": "Particle Network docs",
  "logo": {
    "dark": "/logo/dark.png",
    "light": "/logo/dark.png"
 },
  "favicon": "/favicon.png",
  "colors": {
    "primary": "#9d32de",
    "light": "#e44be0",
    "dark": "#9d32de"
 },
  "topbarCtaButton": {
    "name": "Dashboard",
    "url": "https://dashboard.particle.network/#/login"
 },
  "repository": {
    "url": "https://github.com/TABASCOatw/particle-network-mintlify"
 },
  "topbarLinks": [
 {
      "name": "Blog",
      "url": "https://blog.particle.network/"
 },
 {
      "name": "GitHub",
      "url": "https://github.com/Particle-Network"
 }
 ],
 ```

> After working on and editing the `mint.json` file, make sure to pass it through a "beautifier" to format it properly; this will keep it organized and readable.
> You can use [jsonformatter.org](https://jsonformatter.org/).

#### Main sections (tabs) management

The `mint.json` file also manages where the pages are displayed and how they are organized. The `tabs` field manages the main areas. In this case, Particle has `Resources` and `APIs & SDKs`—the `Documentation` section is the default, and it's the landing page area.

```json mint.json
  "tabs": [
 {
      "name": "Guides",
      "url": "guides"
 },
 {
      "name": "APIs & SDKs",
      "url": "api"
 }
```

### Managing Sections and Pages in `mint.json`

The `mint.json` file includes a `navigation` section that organizes the structure of your documentation site. This section defines how different pages are grouped into sections and subsections, making it easier for users to navigate the content.

Here’s a general explanation of how the sections and pages are managed based on the provided `mint.json` snippet:

```json
"navigation": [
 {
    "group": "OVERVIEW",
    "pages": [
      "landing/introduction",
      "landing/what-is-particle-network",
      "landing/realized-vision"
 ]
 },
 {
    "group": "GETTING STARTED",
    "pages": [
      "guides/overview"
 ]
 },
 {
    "group": "TECHNOLOGY",
    "pages": [
 {
        "group": "Modular L1",
        "pages": [
          "guides/modular-l1/introduction",
          "guides/modular-l1/universal-accounts",
          "guides/modular-l1/universal-liquidity",
          "guides/modular-l1/universal-gas"
 ]
 }
 ]
 }
]
```

#### Overview of Navigation Structure

- **Top-Level Groups**: The `navigation` array contains objects representing the main sections of the documentation. Each object has a `group` property that defines the section's name.

  - **Example**: `"group": "OVERVIEW"`

- **Pages**: Each top-level group has a `pages` property, an array that lists the individual pages or sub-groups within that section. Pages are referenced by their file paths relative to the root of the documentation content.

  - **Example**: 
    - `"pages": ["landing/introduction", "landing/what-is-particle-network", "landing/realized-vision"]` under the "OVERVIEW" group.
    - `"pages": ["guides/overview"]` under the "GETTING STARTED" group.

- **Sub-Groups**: The pages array can also contain nested group objects, which allow for further subdivision of content within a main section. Each sub-group can have its own group name and page array.

  - **Example**: 
    - `"group": "Modular L1"` under the "TECHNOLOGY" group.
    - This sub-group has its own `pages` array: `"pages": ["guides/modular-l1/introduction", "guides/modular-l1/universal-accounts", "guides/modular-l1/universal-liquidity", "guides/modular-l1/universal-gas"]`.

#### How It Works

- The `navigation` section helps create a clear and hierarchical structure for your documentation.
- Each top-level `group` creates a distinct section in the sidebar of your documentation site.
- Pages listed under each group are displayed as links within that section.
- Sub-groups allow for further content categorization, making it easy to organize complex documentation.

This structure ensures that each documentation aspect is organized and easily accessible, allowing for efficient updates and maintenance. By following this structure, users can quickly find relevant information through an intuitive and organized sidebar menu, making the documentation user-friendly and easy to navigate.

#### Notes

> Note that you cannot add content in the root of a subsection, so you'll need to create an 'Overview' or 'Introduction' page in this case.

> Each section and subsection includes an `images` directory to organize the images for the specific pages/sections. 

> It does not matter where the files are or how they are organized within the directory. In theory, you could place files anywhere you want and then give the path using the `navigation` object of `mint.json`, but let's keep the current structure. 
> 
> Create a directory for each new section and subsection to keep the repository organized.

### APIs and OpenAPI schemas

Mintlify supports OpenAPI for API references. The APIs are organized in the `api` directory, and each section holds its `openapi.json` file. Once the OAS is set, you can reference it in the `.mdx` page like this:

```md file.mdx
---
title: "getBTCAccount"
openapi: "POST /#particle_aa_getBTCAccount"
---
```

In the `openapi` field, add the endpoint method plus the path.

### Troubleshooting

- Mintlify dev isn't running - Run `mintlify install`; it'll re-install dependencies.
- Page loads as a 404 - Make sure you run in a folder with `mint.json`.
