var myLinks = [
  {"name": "daniel_chamorro", "url": "https://dchamorro1.github.io/personal_website/"},
  {"name": "daniel's github'", "url": "https://github.com/dchamorro1/personal_website"},
  {"name": "daniel's devpost", "url": "https://devpost.com/dchamorro1?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"}
]
//This listens for FetchEvents
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * AN EVENT HANDLER THAT RETURNS A Response OBJECT which is passed to the event's .respondWith() method
 * Respond with hello worker text
 * FOR US WE NEED TO RESPOND TO TWO KINDS OF REQUESTS: ONE TO GENERATE A JSON API and another to serve an HTML page
 * @param {Request} request
 * WE NEED TO: set up a request handler to respond to the path /links, and return the array itself (myLinks?)as the root of your JSON response.
 */
async function handleRequest(request) {
  return new Response('Hello l', {headers: { 'content-type': 'text/plain' },})
}
