# Particle Network Mintlify

This repository holds the content for the Particle Network's docs. It handles `mdx` format files for the content and OpenAPI specs for the API reference.

## Table of contents

- [Particle Network Mintlify](#particle-network-Mintlify)
  - [Table of contents](#table-of-contents)
  - [Local Quickstart](#local-quickstart)
  - [Development](#development)
  - [Project's structure](#projects-structure)
    - [docs.json](#docsjson)
      - [General considerations](#general-considerations)
      - [Main sections (tabs) management](#main-sections-tabs-management)
    - [Managing Sections and Pages in `docs.json`](#managing-sections-and-pages-in-docsjson)
      - [Overview of Navigation Structure](#overview-of-navigation-structure)
      - [How It Works](#how-it-works)
      - [Notes](#notes)
    - [APIs and OpenAPI schemas](#apis-and-openapi-schemas)
    - [Troubleshooting](#troubleshooting)

## Local Quickstart

To preview the documentation changes locally, install the [Mintlify CLI](https://www.npmjs.com/package/mint) using the following command.

```sh
npm i -g mint
```

Clone the repository

```sh
https://github.com/Particle-Network/particle-docs-mintlify.git
```

Run the following command at the root of your documentation (where docs.json is)

```sh
mint dev
```

## Development

When working on the repository to update the docs, follow the steps:

- Create a new branch
- Make the edits
  - Keep the directory organization following the current structure
- Push to the branch and open a Pull Request
- The reviewer/maintainer will be able to check the edits locally

## Project's structure

### docs.json

The entry point for the Mintlify project is the `docs.json` file. 

The `docs.json` file is the primary configuration file for the Mintlify project. It contains various settings that control the site's appearance, structure, and behavior. Below are some standard fields you might find in `docs.json`:

#### General considerations

- **`name`**: The name of your project.
- **`description`**: A brief description of your project.
- **`logo`**: The path to your project's logo image.
- **`theme`**: Customization options for the documentation site's theme, such as colors and fonts.
- **`navigation`**: Configuration for the site navigation, including tabs, groups, pages, and global anchors.
- **`footer`**: Settings for the footer content, such as links and copyright information.
- **`analytics`**: Information for integrating analytics services like Google Analytics.
- **`search`**: Configuration for enabling and customizing search functionality within the documentation.
- **`repository`**: Link to the project's code repository.
- **`navbar`**: Configuration for the navigation bar, including links and primary button.

The top of the file contains the general configuration. Here, we can control the project's name, logos, theme, CTA button, links in the header, and so on. 

```json docs.json
  "$schema": "https://mintlify.com/docs.json",
  "theme": "mint",
  "name": "Particle Network docs",
  "logo": {
    "light": "/logo/dark.png",
    "dark": "/logo/dark.png"
  },
  "favicon": "/favicon.png",
  "colors": {
    "primary": "#9d32de",
    "light": "#e44be0",
    "dark": "#9d32de"
  },
  "navbar": {
    "links": [
      {
        "label": "Blog",
        "href": "https://blog.particle.network/"
      },
      {
        "label": "GitHub",
        "href": "https://github.com/Particle-Network"
      }
    ],
    "primary": {
      "type": "button",
      "label": "Dashboard",
      "href": "https://dashboard.particle.network/"
    }
  },
  "repository": {
    "url": "https://github.com/Particle-Network/particle-docs-mintlify"
  }
```

> After working on and editing the `docs.json` file, make sure to pass it through a "beautifier" to format it properly; this will keep it organized and readable.
> You can use [jsonformatter.org](https://jsonformatter.org/).

#### Main sections (tabs) management

The `docs.json` file also manages where the pages are displayed and how they are organized. The navigation structure is defined in the `navigation` object, which contains `tabs` for the main navigation areas. Each tab can have multiple groups and pages.

```json docs.json
"navigation": {
  "tabs": [
    {
      "tab": "What is Particle Network?",
      "groups": [
        {
          "group": "OVERVIEW",
          "pages": [
            "intro/introduction",
            "intro/what-is-particle-network",
            "intro/what-is-cha"
          ]
        },
        {
          "group": "PARTICLE PRODUCTS",
          "pages": [
            "intro/universal-accounts",
            "intro/social-logins",
            "intro/account-abstraction"
          ]
        }
      ]
    },
    {
      "tab": "Universal Accounts",
      "groups": [...]
    },
    {
      "tab": "Support",
      "href": "https://t.me/particle_developer_bot"
    }
  ],
  "global": {
    "anchors": [...]
  }
}
```

### Managing Sections and Pages in `docs.json`

The `docs.json` file includes a complex navigation structure that organizes the content of your documentation site. This structure defines how different pages are grouped into tabs, sections, and subsections, making it easier for users to navigate the content.

Here's a general explanation of how the sections and pages are managed in the navigation structure:

```json docs.json
"navigation": {
  "tabs": [
    {
      "tab": "What is Particle Network?",
      "groups": [
        {
          "group": "OVERVIEW",
          "pages": [
            "intro/introduction",
            "intro/what-is-particle-network",
            "intro/what-is-cha"
          ]
        },
        {
          "group": "PARTICLE PRODUCTS",
          "pages": [
            "intro/universal-accounts",
            "intro/social-logins",
            "intro/account-abstraction"
          ]
        }
      ]
    },
    {
      "tab": "Universal Accounts",
      "groups": [
        {
          "group": "OVERVIEW",
          "pages": [
            "universal-accounts/cha/overview",
            "universal-accounts/cha/chains",
            {
              "group": "Quickstart",
              "pages": [
                "universal-accounts/cha/web-quickstart"
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

#### Overview of Navigation Structure

- **Tabs**: The top level of navigation is organized into tabs, each representing a major section of the documentation.

- **Groups**: Within each tab, content is organized into groups. Each group has a name that defines the section's title.
  - **Example**: `"group": "OVERVIEW"`

- **Pages**: Each group has a `pages` property, an array that lists the individual pages or sub-groups within that section. Pages are referenced by their file paths relative to the root of the documentation content.
  - **Example**: `"pages": ["intro/introduction", "intro/what-is-particle-network", "intro/what-is-cha"]`

- **Sub-Groups**: The pages array can also contain nested group objects, which allow for further subdivision of content. Each sub-group can have its own group name and pages array.
  - **Example**: A "Quickstart" sub-group within the "OVERVIEW" group with its own pages array.

- **External Links**: Tabs can also directly link to external resources instead of showing internal content.
  - **Example**: `"tab": "Support", "href": "https://t.me/particle_developer_bot"`

#### How It Works

- The `navigation` object helps create a clear and hierarchical structure for your documentation.
- The `tabs` array defines the main navigation sections that appear at the top of the documentation site.
- Each tab contains multiple `groups` that create distinct sections in the sidebar.
- Pages listed under each group are displayed as links within that section.
- Sub-groups allow for further content categorization, making it easy to organize complex documentation.
- The `global` section can define anchors that appear across all pages.

This structure ensures that each documentation aspect is organized and easily accessible, allowing for efficient updates and maintenance. By following this structure, users can quickly find relevant information through an intuitive and organized navigation system, making the documentation user-friendly and easy to navigate.

#### Notes

> Note that you cannot add content in the root of a subsection, so you'll need to create an 'Overview' or 'Introduction' page in this case.

> Each section and subsection includes an `images` directory to organize the images for the specific pages/sections. 

> It does not matter where the files are or how they are organized within the directory. In theory, you could place files anywhere you want and then give the path using the `navigation` object of `docs.json`, but let's keep the current structure. 
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
- Page loads as a 404 - Make sure you run in a folder with `docs.json`.
