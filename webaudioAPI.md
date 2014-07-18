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
var request = new XMLHttpRequest();
request.open('GET', url, true);
request.responseType = 'arraybuffer';

// Decode asynchronously
request.onload = function() {
  context.decodeAudioData(request.response, function(theBuffer) {
    buffer = theBuffer;
  }, onError);
}
request.send();
```

Once you’ve loaded your buffer, you can create a source node (AudioBufferSourceNode) for it, connect the source node into your audio graph, and call start(0) on the source node. To stop a sound, call stop(0) on the source node. Note that both of these function calls require a time in the coordinate system of the current audio context :

```
function playSound(buffer) {
  var source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(context.destination);
  source.start(0);
}
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
