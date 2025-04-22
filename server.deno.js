import { serveDir } from 'https://deno.land/std@0.204.0/http/file_server.ts';

Deno.serve((req) => {
  return serveDir(req, {
    fsRoot: 'public',
    urlRoot: '',
    showDirListing: true,
    enableCors: true,
  });
});