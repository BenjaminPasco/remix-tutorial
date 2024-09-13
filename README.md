# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/server`
- `build/client`

# Notes

## Links

export a member links of type LinksFunction from @remix-run/node that return an array of objects:
{rel, href}x
example of rel is "stylesheet" for css files
href is obtained with an import like this: import myhref from "./xxx.css?url"
remix use this import to replace the <Links/> tag in the default export by the various links of the array

## file naming convention

in a file name . will create a / in the url and $ make a segment dynamic, so
app/routes/contacts.\$contactId.tsx will handle routes for /contacts/123 or /contacts/abc with contactId being 123 and abc

Witnessed a lot of issues in dev mode, every subroute is being rendered correctly for a quarter of a second and then is replaced by error 404
It work just fine in production mode, i really dont know what the fuck is going on there.
=> Mystery will stay unresolved, this is working fine now (wtf)

Also we need Outlet from @remix-run/react to render subroutes with the parent as a layout

## Link

instead of using <a> anchor tags that are perfoming a full document request we can use <Link> from @remix-run/react to have remix load the think it is linked to directly without fetching anything and refreshing the whole document

## Data loading

export const loader of type () => Promise<T>
then use useLoaderData() to get T inside the component
add useLoaderData<typeof loader>() to infer type

## Url params

the loader we export to load data can take the url params as argument like this:
export const loader = ({}: T) => {
return ...
}

we can make the loader throw erros to avoid having to deal with wrong data in the component
we can use the type LoaderFunctionArgs to type the loader args and use invariant(params.contactId, "Error message") to infer params.contactId as a string

## Data mutation

remix use form navigation to do data mutation
when we have a submit action in a form

- if method is post remix will send the post to the route action export using form's data as body
- if method is get remix will send the get to the route action export and use form's data as urlSearchParams
