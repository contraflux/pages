# echotops.github.io

Personal portfolio site — hardware and software projects, digital assets, and photography.

Live at [echotops.github.io](https://echotops.github.io).

## Stack

- [Vite](https://vite.dev/) + [React](https://react.dev/) + [react-router-dom](https://reactrouter.com/) for the shell (home page and the four section pages)
- Plain HTML/CSS/JS for project detail pages and interactive applets (`public/hardware/**`, `public/software/projects/**`), served as static assets
- Deployed to the `gh-pages` branch by a GitHub Action (`.github/workflows/deploy.yml`) on every push to `main`

## Structure

```
src/            React app (pages, components, routing)
public/         Static passthrough — copied into the build unchanged
  hardware/     Hardware project writeups (by year)
  software/     Interactive physics/math applets
  digital/      Flight sim scenery/livery images
  photography/  Photo assets
  assets/       Shared images, résumé
```

New interactive applets or writeups go under `public/`; new sections or shell changes go under `src/`.

## Development

```bash
npm install
npm run dev       # local dev server with HMR
npm run build     # production build to dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint
```
