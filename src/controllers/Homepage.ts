import { Request, Response, NextFunction, Router } from 'express';
import UserConfig from "../config/UserConfig";

const homepage = ( req:Request, res:Response, next:NextFunction ) => {

    // Make sure that the browser isn't caching this
    res.setHeader(`Cache-Control`, `no-cache, must-revalidate`);
    res.setHeader(`Pragma`,        `no-cache`);
    res.setHeader(`Expires`,       `Sat, 26 Jul 1997 05:00:00 GMT`);

    console.log(UserConfig);

    // Render the home page
    res.render('home', {
        config: UserConfig,
    });
}

export default { homepage }