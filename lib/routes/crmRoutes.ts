import { Request, Response } from "express"

export class Routes {
    public routes(app): void {
        
        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    "message": "GET Request successful"
                })
            })
        
        app.route('/contact')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    "message": "GET Request on /contact successful"
                })
            })
            // create a new contact
            .post((req: Request, res: Response) => {
                res.status(200).send({
                    "message": "POST Request on /contact successful"
                })
            })
            
        app.route('/contact/:contactId')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    "message": "GET Request on /contact/:contactId successful"
                })
            })
            .put((req: Request, res: Response) => {
                res.status(200).send({
                    "message": "PUT Request on /contact/:contactId successful"
                })
            })
            .delete((req: Request, res: Response) => {
                res.status(200).send({
                    "message": "DELETE Request on /contact/:contactId successful"
                })
            })
            
    }
    
    
}