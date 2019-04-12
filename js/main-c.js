// Create function 'showImages' which
// loads images.json which has links to images as an array.

fetch('images.json').then((response) => {
  //console.log(response);
  return response.json();
}).then((images) => {
  showImages(images);
  //console.log(images);
});

const showImages = (images) => {
  images.forEach((image) => {
    const header = document.createElement('h3');
    const node = document.createNode( image,image, image);
    const figcap = document.createElement('figcaption');
    const alink = document.createElement('a');
    const fig = document.createElement('figure');
    const list = document.createElement('li');
    const unorlist = document.createElement('ul');

    const html =
    header.appendChild(node);
    figcap.appendChild(header);
    fig.appendChild(alink);
    fig.appendChild(figcap);
    list.appendChild(fig);
    unorlist.appendChild(list);

    document.querySelector('ul').innerHTML += html;
  });

};


// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element



