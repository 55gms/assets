# 55GMS assets

Game files for [55GMS](https://github.com/55gms/55GMS), served through jsDelivr so they
don't load off the 55GMS server.

`misc/<folder>/` mirrors `static/misc/<folder>/` in the 55GMS repo, so a file the site
serves at `/misc/<path>` is at:

```
https://cdn.jsdelivr.net/gh/55gms/assets@main/misc/<path>
```

Game pages point at it with a base tag:

```html
<base href="https://cdn.jsdelivr.net/gh/55gms/assets@main/misc/<folder>/" />
```

jsDelivr does not serve files over 20 MB and serves `.html` as plain text, so pages
themselves stay on the 55GMS server, and larger files are split into parts
(see `docs/unity-cdn-loaders.md` in the 55GMS repo).
