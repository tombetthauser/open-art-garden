const RANDOM_ARTWORKS = [
  "https://media.contemporaryartlibrary.org/store/image/254724/imagefile/cad_ad-e0bb0a0e1a8cb476c8d4d10e34c5244c.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254762/imagefile/cad_ad-be1f4fe849f3575b63d07bcf016acdb7.jpg",
  "https://media.contemporaryartlibrary.org/store/image/265744/imagefile/cad_ad-d042df8579e3564127da2a4fe55dd0f0.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254727/imagefile/cad_ad-d25e70f25e6b6b8e83adee7c9f6d422c.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254764/imagefile/cad_ad-f59fd696ff3c39849d7f8fd720c49e3a.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254802/imagefile/cad_ad-c51730dba1a6a395d3cc8104ed476329.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254729/imagefile/cad_ad-2bb116d07b0c11e6ac1ee698d9357ca9.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254719/imagefile/cad_ad-969cdec7aab13d64515f804cadc38bc6.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254717/imagefile/cad_ad-35a5be1aec3a9371d4a34b4b76e25954.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254698/imagefile/cad_ad-d184d408c1987a4edc9d6542069b18de.jpg",
  "https://media.contemporaryartlibrary.org/store/image/255278/imagefile/cad_ad-1ea02ba9e534a0d00921ca5c3d61ba39.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254718/imagefile/cad_ad-1194caa5839c4e7aad1c9c09f97d959f.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254785/imagefile/cad_ad-c3b76bd71432f6f839d1ab96066fa65a.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254755/imagefile/cad_ad-8f30638a1e68227f027bffbdbb59a784.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254742/imagefile/cad_ad-9eccc1eb118cdb696571d7d27e9b33a8.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254744/imagefile/cad_ad-2707c86a83926ad730c7b7c48bf7507a.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254846/imagefile/cad_ad-c3166c896b8f5d5269084fd70acd22e4.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254738/imagefile/cad_ad-fd6f2c7500a586680f468e999f08d090.jpg",
  "https://media.contemporaryartlibrary.org/store/image/255233/imagefile/cad_ad-4064a390c059c580fca28aa44406edcb.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254772/imagefile/cad_ad-8a239e62e06d58ac96e2fe50b1c4a625.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254702/imagefile/cad_ad-efdb3e5f7568c2dd70000a0510fc8438.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254736/imagefile/cad_ad-be8b3939ebd75a17f69d5a8dcd5eec24.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254754/imagefile/cad_ad-d6ec28c4432a3d1850bd9b41b28dcc96.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254707/imagefile/cad_ad-d15e6add64ec2a589ae35767547169b1.jpg",
  "https://media.contemporaryartlibrary.org/store/image/255282/imagefile/cad_ad-6a5ba030a87b3cf7eb15a348e40acdbd.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254748/imagefile/cad_ad-90c4534ecd914fe829c9d0f337c083a8.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254740/imagefile/cad_ad-0db185cdc19c6ae2e1b29749afe01494.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254688/imagefile/cad_ad-e736104eaa1bc6f4322fbdf5a13b49a8.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254766/imagefile/cad_ad-73b584f4aff994f894a6993a4bb3c46e.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254780/imagefile/cad_ad-f1863fbc4fff8b6ab48de4d70f683544.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254704/imagefile/cad_ad-7a903f3919c558184a53247af521f371.jpg",
  "https://media.contemporaryartlibrary.org/store/image/265747/imagefile/cad_ad-027d53e15f88a2d28617a43b498ca711.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254713/imagefile/cad_ad-a25a61625b27b5c9b78a76ba85c60378.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254781/imagefile/cad_ad-c229cce413d19ef3ca42630d7ca6fb26.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254733/imagefile/cad_ad-299acbd1501c2115baebae13f6c737b9.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254700/imagefile/cad_ad-c64956607e80eb70e18ee8bf3a3cd2f1.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254777/imagefile/cad_ad-8010cffadb95888979a90f17a4743984.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254844/imagefile/cad_ad-b5da2e360b99b491bebce97b0848caba.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254760/imagefile/cad_ad-4e86835d51ef92f03afbf82b90a26780.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254696/imagefile/cad_ad-0d1f614ebf8b2ccc361e8bd84e13390d.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254721/imagefile/cad_ad-7cd8824742502929df401c3cb2cb74e3.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254692/imagefile/cad_ad-437110b89510a4f161ad1f912f024900.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254689/imagefile/cad_ad-2b75511f7207ae7e00999cf47dc847d3.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254714/imagefile/cad_ad-0433068d88ea8ce42c8a205ecb59c2a6.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254695/imagefile/cad_ad-012223bbc9a0eae5f9cc56ae8dc5fed4.jpg",
  "https://media.contemporaryartlibrary.org/store/image/265746/imagefile/cad_ad-9c684312aa4bb95b2c7f75397eec186a.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254690/imagefile/cad_ad-4bc511d9730fe06d518865a4567fd9af.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254757/imagefile/cad_ad-5ada14fa7703bdd8103b3f51c52fe8a0.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254691/imagefile/cad_ad-ae8549c613aaa7b8a4aefeb658f8b24c.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254747/imagefile/cad_ad-1db6c2ea36fdb171a57e7afeb860ebd8.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254735/imagefile/cad_ad-e87391e7403083c2a3aed2ae6c259f2c.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254711/imagefile/cad_ad-0b35c7cb01fde5f3b3e6a38e6aa10671.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254703/imagefile/cad_ad-77d7aa4c0f9208a3b74b3ad4cd722f9d.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254752/imagefile/cad_ad-f8f570812b1bad54018727a8ed985695.jpg",
  "https://media.contemporaryartlibrary.org/store/image/255281/imagefile/cad_ad-db60bb0a2c34253b365266571a543266.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254708/imagefile/cad_ad-6d3a15e82ecde4a908cb2f337615a10f.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254726/imagefile/cad_ad-54df78e77918d56ebca7360f1c29f101.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254734/imagefile/cad_ad-163073682d899760b3c93b67bf539bf5.jpg",
  "https://media.contemporaryartlibrary.org/store/image/255274/imagefile/cad_ad-5b9050949a2a411dd59fa2f8e209af30.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254779/imagefile/cad_ad-cc5bf16ad495aeac0e6c1b691e374e9b.jpg",
  "https://media.contemporaryartlibrary.org/store/image/265745/imagefile/cad_ad-2e2ea44a3dea45b354228da72f88e3f9.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254741/imagefile/cad_ad-ba2258c54f83b0863430ca4f3368f598.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254784/imagefile/cad_ad-9a5293c5b2d345097ff989ce46d36907.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254783/imagefile/cad_ad-8268748afb05949868e15708f6db6537.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254769/imagefile/cad_ad-9fbb94b130e02dd398066a13ca43f4c4.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254731/imagefile/cad_ad-a00fb6f807201f0f4513a6d55c3bfe8a.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254751/imagefile/cad_ad-9dc2b4d38b0752c72ee5be713fc6e603.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254985/imagefile/cad_ad-e06d978dc81e83701dadede19bb008e2.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254746/imagefile/cad_ad-fcaa9752630a3ffed8a4298111899b4a.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254750/imagefile/cad_ad-da1d09655fdb64e79a2bd14b90781b63.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254697/imagefile/cad_ad-aa32d9147d3d3dc6a2e79cec228f3f41.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254739/imagefile/cad_ad-62c1931f7211fd8c5de4b7e627bbb7c0.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254705/imagefile/cad_ad-f4e2d53562d61ead347baa995027a4cd.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254725/imagefile/cad_ad-50aa6310626a41f63e140ec9d4162ef0.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254984/imagefile/cad_ad-7d704402930e3c102398791f258a89eb.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254763/imagefile/cad_ad-d2929a8c6bd4b8d77e51e75c7b0383ef.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254716/imagefile/cad_ad-45681ff60fbce934796e92e8c54b443c.jpg",
  "https://media.contemporaryartlibrary.org/store/image/255227/imagefile/cad_ad-5ae09a2b53787c543e7a8b4307b073f9.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254761/imagefile/cad_ad-f58db6ea050cedd472e72eb7e25b3ffe.jpg",
  "https://media.contemporaryartlibrary.org/store/image/255224/imagefile/cad_ad-86f22171ab53f8beeddf571ca5e2cb44.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254983/imagefile/cad_ad-3a4aee7030c77f6ba3de0f3b5537dc06.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254699/imagefile/cad_ad-f750952652924b728ca397a96732c442.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254845/imagefile/cad_ad-8456a7907a3736c40afc3ade20036d73.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254745/imagefile/cad_ad-9d1568348c2c1ac45e4e12a6f9072669.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254775/imagefile/cad_ad-cb95917cc36730e67e34c237ceed3938.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254710/imagefile/cad_ad-1b706967c8321d115d045e6b255b81c4.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254778/imagefile/cad_ad-3e621d0a17ec299b49981bfa153c7bac.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254773/imagefile/cad_ad-181d8587a86ae30e08d1459b033f81f4.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254694/imagefile/cad_ad-28c65d1e3735030049a7f2bcecc13606.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254712/imagefile/cad_ad-c118347e88357f982b850c5995d07a3d.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254782/imagefile/cad_ad-46daf7f5f2ac00eb64a0a5f634925091.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254749/imagefile/cad_ad-b972699a24e7320b79e166d45e772647.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254732/imagefile/cad_ad-cb660397010d2ef0679b63e1dfdfb9dd.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254756/imagefile/cad_ad-f1686b02a075c469da7b7a01d4f776e2.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254842/imagefile/cad_ad-9acbb2ae800a0de7f6078c6d8e69315d.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254776/imagefile/cad_ad-2c7ded29e69a5a6b7717ac3356b440a5.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254770/imagefile/cad_ad-66c63eb419095f5019000b2af22899b8.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254767/imagefile/cad_ad-7e7e6b72b2dbb4f788bdd34c7b439bb0.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254771/imagefile/cad_ad-8159e7d0d36708a4f136fc828a3d186e.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254765/imagefile/cad_ad-fd4774765fb371498e5ff1a2409be558.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254709/imagefile/cad_ad-362d9db8286952ac1c8159cf280d7954.jpg",
  "https://media.contemporaryartlibrary.org/store/image/254843/imagefile/cad_ad-216006c6a91c5e322117a1af6aafcb44.jpg",
]

const artworkDivs = document.querySelectorAll(".artwork-div");
const imgs = document.querySelectorAll("img");

let randStart = Math.floor(Math.random() * RANDOM_ARTWORKS.length)

const randTime = () => {
  return Math.floor(Math.random() * 3) + .5;
}

artworkDivs.forEach((div) => {
  // div.style.left = `${Math.floor(Math.random() * 100) - 25}%`;
  // div.style.top = `${Math.floor(Math.random() * 100) - 25}%`;
  // div.style.width = `${Math.floor(Math.random() * 100) + 250}px`;
  // setTimeout(() => {
  //   const time = randTime();
  //   div.style.transition = `${time}s`;
  //   div.style.opacity = 1;
  //   setTimeout(() => {
  //     div.style.transition = "none";
  //   }, time + 10000)
  // }, Math.random() * 10000 + 500)
  // dragElement(div)
})

imgs.forEach(img => {
  img.src = RANDOM_ARTWORKS[randStart];
  randStart = (randStart + 1) % RANDOM_ARTWORKS.length;
})







// Make the DIV element draggable:
// dragElement(document.getElementById("mydiv"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "header")) {
//     // if present, the header is where you move the DIV from:
//     document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
//   } else {
//     // otherwise, move the DIV from anywhere inside the DIV:
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // get the mouse cursor position at startup:
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     // call a function whenever the cursor moves:
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     // calculate the new cursor position:
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     // set the element's new position:
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     // stop moving when mouse button is released:
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }