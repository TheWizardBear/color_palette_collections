const getPalette = async ({
  request,
  response
} = {}) => {
  const body  = await request.body()
  const {paletteLength = 5} = await body.value;
  console.log(paletteLength)

  let palette = [];
  for (let i = 0; i < paletteLength; i++) {
    palette.push([]);
    for (let j = 0; j < 3; j++) {
      palette[i].push(Math.floor(Math.random()*256));
    }
  }
  if (palette) {
    response.status = 200
    response.body = palette
  } else {
    response.status = 404
    response.body = {
      message: `Shape not found.`
    }
  }
}


export {
  getPalette
};