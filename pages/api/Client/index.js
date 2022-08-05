import dbConnect from '../../../utils/dbConnect';
import Clients from '../../../Models/Clients';

dbConnect()

export default async(req, res) => {
    const { method } = req;  //figures out what request statement is coming in 

    switch(method){
        case 'GET':
            try {
                const clients = await Clients.find({});

                res.status(200).json({succes: true, data: clients});
            } catch (error) {
                
                res.status(400).json({success: false});
            }
            break;
        case 'POST':
            try {
                const client = await Clients.create(req.body); //we put req.body since we are creating a new model

                res.status(201).json({success: true, data: client})
            } catch {
                res.status(400).json({success: false});
            }
            break;
        default:
            res.status(400).json({success: false});
        break;
    }
}       