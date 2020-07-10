import express from 'express';
import bodyParser from 'body-parser';
import {filterImageFromURL, deleteLocalFiles} from './util/util';

(async () => {

  // Init the Express application
  const app = express();

  // Set the network port
  const port = process.env.PORT || 8082;
  
  // Use the body parser middleware for post requests
  app.use(bodyParser.json());

  // IMPLEMENT A RESTFUL ENDPOINT
  // GET /filteredimage?image_url={{URL}}
  // endpoint to filter an image from a public url.
  // IT SHOULD
  app.get('/filteredimage', async (req: Request, res: Response) => {
    const url = req.query.image_url;
  //    1. validate the image_url query

    if(!url){
        return res.status(400).send({message: 'Image url is required'})
    }

  //    2. call filterImageFromURL(image_url) to filter the image
  // Wait until the promise is filtered.
    const urlFilteredImage = await filterImageFromURL(url);

  //    3. send the resulting file in the response
  // As the method deleteLocalFiles() needs an Array<string> to unsync each local path, the path is first send and then stored in an array

  res.sendFile(urlFilteredImage, (err) => {
    deleteLocalFiles(urlFilteredImage);
    if(err){
        console.log(err);
    }

   //   4. deletes any files on the server on finish of the response


  } )

  });










  // QUERY PARAMATERS
  //    image_url: URL of a publicly accessible image
  // RETURNS
  //   the filtered image file [!!TIP res.sendFile(filteredpath); might be useful]

  /**************************************************************************** */

  //! END
  
  // Root Endpoint
  // Displays a simple message to the user
  app.get( "/", async ( req, res ) => {
    res.send("try GET /filteredimage?image_url={{}}")
  } );
  

  // Start the Server
  app.listen( port, () => {
      console.log( `server running http://localhost:${ port }` );
      console.log( `press CTRL+C to stop server` );
  } );
})();