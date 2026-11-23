FROM node:12-alpine

WORKDIR /source

COPY . .
RUN npm ci && \
  npm run gif-stills && \
  npm run build && \
  rm -rf node_modules

# We expect a mount at /out for output files!
CMD grep -q ' /out ' /proc/self/mountinfo || { echo 'Missing mount: /out' >&2; exit 1; }; \
    internal_out=public; \
    mkdir -p /out && cp -r $internal_out/. /out
