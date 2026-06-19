# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Install deps (cached unless lockfile/manifest changes)
COPY package*.json ./
RUN npm ci

# Build the static site
COPY . .
RUN npm run build

# ---- Serve stage ----
FROM nginx:1.27-alpine AS serve
# Custom config: gzip, cache headers, SPA fallback, security headers
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s \
  CMD wget -q --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
