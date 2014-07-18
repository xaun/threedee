## <audio> html5 tag limitation
- No precise timing controls
- Very low limit for the number of sounds played at once
- No way to reliably pre-buffer a sound
- No ability to apply real-time effects
- No way to analyze sounds

## types of webaudio nodes
### Source nodes
- Sound sources such as audio buffers, live audio inputs, <audio> tags, oscillators, and JS processors

### Modification nodes
- Filters, convolvers, panners, JS processors, etc.

### Analysis nodes
- Analyzers and JS processors

### Destination nodes
- Audio outputs and offline processing buffers

#### Simple example of node flow
![basicaudionodepath](http://orm-chimera-prod.s3.amazonaws.com/1234000001552/images/waap_0103.png)


- - -

## loading and play sounds
To load an audio sample into the Web Audio API, we can use an XMLHttpRequest and process the results with context.decodeAudioData. This all happens asynchronously and doesn’t block the main UI thread:

```
// Link to audio file.
var url  = 'assets/ConfessToMe.mp3';

/* --- set up web audio --- */
// Create the context,
var context = new webkitAudioContext();
// ...and the source.
var source = context.createBufferSource();
// Connect it to the destination so you can hear it.
source.connect(context.destination);


/* --- load up that buffer ---  */
// Basic start to ajax! (I say basic, yet i don't know it well.)
var request = new XMLHttpRequest();
// Open the request...?
request.open('GET', url, true);
// I don't even know.
request.responseType = 'arraybuffer';

// Once the request has completed... do this
request.onload = function() {
  context.decodeAudioData(request.response, function(response) {
    /* --- play the sound AFTER we've gotten the buffer loaded --- */
    // set the buffer to the response we just received.
    source.buffer = response;
    // And off we go! .start(0) should play asap.
    source.start(0);
  }, function() {
    console.error('The request failed.'); } );
};

// Now that the request has been defined, actually make the request. (send it)
request.send();
```










- - -
# Welcome To Markdown
## THis is a less important heading.
This is a paragraph of text in *Markdown*.

This is another paragraph. We can italicis with _underscores_ or *asterisks*

We can bold with __double underscore__ or **double asterisks**

> After 3 days without programming , life becomes menaingless.

- Groucho
- Harpo
- Chico
- Zeppo

This is [clickable link text] (http://example,com).
![robot](http://pocketscientists.com/wp-content/uploads/2012/10/robot1.png)

Tody we learened about the `<blink>` tag
Hide full text
