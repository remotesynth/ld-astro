---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
  import Cool from '../../components/Author.astro'

  // launchdarkly libraries
  import ldServer from "../../components/LaunchDarkly/ld-server";
  import ldUser from "../../components/LaunchDarkly/ld-User";

  let client = await ldServer();

  // each user would be initialized with their info
  let user = new ldUser(client);
  const myFlag = await user.getFlagValue("featured-category");
title: Hello world!
publishDate: 12 Sep 2021
name: Nate Moore
value: 128
description: Just a Hello World Post!
---

<Cool name={frontmatter.name} href="https://twitter.com/n_moore" client:load />

This is so cool! The value of my flag is {myFlag}

Do variables work {frontmatter.value \* 2}?

```javascript
// Example JavaScript

const x = 7;
function returnSeven() {
  return x;
}
```
